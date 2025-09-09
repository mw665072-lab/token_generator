"use client"

import { useState, useEffect } from "react"

interface OrderBookEntry {
  price: number
  amount: number
  total: number
}

export function OrderBook() {
  const [asks, setAsks] = useState<OrderBookEntry[]>([])
  const [bids, setBids] = useState<OrderBookEntry[]>([])

  useEffect(() => {
    // Generate mock order book data
    const generateOrders = (basePrice: number, isAsk: boolean) => {
      const orders: OrderBookEntry[] = []
      let total = 0

      for (let i = 0; i < 10; i++) {
        const priceOffset = isAsk ? i * 0.1 : -i * 0.1
        const price = basePrice + priceOffset
        const amount = Math.random() * 100 + 10
        total += amount

        orders.push({
          price: Number.parseFloat(price.toFixed(2)),
          amount: Number.parseFloat(amount.toFixed(2)),
          total: Number.parseFloat(total.toFixed(2)),
        })
      }

      return orders
    }

    setAsks(generateOrders(98.45, true))
    setBids(generateOrders(98.45, false).reverse())
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 text-xs font-semibold text-muted-foreground border-b border-border pb-2">
        <div>Price (USDC)</div>
        <div className="text-right">Amount (SOL)</div>
        <div className="text-right">Total</div>
      </div>

      {/* Asks (Sell Orders) */}
      <div className="space-y-1">
        {asks.map((ask, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 text-xs hover:bg-red-500/10 p-1 rounded">
            <div className="text-red-400 font-mono">{ask.price.toFixed(2)}</div>
            <div className="text-right font-mono">{ask.amount.toFixed(2)}</div>
            <div className="text-right font-mono text-muted-foreground">{ask.total.toFixed(2)}</div>
          </div>
        ))}
      </div>

      {/* Spread */}
      <div className="text-center py-2 border-y border-border">
        <div className="text-sm font-semibold">
          Spread: <span className="text-neon-cyan">$0.02</span>
        </div>
      </div>

      {/* Bids (Buy Orders) */}
      <div className="space-y-1">
        {bids.map((bid, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 text-xs hover:bg-green-500/10 p-1 rounded">
            <div className="text-neon-green font-mono">{bid.price.toFixed(2)}</div>
            <div className="text-right font-mono">{bid.amount.toFixed(2)}</div>
            <div className="text-right font-mono text-muted-foreground">{bid.total.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
