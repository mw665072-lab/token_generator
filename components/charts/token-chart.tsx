"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts"

const generateMarketData = () => {
  const data = []
  let solPrice = 98.45
  let rayPrice = 2.34
  let bonkPrice = 0.000023

  for (let i = 0; i < 24; i++) {
    solPrice += (Math.random() - 0.5) * 4
    rayPrice += (Math.random() - 0.5) * 0.2
    bonkPrice += (Math.random() - 0.5) * 0.000002

    data.push({
      time: `${i}:00`,
      SOL: Number.parseFloat(solPrice.toFixed(2)),
      RAY: Number.parseFloat(rayPrice.toFixed(2)),
      BONK: Number.parseFloat((bonkPrice * 1000000).toFixed(2)), // Scale BONK for visibility
    })
  }
  return data
}

export function TokenChart() {
  const data = generateMarketData()

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" fontSize={12} />
          <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(0,255,255,0.3)",
              borderRadius: "8px",
              color: "white",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="SOL"
            stroke="#00ffff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#00ffff" }}
          />
          <Line
            type="monotone"
            dataKey="RAY"
            stroke="#ff00ff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#ff00ff" }}
          />
          <Line
            type="monotone"
            dataKey="BONK"
            stroke="#00ff88"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#00ff88" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
