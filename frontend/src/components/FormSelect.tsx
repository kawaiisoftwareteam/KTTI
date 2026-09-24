"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

type FormSelectProps = {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  searchable?: boolean;
};

export default function FormSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "—",
  required = false,
  searchable = false,
}: FormSelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selected = options.find((o) => o.value === value);
  const filtered = searchable
    ? options.filter((o) =>
        o.label.toLowerCase().includes(query.trim().toLowerCase())
      )
    : options;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <label htmlFor={selectId} className="block text-sm sm:text-[0.95rem] font-semibold text-[#2a2a2a] mb-2 leading-snug">
        {label}
        {required ? " *" : ""}
      </label>

      {/* Native input for HTML5 required + form serialization */}
      <input
        id={selectId}
        tabIndex={-1}
        aria-hidden
        required={required}
        value={value}
        onChange={() => undefined}
        className="sr-only"
      />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between gap-3 border bg-white px-4 py-3 text-left text-sm transition-colors ${
          open
            ? "border-[#A71728] ring-1 ring-[#A71728]/30"
            : "border-[#E8D5D5] hover:border-[#A71728]/50"
        }`}
      >
        <span className={selected ? "text-[#1a1a1a] font-medium" : "text-neutral-400"}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#A71728] shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-40 left-0 right-0 mt-1.5 border-2 border-[#A71728]/40 bg-white shadow-[0_12px_40px_rgba(26,26,26,0.12)] overflow-hidden">
          <div className="h-[2px] bg-[#A71728]" />
          {searchable && (
            <div className="p-2 border-b border-[#E8D5D5]">
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="w-full border border-[#E8D5D5] bg-[#FAF7F5] px-3 py-2 text-sm outline-none focus:border-[#A71728]"
              />
            </div>
          )}
          <ul
            role="listbox"
            className="max-h-[min(15rem,50vh)] overflow-y-auto overscroll-contain py-1"
          >
            {!required && (
              <li>
                <button
                  type="button"
                  role="option"
                  aria-selected={!value}
                  onClick={() => {
                    onChange("");
                    setOpen(false);
                    setQuery("");
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-400 hover:bg-[#FFF5F5] text-left"
                >
                  {placeholder}
                </button>
              </li>
            )}
            {filtered.map((opt) => {
              const active = opt.value === value;
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                      active
                        ? "bg-[#A71728] text-white font-semibold"
                        : "text-neutral-800 hover:bg-[#FFF5F5] hover:text-[#A71728]"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {active && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-neutral-400">No matches</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
