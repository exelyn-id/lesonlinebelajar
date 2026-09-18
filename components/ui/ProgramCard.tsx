import React from "react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  className?: string;
}

export function ProgramCard({ title, description, icon, badge, className }: ProgramCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
      className
    )}>
      {/* Decorative background blob */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-light opacity-50 transition-transform duration-500 group-hover:scale-150" />
      
      <div className="relative z-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-text">{title}</h3>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
        
        <p className="text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
