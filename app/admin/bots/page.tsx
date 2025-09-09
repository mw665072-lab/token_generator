import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Bot, Pause, Play, AlertTriangle, TrendingUp } from "lucide-react"

export default function BotsMonitoring() {
  const bots = [
    {
      id: "bot_001",
      name: "Scalp Master Pro",
      owner: "CryptoTrader99",
      ownerId: "user_123",
      strategy: "Scalping",
      status: "active",
      profit: 2847.92,
      profitPercent: 12.3,
      trades: 1247,
      winRate: 68.5,
      risk: "Medium",
      investment: 2000,
      created: "2024-01-10",
      lastActive: "2 min ago",
      errors: 0,
    },
    {
      id: "bot_002",
      name: "DCA Accumulator",
      owner: "BotMaster",
      ownerId: "user_456",
      strategy: "Dollar Cost Average",
      status: "active",
      profit: 1923.45,
      profitPercent: 8.7,
      trades: 892,
      winRate: 82.2,
      risk: "Low",
      investment: 5000,
      created: "2024-01-08",
      lastActive: "5 min ago",
      errors: 0,
    },
    {
      id: "bot_003",
      name: "Momentum Hunter",
      owner: "NewTrader",
      ownerId: "user_789",
      strategy: "Trend Following",
      status: "error",
      profit: -123.45,
      profitPercent: -2.1,
      trades: 234,
      winRate: 43.5,
      risk: "High",
      investment: 1000,
      created: "2024-01-15",
      lastActive: "2 hours ago",
      errors: 3,
    },
    {
      id: "bot_004",
      name: "Arbitrage Pro",
      owner: "WhaleTrader",
      ownerId: "user_101",
      strategy: "Arbitrage",
      status: "paused",
      profit: 5847.33,
      profitPercent: 15.2,
      trades: 2156,
      winRate: 74.8,
      risk: "Medium",
      investment: 10000,
      created: "2023-12-20",
      lastActive: "1 hour ago",
      errors: 1,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "paused":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "error":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "High":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Bot Monitoring
          </h1>
          <p className="text-muted-foreground mt-2">Monitor and manage all trading bots on the platform</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-red-500/30 hover:bg-red-500/10 bg-transparent text-red-400">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Emergency Stop All
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance Report
          </Button>
        </div>
      </div>

      {/* Bot Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Bots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">3,421</div>
            <p className="text-xs text-green-400 mt-1">+127 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Bots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">2,156</div>
            <p className="text-xs text-muted-foreground mt-1">63% of total</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-red-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Error Bots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-red-400">23</div>
            <p className="text-xs text-red-400 mt-1">0.67% error rate</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">$2.8M</div>
            <p className="text-xs text-green-400 mt-1">+12.3% today</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Bot Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by bot name, owner, or strategy"
                  className="pl-10 bg-gray-800/50 border-gray-700/50"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Strategy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Strategies</SelectItem>
                <SelectItem value="scalping">Scalping</SelectItem>
                <SelectItem value="dca">DCA</SelectItem>
                <SelectItem value="arbitrage">Arbitrage</SelectItem>
                <SelectItem value="momentum">Momentum</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bots List */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Platform Bots</CardTitle>
          <CardDescription>All trading bots across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bots.map((bot) => (
              <div
                key={bot.id}
                className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30">
                      <Bot className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold font-orbitron">{bot.name}</span>
                        {bot.errors > 0 && <AlertTriangle className="w-4 h-4 text-red-400" />}
                      </div>
                      <div className="text-sm text-muted-foreground">{bot.strategy}</div>
                      <div className="text-xs text-muted-foreground">
                        Owner: {bot.owner} • ID: {bot.id}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-medium">Investment</div>
                      <div className="font-mono text-cyan-400">${bot.investment.toLocaleString()}</div>
                    </div>

                    <div className="text-right">
                      <div className={`font-bold ${bot.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {bot.profit >= 0 ? "+" : ""}${bot.profit}
                      </div>
                      <div className={`text-sm ${bot.profitPercent >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {bot.profitPercent >= 0 ? "+" : ""}
                        {bot.profitPercent}%
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-medium">{bot.trades} trades</div>
                      <div className="text-sm text-muted-foreground">{bot.winRate}% win rate</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Badge className={getStatusColor(bot.status)}>{bot.status}</Badge>
                      <Badge className={getRiskColor(bot.risk)}>{bot.risk} Risk</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent"
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${
                          bot.status === "active"
                            ? "border-yellow-500/30 hover:bg-yellow-500/10 text-yellow-400"
                            : "border-green-500/30 hover:bg-green-500/10 text-green-400"
                        } bg-transparent`}
                      >
                        {bot.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {bot.errors > 0 && (
                  <div className="mt-3 pt-3 border-t border-red-500/30">
                    <div className="flex items-center gap-2 text-sm text-red-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>
                        {bot.errors} error(s) detected - Last active: {bot.lastActive}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              Load More Bots
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
