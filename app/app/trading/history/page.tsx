"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search, Download, TrendingUp } from "lucide-react"

interface TradeHistory {
  id: string
  pair: string
  type: "buy" | "sell"
  amount: number
  price: number
  total: number
  fee: number
  status: "completed" | "pending" | "failed"
  timestamp: Date
  pnl?: number
}

export default function TradeHistoryPage() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock trade history data
  const trades: TradeHistory[] = [
    {
      id: "trade-001",
      pair: "SOL/USDC",
      type: "buy",
      amount: 10.5,
      price: 98.45,
      total: 1033.73,
      fee: 2.07,
      status: "completed",
      timestamp: new Date(Date.now() - 3600000),
      pnl: 45.23,
    },
    {
      id: "trade-002",
      pair: "RAY/SOL",
      type: "sell",
      amount: 250,
      price: 2.34,
      total: 585.0,
      fee: 1.17,
      status: "completed",
      timestamp: new Date(Date.now() - 7200000),
      pnl: -12.45,
    },
    {
      id: "trade-003",
      pair: "SOL/USDC",
      type: "buy",
      amount: 5.0,
      price: 96.12,
      total: 480.6,
      fee: 0.96,
      status: "pending",
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: "trade-004",
      pair: "BONK/SOL",
      type: "sell",
      amount: 1000000,
      price: 0.000023,
      total: 23.0,
      fee: 0.05,
      status: "failed",
      timestamp: new Date(Date.now() - 10800000),
    },
  ]

  const filteredTrades = trades.filter((trade) => {
    const matchesFilter = filter === "all" || trade.type === filter || trade.status === filter
    const matchesSearch =
      trade.pair.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.id.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-neon-green border-neon-green/50"
      case "pending":
        return "text-yellow-400 border-yellow-400/50"
      case "failed":
        return "text-red-400 border-red-400/50"
      default:
        return "text-muted-foreground"
    }
  }

  const getPnLColor = (pnl?: number) => {
    if (!pnl) return "text-muted-foreground"
    return pnl > 0 ? "text-neon-green" : "text-red-400"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold">Trade History</h1>
          <p className="text-muted-foreground">View and analyze your trading performance</p>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 w-4 h-4" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Trades</p>
                <p className="text-2xl font-heading font-bold">1,247</p>
              </div>
              <TrendingUp className="w-8 h-8 text-neon-cyan" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Volume</p>
                <p className="text-2xl font-heading font-bold">$45,230</p>
              </div>
              <TrendingUp className="w-8 h-8 text-neon-purple" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total P&L</p>
                <p className="text-2xl font-heading font-bold text-neon-green">+$2,340</p>
              </div>
              <TrendingUp className="w-8 h-8 text-neon-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Win Rate</p>
                <p className="text-2xl font-heading font-bold">68.5%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-card/50 border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search trades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Trades</SelectItem>
                <SelectItem value="buy">Buy Orders</SelectItem>
                <SelectItem value="sell">Sell Orders</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Trade History Table */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="font-heading">Recent Trades</CardTitle>
          <CardDescription>Your trading activity and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-8 gap-4 text-sm font-semibold text-muted-foreground border-b border-border pb-2">
              <div>Trade ID</div>
              <div>Pair</div>
              <div>Type</div>
              <div className="text-right">Amount</div>
              <div className="text-right">Price</div>
              <div className="text-right">Total</div>
              <div className="text-right">P&L</div>
              <div className="text-right">Status</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2">
              {filteredTrades.map((trade) => (
                <div key={trade.id} className="grid grid-cols-8 gap-4 text-sm hover:bg-muted/50 p-2 rounded">
                  <div className="font-mono text-neon-cyan">{trade.id}</div>
                  <div className="font-semibold">{trade.pair}</div>
                  <div>
                    <Badge
                      variant="outline"
                      className={
                        trade.type === "buy" ? "text-neon-green border-neon-green/50" : "text-red-400 border-red-400/50"
                      }
                    >
                      {trade.type.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="text-right font-mono">{trade.amount.toFixed(2)}</div>
                  <div className="text-right font-mono">${trade.price.toFixed(2)}</div>
                  <div className="text-right font-mono">${trade.total.toFixed(2)}</div>
                  <div className={`text-right font-mono ${getPnLColor(trade.pnl)}`}>
                    {trade.pnl ? (trade.pnl > 0 ? "+" : "") + trade.pnl.toFixed(2) : "-"}
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className={getStatusColor(trade.status)}>
                      {trade.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
