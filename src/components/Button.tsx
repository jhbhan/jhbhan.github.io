import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

type ButtonVariant = "primary" | "outline" | "ghost"
type ButtonSize = "default" | "icon" | "lg"

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button"
}

interface ButtonAsAnchor extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a"
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const getButtonClasses = (variant: ButtonVariant = "primary", size: ButtonSize = "default") => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer"

  const variantClasses = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10",
    lg: "h-12 px-8 text-lg",
  }

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`
}

export default function Button(props: ButtonProps) {
  const { variant, size, className, children, ...rest } = props
  const classes = `${getButtonClasses(variant, size)} ${className || ""}`

  if (rest.as === "a") {
    const { as: _, ...anchorProps } = rest
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as: _, ...buttonProps } = rest as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
