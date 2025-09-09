import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/ui/logo"
import { ArrowRight, Bot, TrendingUp, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background robot-grid">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Logo size="lg" />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
              AI-Powered <span className="text-neon-cyan neon-text">Solana</span> Auto-DEX
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Automate your Solana trading with AI-driven analysis and robotic precision. Let our advanced algorithms
              trade while you sleep.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
                Launch App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Why Choose <span className="text-neon-purple">RoboTrade</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced AI technology meets decentralized trading for unprecedented automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Bot className="w-12 h-12 text-neon-cyan mb-4" />
              <CardTitle className="font-heading">AI Trading Bots</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Intelligent bots that analyze market patterns and execute trades automatically
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-neon-purple mb-4" />
              <CardTitle className="font-heading">Real-time Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Advanced charts and metrics to track your portfolio performance</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Shield className="w-12 h-12 text-neon-green mb-4" />
              <CardTitle className="font-heading">Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Built-in safety features with customizable stop-loss and take-profit</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <CardTitle className="font-heading">Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Execute trades in milliseconds on the Solana blockchain</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="text-center py-16">
            <h3 className="text-3xl font-heading font-bold mb-4">Ready to Start Trading?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust RoboTrade for their automated Solana trading
            </p>
            <Link href="/app/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
