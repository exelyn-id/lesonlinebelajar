import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ children, subtitle, centered = true, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight mb-4",
        light ? "text-white" : "text-text"
      )}>
        {children}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg max-w-2xl",
          centered && "mx-auto",
          light ? "text-primary-light" : "text-muted"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
