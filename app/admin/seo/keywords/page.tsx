import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, TrendingUp, TrendingDown, Target, Eye } from "lucide-react"

export default function SEOKeywordsManagement() {
  const keywords = [
    {
      id: 1,
      keyword: "solana trading bot",
      position: 3,
      previousPosition: 5,
      clicks: 2847,
      impressions: 45678,
      ctr: 6.23,
      volume: 8900,
      difficulty: "medium",
      intent: "commercial",
      url: "/",
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      keyword: "automated crypto trading",
      position: 7,
      previousPosition: 8,
      clicks: 1923,
      impressions: 28934,
      ctr: 6.64,
      volume: 12000,
      difficulty: "high",
      intent: "commercial",
      url: "/features",
      lastUpdated: "2024-01-15",
    },
    {
      id: 3,
      keyword: "defi trading platform",
      position: 12,
      previousPosition: 10,
      clicks: 1456,
      impressions: 23456,
      ctr: 6.21,
      volume: 5600,
      difficulty: "medium",
      intent: "informational",
      url: "/",
      lastUpdated: "2024-01-14",
    },
    {
      id: 4,
      keyword: "ai trading solana",
      position: 5,
      previousPosition: 6,
      clicks: 2134,
      impressions: 19847,
      ctr: 10.75,
      volume: 3400,
      difficulty: "low",
      intent: "commercial",
      url: "/features",
      lastUpdated: "2024-01-14",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "low":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case "commercial":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "informational":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "navigational":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getPositionTrend = (current: number, previous: number) => {
    if (current < previous) {
      return { icon: <TrendingUp className="w-4 h-4 text-green-400" />, color: "text-green-400" }
    } else if (current > previous) {
      return { icon: <TrendingDown className="w-4 h-4 text-red-400" />, color: "text-red-400" }
    }
    return { icon: <div className="w-4 h-4" />, color: "text-gray-400" }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Keyword Tracking
          </h1>
          <p className="text-muted-foreground mt-2">Monitor and optimize keyword performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            <Target className="w-4 h-4 mr-2" />
            Keyword Research
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Keywords
          </Button>
        </div>
      </div>

      {/* Keyword Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tracked Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">247</div>
            <p className="text-xs text-green-400 mt-1">+12 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Top 10 Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">89</div>
            <p className="text-xs text-green-400 mt-1">+7 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">12.3</div>
            <p className="text-xs text-green-400 mt-1">-1.2 improvement</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-yellow-400">89.2K</div>
            <p className="text-xs text-muted-foreground mt-1">Monthly searches</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Keyword Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search keywords" className="pl-10 bg-gray-800/50 border-gray-700/50" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="top3">Top 3</SelectItem>
                <SelectItem value="top10">Top 10</SelectItem>
                <SelectItem value="top50">Top 50</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulty</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Intent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Intent</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="informational">Informational</SelectItem>
                <SelectItem value="navigational">Navigational</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Keywords List */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Tracked Keywords</CardTitle>
          <CardDescription>Monitor keyword rankings and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {keywords.map((keyword) => {
              const trend = getPositionTrend(keyword.position, keyword.previousPosition)
              return (
                <div
                  key={keyword.id}
                  className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-lg">{keyword.keyword}</span>
                        <Badge className={getDifficultyColor(keyword.difficulty)}>{keyword.difficulty}</Badge>
                        <Badge className={getIntentColor(keyword.intent)}>{keyword.intent}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ranking for: <span className="text-cyan-400">{keyword.url}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-2xl font-bold font-orbitron text-yellow-400">#{keyword.position}</span>
                          {trend.icon}
                        </div>
                        <div className="text-xs text-muted-foreground">Previous: #{keyword.previousPosition}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-4 pt-3 border-t border-gray-700/30">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Clicks</div>
                      <div className="font-medium text-green-400">{keyword.clicks.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Impressions</div>
                      <div className="font-medium">{keyword.impressions.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">CTR</div>
                      <div className="font-medium text-purple-400">{keyword.ctr}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Volume</div>
                      <div className="font-medium text-cyan-400">{keyword.volume.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Updated</div>
                      <div className="font-medium text-xs">{keyword.lastUpdated}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              Load More Keywords
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
