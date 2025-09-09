"use client"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TokenChart } from "@/components/charts/token-chart"
import { TrendingUp, TrendingDown, Shield, AlertTriangle, CheckCircle, Target, Bot } from "lucide-react"

export default function TokenAnalysisPage() {
  const params = useParams()
  const tokenSymbol = (params.token as string)?.toUpperCase() || "SOL"

  // Mock detailed token data
  const tokenData = {
    symbol: tokenSymbol,
    name: tokenSymbol === "SOL" ? "Solana" : tokenSymbol === "RAY" ? "Raydium" : "Token",
    price: 98.45,
    change24h: 2.34,
    changePercent: 2.43,
    volume24h: 1234567890,
    marketCap: 45678901234,
    safetyScore: 95,
    liquidity: 987654321,
    holders: 1234567,
    address: "So11111111111111111111111111111111111111112",
    auditStatus: "verified",
    riskLevel: "low",
  }

  const metrics = [
    { label: "Liquidity Pool", value: "$987.6M", status: "high", icon: CheckCircle },
    { label: "Holder Count", value: "1.23M", status: "high", icon: CheckCircle },
    { label: "Contract Audit", value: "Verified", status: "verified", icon: CheckCircle },
    { label: "Rug Pull Risk", value: "Very Low", status: "low", icon: Shield },
    { label: "Volatility", value: "Medium", status: "medium", icon: AlertTriangle },
    { label: "Trading Volume", value: "High", status: "high", icon: TrendingUp },
  ]

  const aiInsights = [
    {
      type: "bullish",
      title: "Strong Technical Indicators",
      description: "RSI and MACD showing bullish momentum with increasing volume",
      confidence: 87,
    },
    {
      type: "neutral",
      title: "Market Correlation",
      description: "Token shows moderate correlation with overall market trends",
      confidence: 72,
    },
    {
      type: "bearish",
      title: "Resistance Level",
      description: "Approaching key resistance at $102.50, potential pullback expected",
      confidence: 65,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "high":
      case "verified":
      case "low":
        return "text-neon-green"
      case "medium":
        return "text-yellow-400"
      default:
        return "text-red-400"
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case "bullish":
        return "border-neon-green/50 bg-neon-green/5"
      case "bearish":
        return "border-red-400/50 bg-red-400/5"
      default:
        return "border-yellow-400/50 bg-yellow-400/5"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
            <span className="font-heading font-bold text-xl">{tokenData.symbol}</span>
          </div>
          <div>
            <h1 className="text-3xl font-heading font-bold">{tokenData.name} Analysis</h1>
            <p className="text-muted-foreground">AI-powered deep dive into {tokenData.symbol}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 neon-glow">
            <Target className="mr-2 w-4 h-4" />
            Trade {tokenData.symbol}
          </Button>
          <Button variant="outline">
            <Bot className="mr-2 w-4 h-4" />
            Set Bot Alert
          </Button>
        </div>
      </div>

      {/* Price Overview */}
      <Card className="bg-gradient-to-br from-card/80 to-primary/5 border-primary/20 neon-glow">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Current Price</p>
              <p className="text-4xl font-heading font-bold text-neon-cyan">${tokenData.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                {tokenData.change24h > 0 ? (
                  <TrendingUp className="w-5 h-5 text-neon-green" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-400" />
                )}
                <span className={`font-semibold ${tokenData.change24h > 0 ? "text-neon-green" : "text-red-400"}`}>
                  {tokenData.changePercent > 0 ? "+" : ""}
                  {tokenData.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Market Cap</p>
              <p className="text-2xl font-heading font-bold">${(tokenData.marketCap / 1000000000).toFixed(1)}B</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">24h Volume</p>
              <p className="text-2xl font-heading font-bold">${(tokenData.volume24h / 1000000).toFixed(1)}M</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Safety Score</p>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-heading font-bold text-neon-green">{tokenData.safetyScore}</div>
                <div className="flex-1">
                  <Progress value={tokenData.safetyScore} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading">Key Metrics</CardTitle>
              <CardDescription>Essential token health indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon
                  return (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon className={`w-8 h-8 ${getStatusColor(metric.status)}`} />
                      <div>
                        <p className="font-semibold">{metric.label}</p>
                        <p className={`text-sm ${getStatusColor(metric.status)}`}>{metric.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Price Chart */}
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading">Price Chart</CardTitle>
              <CardDescription>Historical price movement</CardDescription>
            </CardHeader>
            <CardContent>
              <TokenChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading">Technical Analysis</CardTitle>
              <CardDescription>Advanced technical indicators and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold">Indicators</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>RSI (14)</span>
                      <Badge className="bg-neon-green/20 text-neon-green">67.3 (Bullish)</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>MACD</span>
                      <Badge className="bg-neon-green/20 text-neon-green">Positive</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Moving Average (50)</span>
                      <Badge className="bg-yellow-400/20 text-yellow-400">$94.23</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bollinger Bands</span>
                      <Badge className="bg-neon-purple/20 text-neon-purple">Upper Band</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold">Support & Resistance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Resistance 1</span>
                      <span className="font-mono text-red-400">$102.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Resistance 2</span>
                      <span className="font-mono text-red-400">$108.75</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Support 1</span>
                      <span className="font-mono text-neon-green">$94.20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Support 2</span>
                      <span className="font-mono text-neon-green">$89.15</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading">Security Analysis</CardTitle>
              <CardDescription>Contract audit and security assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-neon-green/5 border-neon-green/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-6 h-6 text-neon-green" />
                        <h4 className="font-heading font-semibold">Contract Verified</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Smart contract has been audited and verified by multiple security firms
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-neon-green/5 border-neon-green/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-neon-green" />
                        <h4 className="font-heading font-semibold">Low Risk Score</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Minimal risk of rug pull or malicious contract behavior
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold">Security Checklist</h4>
                  <div className="space-y-2">
                    {[
                      "Contract source code verified",
                      "No hidden mint functions",
                      "Liquidity locked",
                      "Team tokens vested",
                      "No proxy contracts",
                      "Audit report available",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-neon-green" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-6">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading">AI Market Insights</CardTitle>
              <CardDescription>Machine learning analysis and predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <Card key={index} className={`${getInsightColor(insight.type)}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-heading font-semibold">{insight.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {insight.confidence}% confidence
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <Progress value={insight.confidence} className="h-1" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
