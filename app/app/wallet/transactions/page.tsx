import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowDownLeft, ArrowUpRight, Search, Filter, ExternalLink, Copy } from "lucide-react"

export default function TransactionsPage() {
  const transactions = [
    {
      id: "5KJp...9mNx",
      type: "received",
      token: "SOL",
      amount: 2.5,
      usd: 125.5,
      from: "9WzD...AWWM",
      to: "7Qr2...4kLm",
      timestamp: "2024-01-15T10:30:00Z",
      status: "confirmed",
      fee: 0.000005,
    },
    {
      id: "8Qr2...4kLm",
      type: "sent",
      token: "USDC",
      amount: 100,
      usd: 100.0,
      from: "7Qr2...4kLm",
      to: "3Mn8...7pQw",
      timestamp: "2024-01-15T09:15:00Z",
      status: "confirmed",
      fee: 0.000025,
    },
    {
      id: "3Mn8...7pQw",
      type: "swap",
      token: "RAY",
      amount: 50,
      usd: 75.25,
      from: "USDC",
      to: "RAY",
      timestamp: "2024-01-15T08:45:00Z",
      status: "confirmed",
      fee: 0.0001,
    },
    {
      id: "9Kp4...2nXz",
      type: "received",
      token: "USDC",
      amount: 500,
      usd: 500.0,
      from: "5Mn2...8qWr",
      to: "7Qr2...4kLm",
      timestamp: "2024-01-14T16:20:00Z",
      status: "confirmed",
      fee: 0.000025,
    },
    {
      id: "7Lm3...5pQx",
      type: "sent",
      token: "SOL",
      amount: 1.0,
      usd: 50.2,
      from: "7Qr2...4kLm",
      to: "4Np9...6rYt",
      timestamp: "2024-01-14T14:10:00Z",
      status: "pending",
      fee: 0.000005,
    },
  ]

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "failed":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Transaction History
          </h1>
          <p className="text-muted-foreground mt-2">View and manage your wallet transactions</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by transaction hash or address"
                  className="pl-10 bg-gray-800/50 border-gray-700/50"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="received">Received</SelectItem>
                <SelectItem value="swap">Swap</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-800/50 border-gray-700/50">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="font-orbitron">Recent Transactions</CardTitle>
          <CardDescription>Your complete transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
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
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {tx.type === "received" ? "Received" : tx.type === "sent" ? "Sent" : "Swapped"} {tx.token}
                        </span>
                        <Badge className={getStatusColor(tx.status)}>{tx.status}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {formatDate(tx.timestamp)} • Fee: {tx.fee} SOL
                      </div>
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

                <div className="mt-3 pt-3 border-t border-gray-700/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Transaction Hash:</span>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-cyan-400 font-mono">{tx.id}</code>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    {tx.type !== "swap" && (
                      <div>
                        <span className="text-muted-foreground">{tx.type === "sent" ? "To:" : "From:"}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <code className="text-purple-400 font-mono">{tx.type === "sent" ? tx.to : tx.from}</code>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              Load More Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
