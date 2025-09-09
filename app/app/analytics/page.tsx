"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { TokenChart } from "@/components/charts/token-chart"
import { Search, TrendingUp, TrendingDown, Shield, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export default function AnalyticsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("market_cap")

  // Mock token data
  const tokens = [
    {
      symbol: "SOL",
      name: "Solana",
      price: 98.45,
      change24h: 2.34,
      changePercent: 2.43,
      volume24h: 1234567890,
      marketCap: 45678901234,
      safetyScore: 95,
      liquidity: 987654321,
      address: "So11111111111111111111111111111111111111112",
    },
    {
      symbol: "RAY",
      name: "Raydium",
      price: 2.34,
      change24h: -0.12,
      changePercent: -4.87,
      volume24h: 123456789,
      marketCap: 567890123,
      safetyScore: 88,
      liquidity: 98765432,
      address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
    },
    {
      symbol: "BONK",
      name: "Bonk",
      price: 0.000023,
      change24h: 0.000001,
      changePercent: 4.55,
      volume24h: 98765432,
      marketCap: 1234567890,
      safetyScore: 72,
      liquidity: 45678901,
      address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    },
    {
      symbol: "JUP",
      name: "Jupiter",
      price: 1.38,
      change24h: 0.08,
      changePercent: 6.15,
      volume24h: 87654321,
      marketCap: 876543210,
      safetyScore: 91,
      liquidity: 76543210,
      address: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
    },
  ]

  const getSafetyColor = (score: number) => {
    if (score >= 90) return "text-neon-green"
    if (score >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getSafetyIcon = (score: number) => {
    if (score >= 90) return CheckCircle
    if (score >= 70) return AlertTriangle
    return Shield
  }

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold">Token Analytics</h1>
          <p className="text-muted-foreground">AI-powered market analysis and token insights</p>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 neon-glow">
            <TrendingUp className="mr-2 w-4 h-4" />
            Market Overview
          </Button>
        </div>
      </div>

      {/* Market Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Market Cap</p>
                <p className="text-2xl font-heading font-bold">$2.1T</p>
              </div>
              <TrendingUp className="w-8 h-8 text-neon-green" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <TrendingUp className="w-4 h-4 text-neon-green" />
              <span className="text-sm text-neon-green">+2.4%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">24h Volume</p>
                <p className="text-2xl font-heading font-bold">$89.2B</p>
              </div>
              <TrendingUp className="w-8 h-8 text-neon-purple" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <TrendingDown className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400">-1.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Tokens</p>
                <p className="text-2xl font-heading font-bold">2,847</p>
              </div>
              <Shield className="w-8 h-8 text-neon-cyan" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <CheckCircle className="w-4 h-4 text-neon-green" />
              <span className="text-sm text-neon-green">Verified</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AI Confidence</p>
                <p className="text-2xl font-heading font-bold">87%</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <TrendingUp className="w-4 h-4 text-neon-green" />
              <span className="text-sm text-neon-green">High</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-card/50 border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tokens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="market_cap">Market Cap</SelectItem>
                <SelectItem value="volume">24h Volume</SelectItem>
                <SelectItem value="price_change">Price Change</SelectItem>
                <SelectItem value="safety_score">Safety Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Token List */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="font-heading">Top Tokens</CardTitle>
          <CardDescription>AI-analyzed token performance and safety metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-muted-foreground border-b border-border pb-2">
              <div>Token</div>
              <div className="text-right">Price</div>
              <div className="text-right">24h Change</div>
              <div className="text-right">Volume</div>
              <div className="text-right">Market Cap</div>
              <div className="text-right">Safety Score</div>
              <div className="text-right">Action</div>
            </div>

            {/* Token Rows */}
            <div className="space-y-2">
              {filteredTokens.map((token) => {
                const SafetyIcon = getSafetyIcon(token.safetyScore)
                return (
                  <div key={token.symbol} className="grid grid-cols-7 gap-4 text-sm hover:bg-muted/50 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                        <span className="font-heading font-bold text-xs">{token.symbol}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{token.symbol}</div>
                        <div className="text-xs text-muted-foreground">{token.name}</div>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      ${token.price < 1 ? token.price.toFixed(6) : token.price.toFixed(2)}
                    </div>

                    <div
                      className={`text-right flex items-center justify-end gap-1 ${
                        token.change24h > 0 ? "text-neon-green" : "text-red-400"
                      }`}
                    >
                      {token.change24h > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {token.changePercent > 0 ? "+" : ""}
                      {token.changePercent.toFixed(2)}%
                    </div>

                    <div className="text-right font-mono">${(token.volume24h / 1000000).toFixed(1)}M</div>

                    <div className="text-right font-mono">${(token.marketCap / 1000000000).toFixed(1)}B</div>

                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <SafetyIcon className={`w-4 h-4 ${getSafetyColor(token.safetyScore)}`} />
                        <span className={`font-semibold ${getSafetyColor(token.safetyScore)}`}>
                          {token.safetyScore}
                        </span>
                      </div>
                      <Progress value={token.safetyScore} className="w-16 h-1 mt-1" />
                    </div>

                    <div className="text-right">
                      <Link href={`/app/analytics/${token.symbol.toLowerCase()}`}>
                        <Button size="sm" variant="outline">
                          Analyze
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Trends Chart */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="font-heading">Market Trends</CardTitle>
          <CardDescription>Overall market performance and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <TokenChart />
        </CardContent>
      </Card>
    </div>
  )
}
