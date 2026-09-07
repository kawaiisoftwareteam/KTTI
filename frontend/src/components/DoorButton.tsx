"use client";

import React from "react";

type DoorButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "brand" | "dark" | "outline" | "light";
};

export default function DoorButton({
  children,
  className = "",
  variant = "brand",
  type = "button",
  ...props
}: DoorButtonProps) {
  return (
    <button
      type={type}
      className={`btn-door btn-door--${variant} ${className}`}
      {...props}
    >
      <span className="btn-door__label">{children}</span>
      <span className="btn-door__panel btn-door__panel--left" aria-hidden="true" />
      <span className="btn-door__panel btn-door__panel--right" aria-hidden="true" />
    </button>
  );
}
