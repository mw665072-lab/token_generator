import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ui/logo"
import { Check, ArrowRight, Zap, Crown, Rocket } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners exploring automated trading",
      icon: Zap,
      color: "text-neon-green",
      features: [
        "1 Trading Bot",
        "Basic Analytics",
        "Community Strategies",
        "Email Support",
        "Up to $1,000 trading volume",
        "Standard execution speed",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Advanced features for serious traders",
      icon: Crown,
      color: "text-neon-purple",
      features: [
        "5 Trading Bots",
        "Advanced Analytics",
        "Custom Strategies",
        "Priority Support",
        "Up to $50,000 trading volume",
        "Fast execution speed",
        "Risk management tools",
        "Portfolio optimization",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Maximum performance for professional traders",
      icon: Rocket,
      color: "text-neon-cyan",
      features: [
        "Unlimited Trading Bots",
        "Real-time Analytics",
        "AI Strategy Builder",
        "24/7 Phone Support",
        "Unlimited trading volume",
        "Lightning execution speed",
        "Advanced risk management",
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
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
            Simple Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
            Choose Your <span className="text-neon-purple neon-text">Trading</span> Plan
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative bg-card/50 border-border hover:border-primary/50 transition-all ${
                  plan.popular ? "border-primary/50 neon-glow" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${plan.color}`} />
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-heading font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-primary hover:bg-primary/90 neon-glow" : "bg-secondary hover:bg-secondary/90"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about RoboTrade pricing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Can I change plans anytime?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is
                prorated.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Is there a free trial?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The Starter plan is completely free forever. Pro and Enterprise plans include a 14-day free trial with
                full access to all features.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">What payment methods do you accept?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We accept all major credit cards, PayPal, and cryptocurrency payments including SOL, USDC, and BTC.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Do you offer refunds?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked.
              </CardDescription>
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
              Join thousands of traders using RoboTrade to automate their Solana trading
            </p>
            <Link href="/app/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
                Start Free Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
