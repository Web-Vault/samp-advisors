"use client";

import React, { useState } from "react";
import { CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface HelpCardProps {
  item: { title: string; description: string };
}

export function HelpCard({ item }: HelpCardProps) {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div 
      className="group relative bg-white border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 min-h-[200px] flex flex-col justify-center cursor-pointer overflow-hidden"
      onClick={() => setIsTapped(!isTapped)}
    >
      {/* Default State */}
      <div className={cn(
        "p-8 flex flex-col h-full transition-all duration-500",
        isTapped ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-2"
      )}>
        <CheckCircle2 className="text-primary mb-4 shrink-0" size={24} />
        <p className="text-primary font-bold text-lg leading-tight">{item.title}</p>
        
        {/* Mobile Hint */}
        <div className="mt-auto pt-4 flex items-center gap-2 md:hidden">
          <Info size={14} className="text-muted-foreground" />
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Tap to reveal</span>
        </div>
      </div>
      
      {/* Hover/Tapped State */}
      <div className={cn(
        "absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 bg-primary pointer-events-none",
        isTapped 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
      )}>
        <p className="text-white font-bold mb-2 text-sm uppercase tracking-widest border-b border-white/10 pb-2">Our Support:</p>
        <p className="text-white/80 text-sm leading-relaxed">
          {item.description}
        </p>
        
        {/* Mobile Close Hint */}
        <div className="mt-4 flex items-center gap-2 md:hidden">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Tap to close</span>
        </div>
      </div>
    </div>
  );
}
