"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
  imageIcon?: React.ReactNode;
  imageUrl?: string;
}

export default function CourseCard({
  title,
  description,
  href,
  tag,
  imageIcon,
  imageUrl,
}: CourseCardProps) {
  return (
    <div className="flex flex-col h-full bg-[#A71728] border border-white/20 hover:border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden relative">
      {imageUrl && (
        <div className="w-full h-48 sm:h-52 overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 sm:p-8 flex-grow flex flex-col">
        {tag && (
          <span className="inline-block px-3 py-1 bg-white text-[#A71728] text-xs font-bold uppercase tracking-wider mb-4 self-start shadow-sm">
            {tag}
          </span>
        )}
        
        <div className="mb-4 text-white/90">
          {imageIcon ? imageIcon : <BookOpen className="w-10 h-10 stroke-[1.5]" />}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-bold text-white mt-auto self-start hover:gap-3 transition-all"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
