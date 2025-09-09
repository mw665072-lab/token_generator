import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink, Plus, Send, ArrowDownLeft, ArrowUpRight } from "lucide-react"

export default function WalletPage() {
  const walletBalance = 1247.89
  const solBalance = 12.45
  const usdcBalance = 1235.44

  const recentTransactions = [
    { id: 1, type: "received", token: "SOL", amount: 2.5, usd: 125.5, hash: "5KJp...9mNx", time: "2 min ago" },
    { id: 2, type: "sent", token: "USDC", amount: 100, usd: 100.0, hash: "8Qr2...4kLm", time: "1 hour ago" },
    { id: 3, type: "swap", token: "RAY", amount: 50, usd: 75.25, hash: "3Mn8...7pQw", time: "3 hours ago" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Wallet Overview
          </h1>
          <p className="text-muted-foreground mt-2">Manage your Solana assets and transactions</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Funds
          </Button>
          <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
      </div>

      {/* Wallet Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-cyan-400">${walletBalance.toLocaleString()}</div>
            <p className="text-xs text-green-400 mt-1">+2.5% (24h)</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">SOL Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-purple-400">{solBalance} SOL</div>
            <p className="text-xs text-muted-foreground mt-1">${(solBalance * 50.2).toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">USDC Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-orbitron text-green-400">{usdcBalance.toLocaleString()} USDC</div>
            <p className="text-xs text-muted-foreground mt-1">Stablecoin</p>
          </CardContent>
        </Card>
      </div>

      {/* Wallet Address */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Wallet Address</CardTitle>
          <CardDescription>Your Solana wallet address</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
            <code className="text-sm text-cyan-400 font-mono">9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM</code>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Copy className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Recent Transactions</CardTitle>
          <CardDescription>Your latest wallet activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      tx.type === "received"
                        ? "bg-green-500/20 text-green-400"
                        : tx.type === "sent"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {tx.type === "received" ? (
                      <ArrowDownLeft className="w-4 h-4" />
                    ) : tx.type === "sent" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">
                      {tx.type === "received" ? "Received" : tx.type === "sent" ? "Sent" : "Swapped"} {tx.token}
                    </div>
                    <div className="text-sm text-muted-foreground">{tx.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium font-mono">
                    {tx.type === "sent" ? "-" : "+"}
                    {tx.amount} {tx.token}
                  </div>
                  <div className="text-sm text-muted-foreground">${tx.usd}</div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            View All Transactions
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
