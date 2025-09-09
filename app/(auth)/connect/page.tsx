import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ui/logo"
import { ArrowRight, Wallet, Shield, Zap, CheckCircle } from "lucide-react"

export default function ConnectWalletPage() {
  const wallets = [
    {
      name: "Phantom",
      description: "The most popular Solana wallet",
      icon: "🟣",
      recommended: true,
    },
    {
      name: "Solflare",
      description: "Secure and feature-rich wallet",
      icon: "🟠",
      recommended: false,
    },
    {
      name: "Backpack",
      description: "Modern wallet with advanced features",
      icon: "🎒",
      recommended: false,
    },
    {
      name: "Glow",
      description: "Simple and elegant wallet",
      icon: "✨",
      recommended: false,
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Non-Custodial",
      description: "You always maintain full control of your funds",
    },
    {
      icon: Zap,
      title: "Instant Connection",
      description: "Connect in seconds with one click",
    },
    {
      icon: CheckCircle,
      title: "Secure",
      description: "Industry-standard security protocols",
    },
  ]

  return (
    <div className="min-h-screen bg-background robot-grid">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="outline" className="text-neon-cyan border-neon-cyan/50">
            Wallet Connection
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
            Connect Your <span className="text-neon-purple neon-text">Solana</span> Wallet
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Choose your preferred Solana wallet to start automated trading with RoboTrade
          </p>
        </div>
      </section>

      {/* Wallet Selection */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Select Your Wallet</h2>
            <p className="text-muted-foreground">
              RoboTrade supports all major Solana wallets. Choose the one you prefer.
            </p>
          </div>

          <div className="grid gap-4">
            {wallets.map((wallet) => (
              <Card
                key={wallet.name}
                className={`bg-card/50 border-border hover:border-primary/50 transition-all cursor-pointer group ${
                  wallet.recommended ? "border-primary/50" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{wallet.icon}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading font-semibold text-lg">{wallet.name}</h3>
                          {wallet.recommended && (
                            <Badge variant="secondary" className="text-xs">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{wallet.description}</p>
                      </div>
                    </div>
                    <Button className="group-hover:neon-glow transition-all">
                      Connect
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground mb-4">Don't have a Solana wallet yet?</p>
            <Button variant="outline" size="sm">
              Learn How to Create One
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Connect Your Wallet?</h2>
            <p className="text-muted-foreground text-lg">
              Experience the benefits of decentralized trading with RoboTrade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="bg-card/50 border-border text-center">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                    <CardTitle className="font-heading">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="text-center py-16">
            <Shield className="w-16 h-16 text-neon-green mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold mb-4">Your Security is Our Priority</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              RoboTrade never stores your private keys or has access to your funds. All transactions are signed directly
              by your wallet, ensuring maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
                <Wallet className="mr-2 w-5 h-5" />
                Connect Wallet Now
              </Button>
              <Link href="/features">
                <Button size="lg" variant="outline">
                  Learn More About Security
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
