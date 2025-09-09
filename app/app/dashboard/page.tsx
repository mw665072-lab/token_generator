"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PortfolioChart } from "@/components/charts/portfolio-chart"
import { ProfitChart } from "@/components/charts/profit-chart"
import { TrendingUp, TrendingDown, Bot, BarChart3, Zap, Target } from "lucide-react"

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("24h")

  // Mock portfolio data
  const portfolioValue = 12450.67
  const portfolioChange = 234.56
  const portfolioChangePercent = 1.92
  const availableBalance = 2340.89

  const positions = [
    { symbol: "SOL", amount: 45.67, value: 4523.45, change: 2.34, changePercent: 5.2 },
    { symbol: "RAY", amount: 1250, value: 2925.0, change: -45.67, changePercent: -1.54 },
    { symbol: "BONK", amount: 2500000, value: 575.0, change: 12.34, changePercent: 2.19 },
    { symbol: "JUP", amount: 890, value: 1234.56, change: 67.89, changePercent: 5.82 },
  ]

  const recentActivity = [
    { type: "buy", symbol: "SOL", amount: 5.0, price: 98.45, time: "2 min ago", status: "completed" },
    { type: "sell", symbol: "RAY", amount: 250, price: 2.34, time: "15 min ago", status: "completed" },
    { type: "buy", symbol: "BONK", amount: 500000, price: 0.000023, time: "1 hour ago", status: "pending" },
    { type: "sell", symbol: "JUP", amount: 100, price: 1.38, time: "2 hours ago", status: "completed" },
  ]

  const activeBots = [
    { name: "Scalping Bot", status: "active", profit: 145.67, trades: 23 },
    { name: "DCA Bot", status: "active", profit: 89.34, trades: 12 },
    { name: "Arbitrage Bot", status: "paused", profit: -12.45, trades: 5 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold neon-text">DASHBOARD</h1>
          <p className="text-muted-foreground">Monitor your AI-powered trading performance</p>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 neon-glow">
            <Zap className="mr-2 w-4 h-4" />
            Quick Trade
          </Button>
          <Link href="/app/analytics">
            <Button variant="outline">
              <BarChart3 className="mr-2 w-4 h-4" />
              Analytics
            </Button>
          </Link>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-2 bg-gradient-to-br from-card/80 to-primary/5 border-primary/20 neon-glow">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Portfolio Value</CardTitle>
            <CardDescription>Total value across all positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-heading font-bold text-neon-cyan">
                  ${portfolioValue.toLocaleString()}
                </span>
                <div className="flex items-center gap-2">
                  {portfolioChange > 0 ? (
                    <TrendingUp className="w-6 h-6 text-neon-green" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-red-400" />
                  )}
                  <span className={`text-xl font-semibold ${portfolioChange > 0 ? "text-neon-green" : "text-red-400"}`}>
                    +${portfolioChange.toFixed(2)} ({portfolioChangePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Available Balance: <span className="font-mono text-foreground">${availableBalance.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <Bot className="w-5 h-5 text-neon-cyan" />
              Active Bots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-heading font-bold text-neon-purple mb-2">3</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Running</span>
                <span className="text-neon-green">2</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Paused</span>
                <span className="text-yellow-400">1</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading">24h Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-heading font-bold text-neon-green mb-2">+5.2%</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profit</span>
                <span className="text-neon-green">$234.56</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Trades</span>
                <span>47</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading">Portfolio Performance</CardTitle>
            <CardDescription>Value over time</CardDescription>
          </CardHeader>
          <CardContent>
            <PortfolioChart />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading">Profit & Loss</CardTitle>
            <CardDescription>Daily P&L breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfitChart />
          </CardContent>
        </Card>
      </div>

      {/* Positions & Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Current Positions */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading">Current Positions</CardTitle>
            <CardDescription>Your active token holdings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {positions.map((position) => (
                <div key={position.symbol} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-sm">{position.symbol}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{position.symbol}</div>
                      <div className="text-sm text-muted-foreground">{position.amount.toFixed(2)} tokens</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-semibold">${position.value.toFixed(2)}</div>
                    <div
                      className={`text-sm flex items-center gap-1 ${position.change > 0 ? "text-neon-green" : "text-red-400"}`}
                    >
                      {position.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {position.changePercent > 0 ? "+" : ""}
                      {position.changePercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading">Recent Activity</CardTitle>
            <CardDescription>Latest trades and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === "buy" ? "bg-neon-green/20" : "bg-red-400/20"
                      }`}
                    >
                      {activity.type === "buy" ? (
                        <TrendingUp className="w-4 h-4 text-neon-green" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {activity.type.toUpperCase()} {activity.symbol}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {activity.amount} @ ${activity.price}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="outline"
                      className={
                        activity.status === "completed"
                          ? "text-neon-green border-neon-green/50"
                          : "text-yellow-400 border-yellow-400/50"
                      }
                    >
                      {activity.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-1">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bot Status */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <Bot className="w-5 h-5 text-neon-cyan" />
            AI Trading Bots
          </CardTitle>
          <CardDescription>Monitor your automated trading strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {activeBots.map((bot, index) => (
              <Card
                key={index}
                className={`bg-muted/30 border-border ${bot.status === "active" ? "border-neon-cyan/50" : ""}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-heading font-semibold">{bot.name}</h4>
                    <Badge
                      variant="outline"
                      className={
                        bot.status === "active"
                          ? "text-neon-green border-neon-green/50"
                          : "text-yellow-400 border-yellow-400/50"
                      }
                    >
                      {bot.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profit</span>
                      <span className={bot.profit > 0 ? "text-neon-green" : "text-red-400"}>
                        ${bot.profit.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Trades</span>
                      <span>{bot.trades}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/app/trading">
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <Target className="w-12 h-12 text-neon-cyan mx-auto mb-4 group-hover:neon-glow transition-all" />
              <h3 className="font-heading font-semibold mb-2">Start Trading</h3>
              <p className="text-sm text-muted-foreground">Execute manual trades</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/app/bot/config">
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <Bot className="w-12 h-12 text-neon-purple mx-auto mb-4 group-hover:neon-glow transition-all" />
              <h3 className="font-heading font-semibold mb-2">Configure Bots</h3>
              <p className="text-sm text-muted-foreground">Set up AI trading strategies</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/app/analytics">
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-12 h-12 text-neon-green mx-auto mb-4 group-hover:neon-glow transition-all" />
              <h3 className="font-heading font-semibold mb-2">View Analytics</h3>
              <p className="text-sm text-muted-foreground">Analyze market data</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
