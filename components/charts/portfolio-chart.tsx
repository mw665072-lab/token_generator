"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const generatePortfolioData = () => {
  const data = []
  let value = 10000

  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.4) * 500
    value += change
    data.push({
      date: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      value: Number.parseFloat(value.toFixed(2)),
    })
  }
  return data
}

export function PortfolioChart() {
  const data = generatePortfolioData()

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" fontSize={12} />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(0,255,255,0.3)",
              borderRadius: "8px",
              color: "white",
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Portfolio Value"]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00ffff"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: "#00ffff", stroke: "#00ffff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
