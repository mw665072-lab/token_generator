import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Plus, Bot, Settings } from "lucide-react"
import Link from "next/link"

export default function BotsPage() {
  const bots = [
    {
      id: 1,
      name: "Scalp Master Pro",
      strategy: "Scalping",
      status: "active",
      profit: 234.56,
      profitPercent: 12.3,
      trades: 156,
      winRate: 68.5,
      risk: "Medium",
    },
    {
      id: 2,
      name: "DCA Accumulator",
      strategy: "Dollar Cost Average",
      status: "active",
      profit: 89.23,
      profitPercent: 5.7,
      trades: 45,
      winRate: 82.2,
      risk: "Low",
    },
    {
      id: 3,
      name: "Momentum Hunter",
      strategy: "Trend Following",
      status: "paused",
      profit: -12.45,
      profitPercent: -2.1,
      trades: 23,
      winRate: 43.5,
      risk: "High",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Trading Bots
          </h1>
          <p className="text-muted-foreground mt-2">Manage your AI-powered trading strategies</p>
        </div>
        <Link href="/app/bots/create">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Plus className="w-4 h-4 mr-2" />
            Create Bot
          </Button>
        </Link>
      </div>

      {/* Bot Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Bots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">2</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">$311.34</div>
            <p className="text-xs text-green-400 mt-1">+8.9% overall</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">224</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-yellow-400">64.7%</div>
          </CardContent>
        </Card>
      </div>

      {/* Bot List */}
      <div className="space-y-4">
        {bots.map((bot) => (
          <Card key={bot.id} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30">
                    <Bot className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-orbitron text-lg">{bot.name}</h3>
                    <p className="text-sm text-muted-foreground">{bot.strategy}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className={`font-bold font-mono ${bot.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
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

                  <Badge
                    variant={bot.risk === "Low" ? "default" : bot.risk === "Medium" ? "secondary" : "destructive"}
                    className={
                      bot.risk === "Low"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : bot.risk === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          : "bg-red-500/20 text-red-400 border-red-500/30"
                    }
                  >
                    {bot.risk} Risk
                  </Badge>

                  <div className="flex items-center gap-3">
                    <Switch checked={bot.status === "active"} className="data-[state=checked]:bg-cyan-500" />
                    <Link href={`/app/bots/${bot.id}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent"
                      >
                        <Settings className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
