import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "secondary"
  className?: string
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors"

  const variantClasses = {
    default: "bg-gray-900 text-gray-50",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className || ""}`

  return <div className={classes}>{children}</div>
}
