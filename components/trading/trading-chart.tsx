"use client"

import { useState } from "react"
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"

// Mock candlestick data
const generateMockData = () => {
  const data = []
  let price = 98.45

  for (let i = 0; i < 100; i++) {
    const change = (Math.random() - 0.5) * 4
    price += change
    data.push({
      time: new Date(Date.now() - (100 - i) * 60000).toLocaleTimeString(),
      price: Number.parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 1000000),
    })
  }
  return data
}

export function TradingChart() {
  const [timeframe, setTimeframe] = useState("1H")
  const [data] = useState(generateMockData())

  const timeframes = ["1M", "5M", "15M", "1H", "4H", "1D"]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {timeframes.map((tf) => (
            <Button
              key={tf}
              variant={timeframe === tf ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeframe(tf)}
              className={timeframe === tf ? "bg-primary neon-glow" : ""}
            >
              {tf}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" fontSize={12} />
            <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} domain={["dataMin - 2", "dataMax + 2"]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(0,255,255,0.3)",
                borderRadius: "8px",
                color: "white",
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#00ffff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#00ffff", stroke: "#00ffff" }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
