import React from "react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function BenefitCard({ title, description, icon, className }: BenefitCardProps) {
  return (
    <div className={cn(
      "group flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-text">{title}</h3>
      <p className="text-sm text-muted leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}
