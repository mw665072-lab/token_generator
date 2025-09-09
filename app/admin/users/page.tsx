import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MoreHorizontal, Shield, Ban, Mail } from "lucide-react"

export default function UsersManagement() {
  const users = [
    {
      id: "user_123",
      username: "CryptoTrader99",
      email: "trader@example.com",
      status: "active",
      tier: "pro",
      joinDate: "2024-01-15",
      lastActive: "2 min ago",
      totalProfit: 2847.92,
      activeBots: 3,
      verified: true,
    },
    {
      id: "user_456",
      username: "BotMaster",
      email: "botmaster@example.com",
      status: "active",
      tier: "premium",
      joinDate: "2024-01-10",
      lastActive: "1 hour ago",
      totalProfit: 1923.45,
      activeBots: 5,
      verified: true,
    },
    {
      id: "user_789",
      username: "NewTrader",
      email: "newbie@example.com",
      status: "suspended",
      tier: "free",
      joinDate: "2024-01-20",
      lastActive: "2 days ago",
      totalProfit: -123.45,
      activeBots: 0,
      verified: false,
    },
    {
      id: "user_101",
      username: "WhaleTrader",
      email: "whale@example.com",
      status: "active",
      tier: "enterprise",
      joinDate: "2023-12-01",
      lastActive: "5 min ago",
      totalProfit: 15847.33,
      activeBots: 12,
      verified: true,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "suspended":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "enterprise":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "premium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "pro":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            User Management
          </h1>
          <p className="text-muted-foreground mt-2">Manage platform users and their accounts</p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
          <Mail className="w-4 h-4 mr-2" />
          Send Announcement
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">User Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by username, email, or ID"
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
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Platform Users</CardTitle>
          <CardDescription>Complete list of registered users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border border-cyan-500/30">
                      <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 font-orbitron">
                        {user.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{user.username}</span>
                        {user.verified && <Shield className="w-4 h-4 text-green-400" />}
                      </div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                      <div className="text-xs text-muted-foreground">ID: {user.id}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-medium">Joined: {user.joinDate}</div>
                      <div className="text-xs text-muted-foreground">Last active: {user.lastActive}</div>
                    </div>

                    <div className="text-right">
                      <div className={`font-bold ${user.totalProfit >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {user.totalProfit >= 0 ? "+" : ""}${user.totalProfit}
                      </div>
                      <div className="text-xs text-muted-foreground">{user.activeBots} active bots</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                      <Badge className={getTierColor(user.tier)}>{user.tier}</Badge>
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
                        className="border-red-500/30 hover:bg-red-500/10 bg-transparent text-red-400"
                      >
                        <Ban className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              Load More Users
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
