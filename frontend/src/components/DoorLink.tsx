"use client";

import React from "react";

type DoorLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  variant?: "brand" | "dark" | "outline" | "light";
};

export default function DoorLink({
  children,
  className = "",
  variant = "brand",
  ...props
}: DoorLinkProps) {
  return (
    <a className={`btn-door btn-door--${variant} ${className}`} {...props}>
      <span className="btn-door__label">{children}</span>
      <span className="btn-door__panel btn-door__panel--left" aria-hidden="true" />
      <span className="btn-door__panel btn-door__panel--right" aria-hidden="true" />
    </a>
  );
}
