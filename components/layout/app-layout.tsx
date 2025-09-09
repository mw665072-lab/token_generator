import type React from "react"
import { MainNav } from "@/components/navigation/main-nav"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background robot-grid">
      <MainNav />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
