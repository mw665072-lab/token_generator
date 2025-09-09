import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ui/logo"
import { ArrowRight, Shield, Brain, Target, BarChart3, Users, Lock, Smartphone, Clock } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background robot-grid">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <Link href="/app/dashboard">
              <Button className="bg-primary hover:bg-primary/90 neon-glow">Launch App</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="outline" className="text-neon-cyan border-neon-cyan/50">
            Advanced Features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
            Powerful <span className="text-neon-purple neon-text">AI Trading</span> Features
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Discover the cutting-edge technology that powers RoboTrade's automated trading platform
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all lg:col-span-2">
            <CardHeader>
              <Brain className="w-16 h-16 text-neon-cyan mb-4" />
              <CardTitle className="font-heading text-2xl">Advanced AI Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base">
                Our proprietary AI algorithms analyze thousands of data points in real-time to identify profitable
                trading opportunities on the Solana blockchain.
              </CardDescription>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  Market sentiment analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  Technical indicator processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  Liquidity pool monitoring
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  Risk assessment algorithms
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Target className="w-16 h-16 text-neon-purple mb-4" />
              <CardTitle className="font-heading text-xl">Precision Trading</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Execute trades with millisecond precision using our optimized smart contracts and direct DEX
                integrations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Complete Trading Suite</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for successful automated trading in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-neon-green mb-4" />
              <CardTitle className="font-heading">Real-time Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive dashboards with live market data, portfolio tracking, and performance metrics
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <CardTitle className="font-heading">Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced stop-loss, take-profit, and position sizing to protect your investments
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="font-heading">Community Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Share and discover trading strategies from the RoboTrade community</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Lock className="w-12 h-12 text-red-400 mb-4" />
              <CardTitle className="font-heading">Secure Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Non-custodial wallet integration with enterprise-grade security protocols
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Smartphone className="w-12 h-12 text-green-400 mb-4" />
              <CardTitle className="font-heading">Mobile Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Fully responsive design for trading on any device, anywhere</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Clock className="w-12 h-12 text-yellow-400 mb-4" />
              <CardTitle className="font-heading">24/7 Trading</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Automated bots work around the clock to capture market opportunities</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="text-center py-16">
            <h3 className="text-3xl font-heading font-bold mb-4">Ready to Experience RoboTrade?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your automated trading journey with our advanced AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
                  Start Trading Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
