import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Eye, AlertCircle, CheckCircle } from "lucide-react"

export default function SEOPagesManagement() {
  const pages = [
    {
      id: 1,
      url: "/",
      title: "RoboTrade - AI-Powered Solana DEX",
      metaDescription:
        "Advanced AI trading bots for Solana DeFi. Automate your crypto trading with intelligent algorithms and maximize profits.",
      status: "published",
      lastModified: "2024-01-15",
      clicks: 5234,
      impressions: 45678,
      ctr: 11.46,
      position: 3.2,
      issues: 0,
    },
    {
      id: 2,
      url: "/features",
      title: "Features - Advanced Trading Bots | RoboTrade",
      metaDescription:
        "Discover powerful features of RoboTrade: AI-powered bots, real-time analytics, risk management, and automated trading strategies.",
      status: "published",
      lastModified: "2024-01-14",
      clicks: 2847,
      impressions: 28934,
      ctr: 9.84,
      position: 5.7,
      issues: 1,
    },
    {
      id: 3,
      url: "/pricing",
      title: "Pricing Plans - RoboTrade",
      metaDescription:
        "Choose the perfect plan for your trading needs. Free tier available. Pro and Enterprise plans with advanced features.",
      status: "published",
      lastModified: "2024-01-13",
      clicks: 1923,
      impressions: 19847,
      ctr: 9.69,
      position: 8.1,
      issues: 0,
    },
    {
      id: 4,
      url: "/app/dashboard",
      title: "Trading Dashboard - RoboTrade",
      metaDescription:
        "Access your trading dashboard with real-time portfolio tracking, bot management, and performance analytics.",
      status: "draft",
      lastModified: "2024-01-12",
      clicks: 0,
      impressions: 0,
      ctr: 0,
      position: 0,
      issues: 2,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "draft":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "archived":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SEO Pages Management
          </h1>
          <p className="text-muted-foreground mt-2">Manage page SEO settings and performance</p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          Add New Page
        </Button>
      </div>

      {/* Page Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">47</div>
            <p className="text-xs text-green-400 mt-1">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">42</div>
            <p className="text-xs text-muted-foreground mt-1">89.4% of total</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-yellow-400">5</div>
            <p className="text-xs text-muted-foreground mt-1">Pending review</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-red-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">SEO Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-red-400">8</div>
            <p className="text-xs text-red-400 mt-1">Need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Page Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by URL, title, or description"
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
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Issues" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pages</SelectItem>
                <SelectItem value="issues">With Issues</SelectItem>
                <SelectItem value="no-issues">No Issues</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Pages List */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Website Pages</CardTitle>
          <CardDescription>Manage SEO settings for all pages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pages.map((page) => (
              <div
                key={page.id}
                className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-cyan-400">{page.url}</span>
                      <Badge className={getStatusColor(page.status)}>{page.status}</Badge>
                      {page.issues > 0 ? (
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {page.issues} issue{page.issues > 1 ? "s" : ""}
                        </Badge>
                      ) : (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          No issues
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-medium mb-1">{page.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{page.metaDescription}</p>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/30 hover:bg-purple-500/10 bg-transparent"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {page.status === "published" && (
                  <div className="grid grid-cols-4 gap-4 pt-3 border-t border-gray-700/30">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Clicks</div>
                      <div className="font-medium text-green-400">{page.clicks.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Impressions</div>
                      <div className="font-medium">{page.impressions.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">CTR</div>
                      <div className="font-medium text-purple-400">{page.ctr}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Position</div>
                      <div className="font-medium text-yellow-400">#{page.position}</div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-3 border-t border-gray-700/30 mt-3">
                  <span className="text-xs text-muted-foreground">Last modified: {page.lastModified}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-xs">
                      View Analytics
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs">
                      SEO Audit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
