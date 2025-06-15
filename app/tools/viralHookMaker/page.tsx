"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ViralHookMaker() {
  const [topic, setTopic] = useState("")
  const [hooks, setHooks] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    setHooks([])

    // Simulate AI call delay
    setTimeout(() => {
      setHooks([
        `🔥 "${topic}" wey go burst your head`,
        `💡 Why everyone dey talk about "${topic}"`,
        `🤣 Nigerians no go believe this about "${topic}"`
      ])
      setLoading(false)
    }, 2000)
  }

  const handleSend = (tool: string) => {
    alert(`✅ Sent to ${tool}!`)
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🎯 Viral Hook Maker</h1>

      <Input
        placeholder="Enter a trending topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <Button onClick={handleGenerate} disabled={!topic || loading}>
        {loading ? "Generating..." : "Generate"}
      </Button>

      {loading && <p className="text-sm text-muted">🔄 Thinking like a Naija genius…</p>}

      {hooks.length > 0 && (
        <Card className="p-4 space-y-2">
          {hooks.map((hook, idx) => (
            <p key={idx}>👉 {hook}</p>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" onClick={() => handleSend("SkitFusion")}>
              Send to SkitFusion
            </Button>
            <Button variant="outline" onClick={() => handleSend("Meme2Ad")}>
              Send to Meme2Ad
            </Button>
          </div>
        </Card>
      )}

      <div className="space-x-2 pt-4">
        <Badge>#NaijaTrending</Badge>
        <Badge>#SkitTok</Badge>
        <Badge>#FunnyNigeria</Badge>
        <Badge>#ViralGist</Badge>
        <Badge>#BantsNation</Badge>
      </div>
    </div>
  )
}
