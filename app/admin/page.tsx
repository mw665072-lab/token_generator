import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Bot, TrendingUp, AlertTriangle, Shield, Activity } from "lucide-react"

export default function AdminDashboard() {
  const stats = {
    totalUsers: 12847,
    activeUsers: 8934,
    totalBots: 3421,
    activeBots: 2156,
    totalVolume: 2847392.45,
    platformRevenue: 45892.33,
  }

  const recentAlerts = [
    { id: 1, type: "security", message: "Unusual login activity detected", severity: "high", time: "2 min ago" },
    { id: 2, type: "system", message: "High server load on trading engine", severity: "medium", time: "15 min ago" },
    { id: 3, type: "bot", message: "Bot error rate increased by 12%", severity: "medium", time: "1 hour ago" },
    { id: 4, type: "user", message: "New user registration spike", severity: "low", time: "2 hours ago" },
  ]

  const topPerformingBots = [
    { name: "Scalp Master Pro", owner: "user_123", profit: 2847.92, trades: 1247 },
    { name: "DCA Accumulator", owner: "user_456", profit: 1923.45, trades: 892 },
    { name: "Momentum Hunter", owner: "user_789", profit: 1456.78, trades: 634 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Platform overview and system monitoring</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            <Activity className="w-4 h-4 mr-2" />
            System Status
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Shield className="w-4 h-4 mr-2" />
            Security Center
          </Button>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-green-400 mt-1">+12.5% this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">{stats.activeUsers.toLocaleString()}</div>
            <p className="text-xs text-green-400 mt-1">69.5% of total</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Active Bots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">{stats.activeBots.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">{stats.totalBots.toLocaleString()} total</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Total Volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-yellow-400">
              ${stats.totalVolume.toLocaleString()}
            </div>
            <p className="text-xs text-green-400 mt-1">+8.3% today</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Platform Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">
              ${stats.platformRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-green-400 mt-1">+15.2% this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-red-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-red-400">4</div>
            <p className="text-xs text-red-400 mt-1">2 high priority</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-red-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              System Alerts
            </CardTitle>
            <CardDescription>Recent platform alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                >
                  <div className="flex items-center gap-3">
                    <Badge
                      className={
                        alert.severity === "high"
                          ? "bg-red-500/20 text-red-400 border-red-500/30"
                          : alert.severity === "medium"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }
                    >
                      {alert.severity}
                    </Badge>
                    <div>
                      <div className="font-medium text-sm">{alert.message}</div>
                      <div className="text-xs text-muted-foreground">{alert.time}</div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Bots */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-400" />
              Top Performing Bots
            </CardTitle>
            <CardDescription>Highest earning bots on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingBots.map((bot, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                >
                  <div>
                    <div className="font-medium">{bot.name}</div>
                    <div className="text-sm text-muted-foreground">Owner: {bot.owner}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-400">${bot.profit}</div>
                    <div className="text-xs text-muted-foreground">{bot.trades} trades</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
