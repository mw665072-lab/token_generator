import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, Pause, Trash2, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function BotDetailsPage({ params }: { params: { id: string } }) {
  const bot = {
    id: params.id,
    name: "Scalp Master Pro",
    strategy: "Scalping",
    status: "active",
    profit: 234.56,
    profitPercent: 12.3,
    trades: 156,
    winRate: 68.5,
    risk: "Medium",
    investment: 2000,
    created: "2024-01-10",
    lastActive: "2 minutes ago",
  }

  const recentTrades = [
    { id: 1, pair: "SOL/USDC", type: "buy", amount: 2.5, price: 50.2, profit: 12.5, time: "2 min ago" },
    { id: 2, pair: "SOL/USDC", type: "sell", amount: 2.5, price: 52.1, profit: 4.75, time: "5 min ago" },
    { id: 3, pair: "SOL/USDC", type: "buy", amount: 1.8, price: 49.8, profit: -2.1, time: "12 min ago" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/app/bots">
          <Button variant="outline" size="sm" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {bot.name}
          </h1>
          <p className="text-muted-foreground mt-2">
            {bot.strategy} • Created {bot.created}
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className={`border-green-500/30 hover:bg-green-500/10 bg-transparent ${
              bot.status === "active" ? "text-green-400" : ""
            }`}
          >
            {bot.status === "active" ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {bot.status === "active" ? "Pause" : "Start"}
          </Button>
          <Button variant="outline" className="border-red-500/30 hover:bg-red-500/10 bg-transparent text-red-400">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      {/* Bot Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">+${bot.profit}</div>
            <p className="text-xs text-green-400 mt-1">+{bot.profitPercent}%</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">{bot.trades}</div>
            <p className="text-xs text-muted-foreground mt-1">Last: {bot.lastActive}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">{bot.winRate}%</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              className={
                bot.status === "active"
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "bg-gray-500/20 text-gray-400 border-gray-500/30"
              }
            >
              {bot.status}
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="settings" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="trades">Recent Trades</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Bot Configuration</CardTitle>
                <CardDescription>Adjust your bot's trading parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bot-name">Bot Name</Label>
                  <Input
                    id="bot-name"
                    defaultValue={bot.name}
                    className="bg-gray-800/50 border-gray-700/50 focus:border-cyan-500/50"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Investment Amount: ${bot.investment}</Label>
                  <Slider defaultValue={[bot.investment]} max={10000} min={100} step={100} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$100</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stop-loss">Stop Loss (%)</Label>
                    <Input
                      id="stop-loss"
                      type="number"
                      defaultValue="5"
                      className="bg-gray-800/50 border-gray-700/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="take-profit">Take Profit (%)</Label>
                    <Input
                      id="take-profit"
                      type="number"
                      defaultValue="10"
                      className="bg-gray-800/50 border-gray-700/50"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-restart on Stop</Label>
                    <p className="text-sm text-muted-foreground">Automatically restart bot after stop loss</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  Save Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Risk Management</CardTitle>
                <CardDescription>Monitor and adjust risk parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Risk Level: {bot.risk} (5%)</Label>
                  <Slider defaultValue={[5]} max={20} min={1} step={1} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Conservative</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">Daily Loss Limit</span>
                    </div>
                    <span className="text-sm font-mono">$50 / $100</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Daily Profit Target</span>
                    </div>
                    <span className="text-sm font-mono">$25 / $200</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Emergency Stop</Label>
                    <p className="text-sm text-muted-foreground">Stop all trading immediately</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 hover:bg-red-500/10 bg-transparent text-red-400"
                  >
                    Emergency Stop
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trades">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron">Recent Trades</CardTitle>
              <CardDescription>Latest trading activity from this bot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTrades.map((trade) => (
                  <div
                    key={trade.id}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="flex items-center gap-3">
                      <Badge
                        className={
                          trade.type === "buy"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {trade.type.toUpperCase()}
                      </Badge>
                      <div>
                        <div className="font-medium">{trade.pair}</div>
                        <div className="text-sm text-muted-foreground">{trade.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium font-mono">
                        {trade.amount} @ ${trade.price}
                      </div>
                      <div className={`text-sm ${trade.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {trade.profit >= 0 ? "+" : ""}${trade.profit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron">Performance Analytics</CardTitle>
              <CardDescription>Detailed performance metrics and charts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-orbitron mb-2">Performance Charts Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed performance analytics and charts will be available here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
