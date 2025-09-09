export const NAVIGATION_ITEMS = [
  { name: "Dashboard", href: "/app/dashboard", icon: "LayoutDashboard" },
  { name: "Trading", href: "/app/trading", icon: "TrendingUp" },
  { name: "Analytics", href: "/app/analytics", icon: "BarChart3" },
  { name: "Wallet", href: "/app/wallet/deposit", icon: "Wallet" },
  { name: "Bot", href: "/app/bot/config", icon: "Bot" },
  { name: "Community", href: "/app/community", icon: "Users" },
  { name: "Profile", href: "/app/profile", icon: "User" },
] as const

export const ADMIN_NAVIGATION_ITEMS = [
  { name: "Dashboard", href: "/admin/dashboard", icon: "LayoutDashboard" },
  { name: "Users", href: "/admin/users", icon: "Users" },
  { name: "Analytics", href: "/admin/analytics", icon: "BarChart3" },
  { name: "System", href: "/admin/system", icon: "Settings" },
  { name: "SEO", href: "/admin/seo", icon: "Search" },
  { name: "Content", href: "/admin/content", icon: "FileText" },
  { name: "Settings", href: "/admin/settings", icon: "Cog" },
] as const

export const RISK_LEVELS = {
  low: { color: "text-green-400", label: "Low Risk", multiplier: 1 },
  medium: { color: "text-yellow-400", label: "Medium Risk", multiplier: 2 },
  high: { color: "text-red-400", label: "High Risk", multiplier: 3 },
} as const

export const TRADING_PAIRS = ["SOL/USDC", "RAY/SOL", "BONK/SOL", "JUP/SOL", "ORCA/SOL"] as const
