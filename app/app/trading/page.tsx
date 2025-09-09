"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { TradingChart } from "@/components/trading/trading-chart"
import { OrderBook } from "@/components/trading/order-book"
import { RecentTrades } from "@/components/trading/recent-trades"
import { TrendingUp, TrendingDown, Bot, Zap, Shield, Target } from "lucide-react"
import { TRADING_PAIRS } from "@/lib/constants"

export default function TradingPage() {
  const [selectedPair, setSelectedPair] = useState("SOL/USDC")
  const [orderType, setOrderType] = useState<"market" | "limit">("market")
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [botEnabled, setBotEnabled] = useState(false)

  // Mock data
  const currentPrice = 98.45
  const priceChange = 2.34
  const priceChangePercent = 2.43

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold">Trading Interface</h1>
          <p className="text-muted-foreground">Execute trades with AI-powered precision</p>
        </div>

        <div className="flex items-center gap-4">
          <Select value={selectedPair} onValueChange={setSelectedPair}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRADING_PAIRS.map((pair) => (
                <SelectItem key={pair} value={pair}>
                  {pair}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Switch checked={botEnabled} onCheckedChange={setBotEnabled} />
            <Label className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-neon-cyan" />
              AI Bot
            </Label>
          </div>
        </div>
      </div>

      {/* Price Info */}
      <Card className="bg-card/50 border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-heading font-bold">{selectedPair}</h2>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-3xl font-mono font-bold">${currentPrice.toFixed(2)}</span>
                <div className="flex items-center gap-2">
                  {priceChange > 0 ? (
                    <TrendingUp className="w-5 h-5 text-neon-green" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  )}
                  <span className={`font-semibold ${priceChange > 0 ? "text-neon-green" : "text-red-400"}`}>
                    +${priceChange.toFixed(2)} (+{priceChangePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">24h High</p>
                <p className="font-mono font-semibold">$102.34</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">24h Low</p>
                <p className="font-mono font-semibold">$94.12</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Volume</p>
                <p className="font-mono font-semibold">2.4M</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Trading Interface */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading">Price Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <TradingChart />
            </CardContent>
          </Card>
        </div>

        {/* Trading Panel */}
        <div className="space-y-6">
          {/* Order Form */}
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading">Place Order</CardTitle>
              <CardDescription>Execute trades manually or with AI assistance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs value={tradeType} onValueChange={(value) => setTradeType(value as "buy" | "sell")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy" className="text-neon-green data-[state=active]:bg-neon-green/20">
                    Buy
                  </TabsTrigger>
                  <TabsTrigger value="sell" className="text-red-400 data-[state=active]:bg-red-400/20">
                    Sell
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buy" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Order Type</Label>
                    <Select value={orderType} onValueChange={(value) => setOrderType(value as "market" | "limit")}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="market">Market Order</SelectItem>
                        <SelectItem value="limit">Limit Order</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {orderType === "limit" && (
                    <div className="space-y-2">
                      <Label>Price (USDC)</Label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Amount (SOL)</Label>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Total (USDC)</Label>
                    <div className="p-3 bg-muted rounded-md">
                      <span className="font-mono">
                        {amount && (orderType === "market" ? currentPrice : Number.parseFloat(price || "0"))
                          ? (
                              Number.parseFloat(amount || "0") *
                              (orderType === "market" ? currentPrice : Number.parseFloat(price || "0"))
                            ).toFixed(2)
                          : "0.00"}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-neon-green hover:bg-neon-green/90 text-black neon-glow">
                    <Target className="mr-2 w-4 h-4" />
                    Buy SOL
                  </Button>
                </TabsContent>

                <TabsContent value="sell" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Order Type</Label>
                    <Select value={orderType} onValueChange={(value) => setOrderType(value as "market" | "limit")}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="market">Market Order</SelectItem>
                        <SelectItem value="limit">Limit Order</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {orderType === "limit" && (
                    <div className="space-y-2">
                      <Label>Price (USDC)</Label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Amount (SOL)</Label>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Total (USDC)</Label>
                    <div className="p-3 bg-muted rounded-md">
                      <span className="font-mono">
                        {amount && (orderType === "market" ? currentPrice : Number.parseFloat(price || "0"))
                          ? (
                              Number.parseFloat(amount || "0") *
                              (orderType === "market" ? currentPrice : Number.parseFloat(price || "0"))
                            ).toFixed(2)
                          : "0.00"}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-red-500 hover:bg-red-500/90 neon-glow">
                    <TrendingDown className="mr-2 w-4 h-4" />
                    Sell SOL
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* AI Bot Status */}
          {botEnabled && (
            <Card className="bg-card/50 border-primary/50 neon-glow">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Bot className="w-5 h-5 text-neon-cyan" />
                  AI Bot Active
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Status</span>
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50">
                    <Zap className="w-3 h-3 mr-1" />
                    Monitoring
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Risk Level</span>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400/50">
                    Medium
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Next Action</span>
                  <span className="text-sm text-muted-foreground">Analyzing...</span>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Shield className="mr-2 w-4 h-4" />
                  Configure Bot
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Order Book and Recent Trades */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading">Order Book</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderBook />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="font-heading">Recent Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTrades />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
