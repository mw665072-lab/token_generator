import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Settings, Bell, Shield, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground mt-2">Customize your RoboTrade experience</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                General Settings
              </CardTitle>
              <CardDescription>Configure your basic application preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST</SelectItem>
                      <SelectItem value="pst">PST</SelectItem>
                      <SelectItem value="cet">CET</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="btc">BTC</SelectItem>
                      <SelectItem value="sol">SOL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="refresh-rate">Data Refresh Rate</Label>
                  <Select defaultValue="5">
                    <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 second</SelectItem>
                      <SelectItem value="5">5 seconds</SelectItem>
                      <SelectItem value="10">10 seconds</SelectItem>
                      <SelectItem value="30">30 seconds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-save Settings</Label>
                    <p className="text-sm text-muted-foreground">Automatically save changes as you make them</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Advanced Mode</Label>
                    <p className="text-sm text-muted-foreground">Show advanced trading features and options</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-cyan-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <Bell className="w-5 h-5 text-purple-400" />
                Notification Settings
              </CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Trade Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified when your bots execute trades</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-purple-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Profit/Loss Alerts</Label>
                    <p className="text-sm text-muted-foreground">Alerts for significant profit or loss events</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-purple-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Bot Status Changes</Label>
                    <p className="text-sm text-muted-foreground">Notifications when bots start, stop, or error</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-purple-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Market Alerts</Label>
                    <p className="text-sm text-muted-foreground">Important market movements and opportunities</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-purple-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-purple-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Browser push notifications</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-purple-500" />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Notification Frequency</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="hourly">Hourly Summary</SelectItem>
                    <SelectItem value="daily">Daily Summary</SelectItem>
                    <SelectItem value="weekly">Weekly Summary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                Security Settings
              </CardTitle>
              <CardDescription>Protect your account and trading activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="bg-gray-800/50 border-gray-700/50 focus:border-green-500/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      className="bg-gray-800/50 border-gray-700/50 focus:border-green-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      className="bg-gray-800/50 border-gray-700/50 focus:border-green-500/50"
                    />
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600">
                  Update Password
                </Button>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-500/30 hover:bg-green-500/10 bg-transparent text-green-400"
                  >
                    Enable 2FA
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Trading PIN</Label>
                    <p className="text-sm text-muted-foreground">Require PIN for high-value trades</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-green-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-32 bg-gray-800/50 border-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 min</SelectItem>
                      <SelectItem value="30">30 min</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                <Palette className="w-5 h-5 text-yellow-400" />
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize the look and feel of your interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select defaultValue="dark">
                    <SelectTrigger className="bg-gray-800/50 border-gray-700/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dark">Dark (Recommended)</SelectItem>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-2 border-cyan-400 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 border-2 border-transparent cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border-2 border-transparent cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-transparent cursor-pointer"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Chart Opacity: 85%</Label>
                  <Slider defaultValue={[85]} max={100} min={50} step={5} className="w-full" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Reduced Motion</Label>
                    <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-yellow-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing for more information density</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-yellow-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Grid Lines</Label>
                    <p className="text-sm text-muted-foreground">Display background grid pattern</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline" className="border-gray-500/30 hover:bg-gray-500/10 bg-transparent">
          Reset to Defaults
        </Button>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
          Save All Settings
        </Button>
      </div>
    </div>
  )
}
