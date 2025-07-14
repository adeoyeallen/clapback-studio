"use client"

import { useState } from "react"
import { Bot, ArrowLeft, Download, Edit, Copy, Send, Zap, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Lead {
  id: string
  username: string
  avatar: string
  originalComment: string
  generatedDM: string
  isSent: boolean
  responseRate: number
}

const sampleLeads: Lead[] = [
  {
    id: "1",
    username: "naija_queen_24",
    avatar: "NQ",
    originalComment: "Chai! This thing dey work like magic o! Where you dey sell am? 🔥",
    generatedDM:
      "Hey Queen! 👑 I saw your comment about our product. You're absolutely right - it works like magic! I'd love to share some exclusive details and a special discount just for you. Can we chat? 😊",
    isSent: false,
    responseRate: 89,
  },
  {
    id: "2",
    username: "lagos_boy_fresh",
    avatar: "LB",
    originalComment: "Abeg make I get this thing before Christmas. How much be the price? 💰",
    generatedDM:
      "Bro! 🔥 I see you want to secure this before Christmas - smart move! The regular price is ₦25,000 but I have a limited Christmas special for ₦18,000. Plus free delivery to Lagos. Interested?",
    isSent: true,
    responseRate: 92,
  },
  {
    id: "3",
    username: "mama_twins",
    avatar: "MT",
    originalComment: "I need this for my business. Can you deliver to Abuja? Please respond 🙏",
    generatedDM:
      "Hello Mama! 🙏 Yes, we deliver nationwide including Abuja! Since this is for your business, I can offer you our bulk discount - 20% off for orders above ₦50,000. Let's discuss how this can boost your business! 📈",
    isSent: false,
    responseRate: 85,
  },
  {
    id: "4",
    username: "young_entrepreneur",
    avatar: "YE",
    originalComment: "This looks promising for my startup. Do you have wholesale prices?",
    generatedDM:
      "Hey fellow entrepreneur! 🚀 Love to see young business minds! Yes, we have amazing wholesale packages starting from 50% off retail prices. I'd love to discuss how we can support your startup journey. When's a good time to chat?",
    isSent: true,
    responseRate: 94,
  },
  {
    id: "5",
    username: "beauty_lover_ng",
    avatar: "BL",
    originalComment: "My friend recommended this. Is it really as good as people say?",
    generatedDM:
      "Hi beautiful! ✨ Your friend has great taste! Our product has a 98% satisfaction rate and over 10,000 happy customers across Nigeria. I can share some real testimonials and before/after photos. Plus, there's a money-back guarantee! Interested? 💕",
    isSent: false,
    responseRate: 87,
  },
]

export default function TrendamSell() {
  const [autopilotMode, setAutopilotMode] = useState(false)
  const [copiedDM, setCopiedDM] = useState<string | null>(null)
  const [sentToWhatsApp, setSentToWhatsApp] = useState<string[]>([])

  const handleCopyDM = (leadId: string, dmText: string) => {
    navigator.clipboard.writeText(dmText)
    setCopiedDM(leadId)
    setTimeout(() => setCopiedDM(null), 2000)
  }

// 👇 Add this here

  const sentLeads = sampleLeads.filter((lead) => lead.isSent).length
  const totalLeads = sampleLeads.length
  const handleExportLeadsReport = () => {
  const reportContent = sampleLeads
    .map((lead) => {
      return `@${lead.username} (${lead.responseRate}% response rate):\n- Comment: "${lead.originalComment}"\n- DM: "${lead.generatedDM}"\n- Sent: ${lead.isSent ? "✅" : "❌"}\n`
    })
    .join("\n\n")

  const blob = new Blob([reportContent], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = "leads_report.txt"
  link.click()

  URL.revokeObjectURL(url)
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Trendam Sell</h1>
            <p className="text-lg text-gray-600">Turn comments into conversions with smart AI DMs</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-md border-0">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">{totalLeads}</div>
                <div className="text-sm text-gray-600">Total Leads</div>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{sentLeads}</div>
                <div className="text-sm text-gray-600">DMs Sent</div>
              </CardContent>
            </Card>
          </div>

          {/* Leads from Comments Card */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-orange-600 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Leads from Comments
              </CardTitle>
              <CardDescription>AI-generated DMs ready to convert your leads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {sampleLeads.map((lead) => (
                  <div key={lead.id} className="border rounded-lg p-4 space-y-4">
                    {/* Lead Info */}
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">
                          {lead.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">{lead.username}</span>
                          {lead.isSent && (
                            <Badge className="bg-green-100 text-green-800 flex items-center">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Sent
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {lead.responseRate}% response rate
                          </Badge>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg mb-3">
                          <p className="text-sm text-gray-700 italic">"{lead.originalComment}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Generated DM Preview */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <Bot className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-600">SabiBot Generated DM</span>
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed mb-3">{lead.generatedDM}</p>

                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 sm:flex-none bg-transparent"
                          onClick={() => handleCopyDM(lead.id, lead.generatedDM)}
                        >
                          {copiedDM === lead.id ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy DM
                            </>
                          )}
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 sm:flex-none bg-transparent">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        {!lead.isSent && (
                          <Button
                            size="sm"
                            className="flex-1 sm:flex-none bg-orange-600 hover:bg-orange-700 text-white"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Send Now
                          </Button>
                        )}
                        <Button
  size="sm"
  variant="outline"
  className="flex-1 sm:flex-none bg-transparent border-green-500 text-green-700"
  onClick={() => setSentToWhatsApp((prev) => [...prev, lead.id])}
  disabled={sentToWhatsApp.includes(lead.id)}
>
  {sentToWhatsApp.includes(lead.id) ? "✅ Sent to WhatsApp" : "📢 Send to WhatsApp Channel"}
</Button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SabiBot Settings Panel */}
          <Card className="shadow-md border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-blue-600 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                SabiBot Settings
              </CardTitle>
              <CardDescription>Configure your AI assistant for automatic lead conversion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="space-y-1">
                  <Label htmlFor="autopilot-dm" className="text-base font-medium">
                    Autopilot DM Mode
                  </Label>
                  <p className="text-sm text-gray-600">SabiBot will automatically message new leads when enabled.</p>
                </div>
                <Switch
                  id="autopilot-dm"
                  checked={autopilotMode}
                  onCheckedChange={setAutopilotMode}
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>

              {autopilotMode && (
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-800">Autopilot Active</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    SabiBot is now monitoring for new leads and will automatically send personalized DMs within 5
                    minutes of detection.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="outline" className="w-full bg-transparent">
                  <Edit className="w-4 h-4 mr-2" />
                  Customize Templates
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Zap className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex-1 sm:flex-none bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Trendam Engage
          </Button>
          <Button
  className="flex-1 sm:flex-none bg-gradient-to-r from-orange-600 to-red-600 text-white"
  onClick={handleExportLeadsReport}
>
  <Download className="w-4 h-4 mr-2" />
  Export Leads Report
</Button>
        </div>
      </footer>
    </div>
  )
}
