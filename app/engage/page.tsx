
"use client"

import { useState, useEffect } from "react"
import { Heart, MessageCircle, ArrowLeft, Download, Send, Bot, Zap, Eye, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: string
  username: string
  avatar: string
  text: string
  tone: "Positive" | "Funny" | "Hate" | "Curious" | "Lead"
  isLead?: boolean
}

const sampleComments: Comment[] = [
  {
    id: "1",
    username: "naija_queen_24",
    avatar: "NQ",
    text: "Chai! This thing dey work like magic o! Where you dey sell am? ðŸ”¥",
    tone: "Curious",
    isLead: true,
  },
  {
    id: "2",
    username: "lagos_boy_fresh",
    avatar: "LB",
    text: "Abeg make I get this thing before Christmas. How much be the price? ðŸ’°",
    tone: "Lead",
    isLead: true,
  },
  {
    id: "3",
    username: "aunty_blessing",
    avatar: "AB",
    text: "My sister, this your product na fire! I don order mine already ðŸ˜",
    tone: "Positive",
  },
  {
    id: "4",
    username: "skeptical_sam",
    avatar: "SS",
    text: "Another one of those fake products. Show us real proof abeg ðŸ™„",
    tone: "Hate",
  },
  {
    id: "5",
    username: "comedian_kc",
    avatar: "CK",
    text: "This advert sweet pass Nollywood movie ðŸ˜‚ðŸ˜‚ Oscar award loading...",
    tone: "Funny",
  },
  {
    id: "6",
    username: "mama_twins",
    avatar: "MT",
    text: "I need this for my business. Can you deliver to Abuja? Please respond ðŸ™",
    tone: "Curious",
    isLead: true,
  },
]

