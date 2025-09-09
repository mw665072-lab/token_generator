import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, TrendingDown, Eye, MousePointer } from "lucide-react"

export default function SEODashboard() {
  const seoStats = {
    totalPages: 47,
    indexedPages: 42,
    avgPosition: 12.3,
    totalClicks: 15847,
    totalImpressions: 234567,
    ctr: 6.76,
  }

  const topPages = [
    {
      url: "/",
      title: "RoboTrade - AI-Powered Solana DEX",
      clicks: 5234,
      impressions: 45678,
      ctr: 11.46,
      position: 3.2,
      trend: "up",
    },
    {
      url: "/features",
      title: "Features - Advanced Trading Bots",
      clicks: 2847,
      impressions: 28934,
      ctr: 9.84,
      position: 5.7,
      trend: "up",
    },
    {
      url: "/pricing",
      title: "Pricing Plans - RoboTrade",
      clicks: 1923,
      impressions: 19847,
      ctr: 9.69,
      position: 8.1,
      trend: "down",
    },
    {
      url: "/faq",
      title: "FAQ - Frequently Asked Questions",
      clicks: 1456,
      impressions: 23456,
      ctr: 6.21,
      position: 15.3,
      trend: "stable",
    },
  ]

  const topKeywords = [
    { keyword: "solana trading bot", position: 3, clicks: 2847, volume: 8900, difficulty: "medium" },
    { keyword: "automated crypto trading", position: 7, clicks: 1923, volume: 12000, difficulty: "high" },
    { keyword: "defi trading platform", position: 12, clicks: 1456, volume: 5600, difficulty: "medium" },
    { keyword: "ai trading solana", position: 5, clicks: 2134, volume: 3400, difficulty: "low" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-400" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-400" />
      default:
        return <div className="w-4 h-4" />
    }
  }

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SEO Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Monitor and optimize search engine performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            <Search className="w-4 h-4 mr-2" />
            Keyword Research
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            Generate Report
          </Button>
        </div>
      </div>

      {/* SEO Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Indexed Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">
              {seoStats.indexedPages}/{seoStats.totalPages}
            </div>
            <p className="text-xs text-green-400 mt-1">89.4% coverage</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MousePointer className="w-4 h-4" />
              Total Clicks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">
              {seoStats.totalClicks.toLocaleString()}
            </div>
            <p className="text-xs text-green-400 mt-1">+12.3% this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Impressions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">
              {seoStats.totalImpressions.toLocaleString()}
            </div>
            <p className="text-xs text-green-400 mt-1">+8.7% this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Click-Through Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-yellow-400">{seoStats.ctr}%</div>
            <p className="text-xs text-green-400 mt-1">+0.3% this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-orange-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-orange-400">{seoStats.avgPosition}</div>
            <p className="text-xs text-green-400 mt-1">-1.2 positions</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Pages */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron">Top Performing Pages</CardTitle>
            <CardDescription>Pages with highest search performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm truncate max-w-[200px]">{page.title}</span>
                      {getTrendIcon(page.trend)}
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">
                      Pos {page.position}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{page.url}</div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-muted-foreground">Clicks</div>
                      <div className="font-medium text-green-400">{page.clicks.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Impressions</div>
                      <div className="font-medium">{page.impressions.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">CTR</div>
                      <div className="font-medium text-purple-400">{page.ctr}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Keywords */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="font-orbitron">Top Keywords</CardTitle>
            <CardDescription>Highest performing search terms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topKeywords.map((keyword, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{keyword.keyword}</span>
                    <div className="flex items-center gap-2">
                      <Badge className={getDifficultyColor(keyword.difficulty)}>{keyword.difficulty}</Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                        #{keyword.position}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-muted-foreground">Clicks</div>
                      <div className="font-medium text-green-400">{keyword.clicks.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Volume</div>
                      <div className="font-medium">{keyword.volume.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Position</div>
                      <div className="font-medium text-yellow-400">#{keyword.position}</div>
                    </div>
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
