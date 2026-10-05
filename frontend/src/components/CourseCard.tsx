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
  quickFacts,
}: CourseCardProps & { quickFacts?: string }) {
  return (
    <div className="flex flex-col h-full bg-[#A71728] border border-white/20 hover:border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden relative rounded-2xl">
      <div className="p-6 sm:p-7 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="text-white/90">
            {imageIcon ? imageIcon : <BookOpen className="w-8 h-8 stroke-[1.5]" />}
          </div>
          {tag && (
            <span className="inline-block px-3 py-1 bg-white text-[#A71728] text-[10px] font-bold uppercase tracking-wider shadow-sm rounded-full">
              {tag}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-white/80 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {quickFacts && (
          <div className="mb-6 p-3 bg-white/10 border border-white/10 text-white/90 text-xs leading-relaxed">
            <span className="font-bold block mb-1">Quick Facts:</span>
            {quickFacts}
          </div>
        )}
        
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
