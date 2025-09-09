export interface User {
  id: string
  walletAddress: string
  email?: string
  username: string
  createdAt: Date
  updatedAt: Date
}

export interface Token {
  id: string
  symbol: string
  name: string
  address: string
  price: number
  change24h: number
  volume24h: number
  marketCap: number
  liquidity: number
  safetyScore: number
}

export interface Trade {
  id: string
  userId: string
  tokenAddress: string
  type: "buy" | "sell"
  amount: number
  price: number
  total: number
  timestamp: Date
  status: "pending" | "completed" | "failed"
}

export interface BotConfig {
  id: string
  userId: string
  name: string
  isActive: boolean
  riskLevel: "low" | "medium" | "high"
  stopLoss: number
  takeProfit: number
  maxInvestment: number
  strategies: string[]
  createdAt: Date
  updatedAt: Date
}

export interface SEOSettings {
  id: string
  page: string
  title: string
  description: string
  ogImage?: string
  keywords: string[]
  updatedAt: Date
}

export interface AnalyticsData {
  totalUsers: number
  totalTrades: number
  totalVolume: number
  activeBots: number
  topTokens: Token[]
}
