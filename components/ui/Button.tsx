import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "light"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
  as?: React.ElementType
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, as, ...props }, ref) => {
    const Comp = as || "button"
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-center",
          {
            "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95": variant === "primary",
            "border-2 border-primary text-primary hover:bg-primary/10": variant === "outline",
            "hover:bg-primary/10 text-primary": variant === "ghost",
            "bg-white text-primary hover:bg-cream shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95": variant === "light",
            
            "h-10 px-6 py-2 text-sm": size === "default",
            "h-9 rounded-md px-4 text-xs": size === "sm",
            "min-h-14 h-auto py-3.5 px-6 sm:px-8 text-sm sm:text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
