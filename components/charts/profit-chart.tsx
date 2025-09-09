"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const generateProfitData = () => {
  const data = []

  for (let i = 0; i < 7; i++) {
    const profit = (Math.random() - 0.3) * 200
    data.push({
      day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      profit: Number.parseFloat(profit.toFixed(2)),
    })
  }
  return data
}

export function ProfitChart() {
  const data = generateProfitData()

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" fontSize={12} />
          <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(0,255,255,0.3)",
              borderRadius: "8px",
              color: "white",
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, "P&L"]}
          />
          <Bar dataKey="profit" fill={(entry) => (entry.profit > 0 ? "#00ff88" : "#ff4444")} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
