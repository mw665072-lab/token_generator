import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center neon-glow">
          <div className="w-4 h-4 bg-robot-dark rounded-sm"></div>
        </div>
      </div>
      <span className={cn("font-heading font-bold text-neon-cyan neon-text tracking-wider", sizeClasses[size])}>
        ROBOTRADE
      </span>
    </div>
  )
}
