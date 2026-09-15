/**
 * Capture CV preview pages and download a multi-page A4 PDF.
 * Uses modern-screenshot (oklch-safe with Tailwind v4) + jsPDF.
 */

const WATERMARK_SRC = "/ktti-logo.png";
const WATERMARK_OPACITY = 0.1;
const WATERMARK_ANGLE = -32;
const WATERMARK_WIDTH_MM = 118;

async function loadImageDataUrl(src: string): Promise<string> {
  const res = await fetch(src);
  if (!res.ok) throw new Error(`Failed to load watermark (${res.status}).`);
  const blob = await res.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read watermark image."));
    reader.readAsDataURL(blob);
  });
}

function drawDiagonalWatermark(
  pdf: InstanceType<typeof import("jspdf").jsPDF>,
  logoDataUrl: string,
  pageW: number,
  pageH: number
) {
  const logoW = WATERMARK_WIDTH_MM;
  const logoH = logoW * (413 / 1246);
  const x = (pageW - logoW) / 2;
  const y = (pageH - logoH) / 2;

  pdf.saveGraphicsState();
  pdf.setGState(pdf.GState({ opacity: WATERMARK_OPACITY }));
  pdf.addImage(
    logoDataUrl,
    "PNG",
    x,
    y,
    logoW,
    logoH,
    "ktti-wm",
    "FAST",
    WATERMARK_ANGLE
  );
  pdf.restoreGraphicsState();
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

  const logoDataUrl = await loadImageDataUrl(WATERMARK_SRC);

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
      const dataUrl = await domToJpeg(el, {
        quality: 0.95,
        scale: 2,
        backgroundColor: "#ffffff",
        style: {
          boxShadow: "none",
          transform: "none",
        },
      });

      // Probe image size
      const dims = await new Promise<{ w: number; h: number }>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => reject(new Error("Failed to encode CV page image."));
        img.src = dataUrl;
      });

      if (!dims.w || !dims.h) {
        throw new Error("Failed to render CV page.");
      }

      const ratio = Math.min(maxW / dims.w, maxH / dims.h);
      const w = dims.w * ratio;
      const h = dims.h * ratio;
      const x = (pageW - w) / 2;
      const y = margin;

      if (i > 0) pdf.addPage();
      pdf.addImage(dataUrl, "JPEG", x, y, w, h, undefined, "FAST");
      drawDiagonalWatermark(pdf, logoDataUrl, pageW, pageH);
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
