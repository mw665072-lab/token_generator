import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, DollarSign, TrendingUp, Activity, Download, Calendar } from "lucide-react"

export default function PlatformAnalytics() {
  const analytics = {
    revenue: {
      total: 145892.33,
      monthly: 23847.92,
      growth: 15.2,
    },
    users: {
      total: 12847,
      active: 8934,
      new: 347,
      retention: 78.5,
    },
    trading: {
      volume: 2847392.45,
      trades: 45892,
      avgTradeSize: 62.1,
      successRate: 68.7,
    },
    bots: {
      total: 3421,
      active: 2156,
      profitable: 1847,
      profitability: 85.7,
    },
  }

  const topStrategies = [
    { name: "Scalping", bots: 1247, volume: 847392, profit: 23847.92, winRate: 72.3 },
    { name: "DCA", bots: 892, volume: 634821, profit: 18923.45, winRate: 84.2 },
    { name: "Arbitrage", bots: 634, volume: 923847, profit: 34567.89, winRate: 91.5 },
    { name: "Momentum", bots: 456, volume: 234567, profit: 12345.67, winRate: 65.8 },
  ]

  const revenueStreams = [
    { source: "Trading Fees", amount: 89234.56, percentage: 61.2 },
    { source: "Premium Subscriptions", amount: 34567.89, percentage: 23.7 },
    { source: "Bot Marketplace", amount: 15678.9, percentage: 10.7 },
    { source: "API Access", amount: 6410.98, percentage: 4.4 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Platform Analytics
          </h1>
          <p className="text-muted-foreground mt-2">Comprehensive platform performance metrics</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">
              ${analytics.revenue.total.toLocaleString()}
            </div>
            <p className="text-xs text-green-400 mt-1">+{analytics.revenue.growth}% this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">
              {analytics.users.active.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{analytics.users.total.toLocaleString()} total</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trading Volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">
              ${(analytics.trading.volume / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-green-400 mt-1">+12.8% this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-yellow-400">{analytics.trading.successRate}%</div>
            <p className="text-xs text-green-400 mt-1">+2.3% improvement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Strategies */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron">Top Trading Strategies</CardTitle>
            <CardDescription>Most popular and profitable strategies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStrategies.map((strategy, index) => (
                <div key={index} className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{strategy.name}</span>
                    <span className="text-sm text-green-400 font-mono">+${strategy.profit.toLocaleString()}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-muted-foreground">Bots</div>
                      <div className="font-medium text-cyan-400">{strategy.bots.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Volume</div>
                      <div className="font-medium">${(strategy.volume / 1000).toFixed(0)}K</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Win Rate</div>
                      <div className="font-medium text-purple-400">{strategy.winRate}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue Breakdown */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron">Revenue Streams</CardTitle>
            <CardDescription>Platform revenue by source</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueStreams.map((stream, index) => (
                <div key={index} className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{stream.source}</span>
                    <span className="text-sm font-mono text-green-400">${stream.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: `${stream.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-12">{stream.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron">User Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">New Users (30d)</span>
              <span className="font-medium text-green-400">+{analytics.users.new}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Retention Rate</span>
              <span className="font-medium text-purple-400">{analytics.users.retention}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Active/Total Ratio</span>
              <span className="font-medium text-cyan-400">
                {((analytics.users.active / analytics.users.total) * 100).toFixed(1)}%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron">Trading Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Trades</span>
              <span className="font-medium text-yellow-400">{analytics.trading.trades.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Avg Trade Size</span>
              <span className="font-medium text-green-400">${analytics.trading.avgTradeSize}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Success Rate</span>
              <span className="font-medium text-purple-400">{analytics.trading.successRate}%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron">Bot Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Profitable Bots</span>
              <span className="font-medium text-green-400">{analytics.bots.profitable.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Profitability Rate</span>
              <span className="font-medium text-cyan-400">{analytics.bots.profitability}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Active/Total Ratio</span>
              <span className="font-medium text-purple-400">
                {((analytics.bots.active / analytics.bots.total) * 100).toFixed(1)}%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
