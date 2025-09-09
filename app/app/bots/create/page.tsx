import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Bot, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateBotPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/app/bots">
          <Button variant="outline" size="sm" className="border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Create Trading Bot
          </h1>
          <p className="text-muted-foreground mt-2">Configure your AI-powered trading strategy</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bot Configuration */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron">Basic Configuration</CardTitle>
              <CardDescription>Set up your bot's basic parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bot-name">Bot Name</Label>
                <Input
                  id="bot-name"
                  placeholder="Enter bot name"
                  className="bg-gray-800/50 border-gray-700/50 focus:border-cyan-500/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="strategy">Trading Strategy</Label>
                <Select>
                  <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scalping">Scalping</SelectItem>
                    <SelectItem value="dca">Dollar Cost Average</SelectItem>
                    <SelectItem value="momentum">Momentum Trading</SelectItem>
                    <SelectItem value="arbitrage">Arbitrage</SelectItem>
                    <SelectItem value="grid">Grid Trading</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="token-pair">Token Pair</Label>
                <Select>
                  <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                    <SelectValue placeholder="Select token pair" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sol-usdc">SOL/USDC</SelectItem>
                    <SelectItem value="ray-usdc">RAY/USDC</SelectItem>
                    <SelectItem value="srm-usdc">SRM/USDC</SelectItem>
                    <SelectItem value="ftt-usdc">FTT/USDC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your bot's purpose and strategy"
                  className="bg-gray-800/50 border-gray-700/50 focus:border-cyan-500/50"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron">Risk Management</CardTitle>
              <CardDescription>Configure risk parameters and limits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Investment Amount: $500</Label>
                <Slider defaultValue={[500]} max={5000} min={100} step={50} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$100</span>
                  <span>$5,000</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Risk Level: Medium (5%)</Label>
                <Slider defaultValue={[5]} max={20} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Conservative (1%)</span>
                  <span>Aggressive (20%)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stop-loss">Stop Loss (%)</Label>
                  <Input id="stop-loss" type="number" placeholder="5" className="bg-gray-800/50 border-gray-700/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="take-profit">Take Profit (%)</Label>
                  <Input
                    id="take-profit"
                    type="number"
                    placeholder="10"
                    className="bg-gray-800/50 border-gray-700/50"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-restart on Stop</Label>
                  <p className="text-sm text-muted-foreground">Automatically restart bot after stop loss</p>
                </div>
                <Switch className="data-[state=checked]:bg-cyan-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bot Preview */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan-400" />
                Bot Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <Bot className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold font-orbitron">New Trading Bot</h3>
                <p className="text-sm text-muted-foreground mt-1">Ready to configure</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Strategy:</span>
                  <span className="text-sm">Not selected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Investment:</span>
                  <span className="text-sm">$500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Risk Level:</span>
                  <span className="text-sm text-yellow-400">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <span className="text-sm text-gray-400">Inactive</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
              Create & Deploy Bot
            </Button>
            <Button variant="outline" className="w-full border-cyan-500/30 hover:bg-cyan-500/10 bg-transparent">
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
