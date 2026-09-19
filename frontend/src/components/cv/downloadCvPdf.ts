/**
 * Capture CV preview pages and download a multi-page A4 PDF.
 * Uses modern-screenshot (oklch-safe with Tailwind v4) + jsPDF.
 *
 * Watermark is baked into each page's raster image (not a separate PDF
 * layer), so it can't be stripped by deleting PDF objects / layer removers.
 */

const WATERMARK_SRC = "/ktti-logo.png";
const WATERMARK_OPACITY = 0.1;
const WATERMARK_ANGLE_DEG = -32;
/** Watermark width as a fraction of the page image width. */
const WATERMARK_WIDTH_RATIO = 0.72;

function loadHtmlImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/**
 * Flatten page JPEG + diagonal logo into one image so the watermark
 * is part of the pixels, not a removable PDF overlay.
 */
async function bakeWatermarkIntoPage(
  pageDataUrl: string,
  logo: HTMLImageElement
): Promise<{ dataUrl: string; w: number; h: number }> {
  const page = await loadHtmlImage(pageDataUrl);
  const w = page.naturalWidth;
  const h = page.naturalHeight;
  if (!w || !h) throw new Error("Failed to render CV page.");

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable for watermark.");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(page, 0, 0);

  const logoW = w * WATERMARK_WIDTH_RATIO;
  const logoH = logoW * (logo.naturalHeight / logo.naturalWidth);

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate((WATERMARK_ANGLE_DEG * Math.PI) / 180);
  ctx.globalAlpha = WATERMARK_OPACITY;
  ctx.drawImage(logo, -logoW / 2, -logoH / 2, logoW, logoH);
  ctx.restore();

  return {
    dataUrl: canvas.toDataURL("image/jpeg", 0.95),
    w,
    h,
  };
}

export async function downloadCvPdf(options: {
  pageIds?: string[];
  fileName: string;
}): Promise<void> {
  const { pageIds = ["cv-page-1", "cv-page-2"], fileName } = options;

  const pages = pageIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));

  if (pages.length === 0) {
    throw new Error("CV preview not found. Switch to Preview and try again.");
  }

  const { domToJpeg } = await import("modern-screenshot");
  const jspdfMod = await import("jspdf");
  const JsPDF =
    jspdfMod.jsPDF ??
    (jspdfMod as unknown as { default: typeof jspdfMod.jsPDF }).default;

  if (!JsPDF) {
    throw new Error("jsPDF failed to load.");
  }

  const logo = await loadHtmlImage(WATERMARK_SRC);

  const pdf = new JsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const margin = 8;
  const maxW = pageW - margin * 2;
  const maxH = pageH - margin * 2;

  // Force scale wrappers to 1× so capture is full A4 resolution
  document.documentElement.classList.add("cv-pdf-capturing");

  // Temporarily reveal hidden ancestors so layout is measurable
  const unlocks: Array<() => void> = [];
  for (const page of pages) {
    let node: HTMLElement | null = page;
    while (node && node !== document.body) {
      const style = window.getComputedStyle(node);
      if (style.display === "none" || style.visibility === "hidden") {
        const prevDisplay = node.style.display;
        const prevVisibility = node.style.visibility;
        const prevPosition = node.style.position;
        const prevLeft = node.style.left;
        const el = node;
        el.style.display = "block";
        el.style.visibility = "visible";
        el.style.position = "fixed";
        el.style.left = "-12000px";
        unlocks.push(() => {
          el.style.display = prevDisplay;
          el.style.visibility = prevVisibility;
          el.style.position = prevPosition;
          el.style.left = prevLeft;
        });
      }
      node = node.parentElement;
    }
  }

  try {
    await new Promise((r) => requestAnimationFrame(() => r(undefined)));
    await new Promise((r) => setTimeout(r, 80));

    for (let i = 0; i < pages.length; i++) {
      const el = pages[i];
      const rawPage = await domToJpeg(el, {
        quality: 0.95,
        scale: 2,
        backgroundColor: "#ffffff",
        style: {
          boxShadow: "none",
          transform: "none",
        },
      });

      const baked = await bakeWatermarkIntoPage(rawPage, logo);

      const ratio = Math.min(maxW / baked.w, maxH / baked.h);
      const w = baked.w * ratio;
      const h = baked.h * ratio;
      const x = (pageW - w) / 2;
      const y = margin;

      if (i > 0) pdf.addPage();
      // One flattened image per page — no separate watermark PDF object.
      pdf.addImage(baked.dataUrl, "JPEG", x, y, w, h, undefined, "FAST");
    }

    const finalName = fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`;

    const blob = pdf.output("blob");
    if (!blob || blob.size < 100) {
      throw new Error("Generated PDF was empty.");
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = finalName;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  } finally {
    unlocks.forEach((fn) => fn());
    document.documentElement.classList.remove("cv-pdf-capturing");
  }
}

/** Wait until React has painted the preview (needed on mobile Edit tab). */
export function waitForPreviewPaint(setPreviewTab: () => void): Promise<void> {
  setPreviewTab();
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(resolve, 150);
      });
    });
  });
}
