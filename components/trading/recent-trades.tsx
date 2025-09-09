"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

interface Trade {
  id: string
  price: number
  amount: number
  time: string
  type: "buy" | "sell"
}

export function RecentTrades() {
  const [trades, setTrades] = useState<Trade[]>([])

  useEffect(() => {
    // Generate mock recent trades
    const generateTrades = () => {
      const mockTrades: Trade[] = []
      let basePrice = 98.45

      for (let i = 0; i < 20; i++) {
        const priceChange = (Math.random() - 0.5) * 0.5
        basePrice += priceChange

        mockTrades.push({
          id: `trade-${i}`,
          price: Number.parseFloat(basePrice.toFixed(2)),
          amount: Number.parseFloat((Math.random() * 10 + 0.1).toFixed(2)),
          time: new Date(Date.now() - i * 30000).toLocaleTimeString(),
          type: Math.random() > 0.5 ? "buy" : "sell",
        })
      }

      return mockTrades
    }

    setTrades(generateTrades())
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-muted-foreground border-b border-border pb-2">
        <div>Price (USDC)</div>
        <div className="text-right">Amount (SOL)</div>
        <div className="text-right">Time</div>
        <div className="text-right">Type</div>
      </div>

      <div className="space-y-1 max-h-80 overflow-y-auto">
        {trades.map((trade) => (
          <div key={trade.id} className="grid grid-cols-4 gap-4 text-xs hover:bg-muted/50 p-1 rounded">
            <div className={`font-mono ${trade.type === "buy" ? "text-neon-green" : "text-red-400"}`}>
              {trade.price.toFixed(2)}
            </div>
            <div className="text-right font-mono">{trade.amount.toFixed(2)}</div>
            <div className="text-right text-muted-foreground">{trade.time}</div>
            <div className="text-right">
              <Badge
                variant="outline"
                className={`text-xs ${
                  trade.type === "buy" ? "text-neon-green border-neon-green/50" : "text-red-400 border-red-400/50"
                }`}
              >
                {trade.type.toUpperCase()}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
