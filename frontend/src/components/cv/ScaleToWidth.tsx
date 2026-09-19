"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  /** Intrinsic design width (px) of the content. */
  width: number;
  children: React.ReactNode;
  className?: string;
};

/**
 * Scales children down to fit the container width without reflowing layout.
 * Keeps A4 / fixed-width sheets intact on narrow screens and when
 * browser text size / zoom changes.
 *
 * During PDF capture (`html.cv-pdf-capturing`), scale is forced to 1 so
 * screenshots stay full resolution.
 */
export default function ScaleToWidth({ width, children, className = "" }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentH, setContentH] = useState(0);
  const [pdfMode, setPdfMode] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const measure = () => {
      const avail = outer.clientWidth;
      const next = avail > 0 ? Math.min(1, avail / width) : 1;
      setScale(next);
      setContentH(inner.scrollHeight);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    ro.observe(inner);

    const onPdf = () => setPdfMode(document.documentElement.classList.contains("cv-pdf-capturing"));
    const mo = new MutationObserver(onPdf);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [width]);

  const effective = pdfMode ? 1 : scale;

  return (
    <div
      ref={outerRef}
      className={`w-full min-w-0 ${className}`}
      data-cv-scale-root
    >
      <div
        style={{
          height: contentH > 0 ? contentH * effective : undefined,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          ref={innerRef}
          data-cv-scale
          style={{
            width,
            transform: `scale(${effective})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