const getToneColor = (tone: string) => {
  switch (tone) {
    case "Positive":
      return "bg-green-100 text-green-800"
    case "Funny":
      return "bg-yellow-100 text-yellow-800"
    case "Hate":
      return "bg-red-100 text-red-800"
    case "Curious":
      return "bg-blue-100 text-blue-800"
    case "Lead":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function TrendamEngage() {
  const [autopilotMode, setAutopilotMode] = useState(false)
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null)
  const [replies, setReplies] = useState<{ [id: string]: string }>({})
  const [sentToSabi, setSentToSabi] = useState<string[]>([])
  const [productDescription, setProductDescription] = useState("This is a placeholder product description.")
  const [selectedTemplate, setSelectedTemplate] = useState("Naija Parent Reaction")


  const leadComments = sampleComments.filter((comment) => comment.isLead)
  const generateReply = (text: string, tone: string) => {
  switch (tone) {
    case "Positive":
      return "Thank you! We appreciate your love and support! ðŸ’œ"
    case "Funny":
      return "ðŸ¤£ You get mind! Glad it made you laugh!"
    case "Hate":
      return "Appreciate your feedback â€” weâ€™ll keep leveling up. ðŸ’ª"
    case "Curious":
      return "Yes o! We deliver nationwide. Want the link? ðŸ“¦"
    case "Lead":
      return "You fit order sharp sharp! I go DM you now. ðŸ›ï¸"
    default:
      return "Thanks for dropping a comment! ðŸ™"
  }
}

  let reportContent = `ðŸ§¾ Trendam Studio - Export Report\n\n`

  reportContent += `ðŸŸ£ Product Description:\n${productDescription || "N/A"}\n\n`

  reportContent += `ðŸŽ­ Selected Meme/Skit Template:\n${
    selectedTemplate || "None"
  }\n\n`

useEffect(() => {
  if (autopilotMode) {
    const newReplies: { [id: string]: string } = {}

    sampleComments.forEach((comment) => {
      if (!replies[comment.id]) {
        newReplies[comment.id] = generateReply(comment.text, comment.tone)
      }
    })

    setReplies((prev) => ({
      ...prev,
      ...newReplies,
    }))
  }
}, [autopilotMode])

// 👇 Add this below your other functions/states but BEFORE return
const handleExportReport = () => {
  const report = `
Trendam Studio Report

Product Description:
${productDescription || "N/A"}

Selected Template:
${selectedTemplate || "None"}

Replies:
${Object.entries(replies)
  .map(([id, reply]) => {
    const comment = sampleComments.find((c) => c.id === id)
    return `@${comment?.username}: ${reply}`
  })
  .join("\n")}

Leads Sent to SabiBot:
${sentToSabi.length > 0 ? sentToSabi.map((id) => `@${sampleComments.find((c) => c.id === id)?.username}`).join(", ") : "None"}
  `.trim()

  const blob = new Blob([report], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "trendam-report.txt"
  a.click()
  URL.revokeObjectURL(url)
}
// ✅ Your main JSX layout begins here
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
           <h1 className="text-3xl font-bold text-gray-900">Trendam Engage</h1>
            <p className="text-sm text-gray-500 mt-1">Turn your content into conversations that convert</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Post Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Post Preview</CardTitle>
            <CardDescription>Here's how your content will appear to viewers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">[Media Placeholder]</div>
              <p className="text-sm text-gray-700 mt-2">"This is why we stay winning in 2024! Drop a ðŸ”¥ if you feel this energy. Tag someone who needs to see this!"</p>
              <Badge variant="secondary">Template: Naija Parent Reaction</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Audience Comments */}
        <Card>
          <CardHeader>
            <CardTitle>Audience Comments</CardTitle>
            <CardDescription>AI-categorized viewer feedback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sampleComments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-3 border rounded-lg p-3 shadow-sm">
                <Avatar>
                  <AvatarFallback>{comment.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm text-gray-800">@{comment.username}</span>
                    <Badge className={getToneColor(comment.tone)}>{comment.tone}</Badge>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
                 <Button
  size="sm"
  className="mt-2"
  onClick={() => {
    setActiveReplyId(comment.id)
    setReplies((prev) => ({
      ...prev,
      [comment.id]: generateReply(comment.text, comment.tone),
    }))
  }}
>
  Reply
</Button>

{activeReplyId === comment.id && (
  <div className="mt-3 space-y-2">
    <textarea
      className="w-full border rounded-md p-2 text-sm"
      rows={2}
      value={replies[comment.id]}
      onChange={(e) =>
        setReplies((prev) => ({
          ...prev,
          [comment.id]: e.target.value,
        }))
      }
    />
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          setReplies((prev) => ({
            ...prev,
            [comment.id]: generateReply(comment.text, comment.tone),
          }))
        }
      >
        Regenerate
      </Button>
      <Button size="sm" onClick={() => alert("Reply sent! ðŸš€")}>
        Send Reply
      </Button>
    </div>
  </div>
)}
{replies[comment.id] && !activeReplyId && (
  <div className="mt-3 ml-3 border-l-2 border-purple-300 pl-4">
    <div className="text-sm text-gray-600">
      <strong className="text-purple-700">Clapback:</strong> {replies[comment.id]}
    </div>
  </div>
)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Clapback Boss Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Clapback Boss</CardTitle>
            <CardDescription>Auto-generate witty, savage or classy replies to your comment section.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="autopilot" checked={autopilotMode} onCheckedChange={setAutopilotMode} />
              <Label htmlFor="autopilot">Autopilot Mode</Label>
            </div>
            <Button className="bg-purple-600 text-white">
              <Bot className="w-4 h-4 mr-2" />
              Activate Now
            </Button>
          </CardContent>
        </Card>

        {/* Lead Potentials */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Potentials</CardTitle>
            <CardDescription>Comments flagged as potential buyers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
           {leadComments.map((lead) => (
  <div key={lead.id} className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarFallback>{lead.avatar}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-sm">@{lead.username}</p>
        <p className="text-xs text-gray-600 line-clamp-2">{lead.text}</p>
      </div>
    </div>
    <Button
      size="sm"
      variant="ghost"
      onClick={() =>
        setSentToSabi((prev) => [...prev, lead.id])
      }
      disabled={sentToSabi.includes(lead.id)}
    >
      {sentToSabi.includes(lead.id) ? "Sent " : "Send to SabiBot"}
    </Button>
  </div>
))}
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <div className="flex justify-between">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Create Studio
          </Button>
       <Button variant="outline" onClick={handleExportReport}>
  <Download className="w-4 h-4 mr-1" />
  Export Report
</Button>

        </div>
      </main>
    </div>
  )
}
