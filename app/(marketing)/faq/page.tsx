import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ui/logo"
import { ArrowRight, HelpCircle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I connect my Solana wallet?",
          answer:
            "Simply click the 'Connect Wallet' button and select your preferred Solana wallet (Phantom, Solflare, etc.). RoboTrade supports all major Solana wallets and uses secure, non-custodial connections.",
        },
        {
          question: "Is RoboTrade safe to use?",
          answer:
            "Yes, RoboTrade is completely non-custodial, meaning you always maintain control of your funds. We use audited smart contracts and industry-standard security practices to protect your assets.",
        },
        {
          question: "What is the minimum amount to start trading?",
          answer:
            "You can start with as little as 0.1 SOL. However, we recommend starting with at least 1 SOL to account for transaction fees and have meaningful trading positions.",
        },
      ],
    },
    {
      category: "Trading & Bots",
      questions: [
        {
          question: "How do the AI trading bots work?",
          answer:
            "Our AI bots analyze market data, technical indicators, and on-chain metrics in real-time. They execute trades based on predefined strategies and risk parameters that you set, operating 24/7 without human intervention.",
        },
        {
          question: "Can I customize my trading strategies?",
          answer:
            "You can create custom strategies, adjust risk levels, set stop-loss and take-profit parameters, and choose which tokens to trade. Pro and Enterprise users get access to advanced strategy builders.",
        },
        {
          question: "What happens if the market crashes?",
          answer:
            "RoboTrade includes built-in risk management features like stop-loss orders, position sizing, and emergency stop functions. You can set maximum loss limits to protect your portfolio during volatile periods.",
        },
      ],
    },
    {
      category: "Fees & Pricing",
      questions: [
        {
          question: "What fees does RoboTrade charge?",
          answer:
            "RoboTrade charges a small performance fee (2-5% depending on your plan) only on profitable trades. There are no monthly fees for the Starter plan, and no hidden charges. You also pay standard Solana network fees.",
        },
        {
          question: "Are there any withdrawal fees?",
          answer:
            "No, RoboTrade doesn't charge withdrawal fees since we're non-custodial. You only pay the standard Solana network transaction fees when moving your funds.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your Pro or Enterprise subscription at any time. Your bots will continue running until the end of your billing period, and you can always downgrade to the free Starter plan.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if my bot stops working?",
          answer:
            "Our monitoring systems track all bots 24/7. If a bot encounters an issue, you'll be notified immediately via email/SMS. Our support team can help troubleshoot and restart bots if needed.",
        },
        {
          question: "Do you offer customer support?",
          answer:
            "Yes! Starter users get email support, Pro users get priority support, and Enterprise users get 24/7 phone support with a dedicated account manager.",
        },
        {
          question: "Is there a mobile app?",
          answer:
            "RoboTrade is fully responsive and works perfectly on mobile browsers. We're currently developing native iOS and Android apps, which will be available in Q2 2024.",
        },
      ],
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
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
            Frequently Asked <span className="text-neon-purple neon-text">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Find answers to common questions about RoboTrade's AI-powered trading platform
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-16 max-w-4xl mx-auto">
          {faqs.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-neon-cyan" />
                <h2 className="text-2xl font-heading font-bold">{category.category}</h2>
              </div>

              <div className="grid gap-6">
                {category.questions.map((faq, index) => (
                  <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-all">
                    <CardHeader>
                      <CardTitle className="font-heading text-lg text-left">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{faq.answer}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="text-center py-16">
            <h3 className="text-3xl font-heading font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of RoboTrade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/app/dashboard">
                <Button size="lg" variant="outline">
                  Try RoboTrade Free
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
