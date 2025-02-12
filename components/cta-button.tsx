import Link from "next/link"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

interface CTAButtonProps {
  href: string
  variant?: "outline" | "solid"
  className?: string
  children: React.ReactNode
}

export function CTAButton({ href, variant = "outline", className, children }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block px-6 py-3 transition-colors duration-200",
        variant === "outline" && "border border-dashed border-zinc-400 hover:border-zinc-600",
        variant === "solid" && "bg-zinc-900 text-white hover:bg-zinc-800",
        className,
      )}
    >
      {children}
    </Link>
  )
}

