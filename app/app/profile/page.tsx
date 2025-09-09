import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Shield, Trophy, Calendar, Edit } from "lucide-react"

export default function ProfilePage() {
  const userStats = {
    totalTrades: 1247,
    winRate: 68.5,
    totalProfit: 2847.92,
    activeBots: 3,
    memberSince: "March 2024",
  }

  const achievements = [
    { name: "First Trade", description: "Completed your first trade", earned: true },
    { name: "Profit Master", description: "Achieved $1000+ profit", earned: true },
    { name: "Bot Creator", description: "Created your first trading bot", earned: true },
    { name: "High Roller", description: "Trade with $10,000+", earned: false },
    { name: "Consistency King", description: "30 days of profitable trading", earned: false },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Profile
          </h1>
          <p className="text-muted-foreground mt-2">Manage your account and trading preferences</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Info */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-24 h-24 border-2 border-cyan-500/30">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xl font-orbitron">
                      RT
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Change Avatar
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="RoboTrader" className="bg-gray-800/50 border-gray-700/50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="trader@robotrade.com"
                      className="bg-gray-800/50 border-gray-700/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wallet">Connected Wallet</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="wallet"
                        defaultValue="9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"
                        className="bg-gray-800/50 border-gray-700/50 font-mono text-sm"
                        readOnly
                      />
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Connected</Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            {/* Account Status */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="font-orbitron">Account Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <Shield className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <div className="font-medium">Account Verified</div>
                          <div className="text-sm text-muted-foreground">KYC completed</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                          <User className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium">Pro Trader</div>
                          <div className="text-sm text-muted-foreground">Premium features enabled</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Calendar className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <div className="font-medium">Member Since</div>
                          <div className="text-sm text-muted-foreground">{userStats.memberSince}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                          <Mail className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <div className="font-medium">Email Verified</div>
                          <div className="text-sm text-muted-foreground">Notifications enabled</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="font-orbitron">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold font-orbitron text-cyan-400">
                        {userStats.totalTrades.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Trades</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold font-orbitron text-green-400">{userStats.winRate}%</div>
                      <div className="text-sm text-muted-foreground">Win Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold font-orbitron text-purple-400">
                        ${userStats.totalProfit.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Profit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold font-orbitron text-yellow-400">{userStats.activeBots}</div>
                      <div className="text-sm text-muted-foreground">Active Bots</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron">Detailed Statistics</CardTitle>
              <CardDescription>Your complete trading performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-orbitron mb-2">Advanced Stats Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed analytics and performance metrics will be available here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron">Achievements</CardTitle>
              <CardDescription>Your trading milestones and accomplishments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      achievement.earned
                        ? "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30"
                        : "bg-gray-800/30 border-gray-700/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          achievement.earned ? "bg-gradient-to-br from-cyan-500/20 to-purple-500/20" : "bg-gray-700/50"
                        }`}
                      >
                        <Trophy className={`w-5 h-5 ${achievement.earned ? "text-cyan-400" : "text-gray-500"}`} />
                      </div>
                      <div>
                        <div className={`font-medium ${achievement.earned ? "text-cyan-400" : "text-gray-400"}`}>
                          {achievement.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
