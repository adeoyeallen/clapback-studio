'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ViralHookMaker() {
  const [topic, setTopic] = useState("")
  const [hooks, setHooks] = useState<string[]>([])

  const generateHooks = () => {
    // Simulate AI-generated Nigerian viral hooks
    setHooks([
      “You won’t believe what happened during ${topic} in Lagos!”,
      “This ${topic}-inspired skit is breaking the internet 🔥”,
      “Nigerians react to ${topic} — wait till the end 😳”,
    ])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <Card className="w-full max-w-xl p-6 space-y-6 shadow-md">
        <div className="text-2xl font-bold flex items-center gap-2">
          <span>🎯</span> <span>Viral Hook Maker</span>
        </div>

        <Input
          placeholder="Enter a trending topic (e.g. election, iPhone, Buhari)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <Button onClick={generateHooks} className="w-full bg-green-700 hover:bg-green-800 text-white">
          Generate
        </Button>

        {hooks.length > 0 && (
          <div className="space-y-4">
            <div className="font-semibold">Generated Hooks:</div>
            {hooks.map((hook, index) => (
              <Card key={index} className="p-4 bg-gray-100 shadow-sm">
                <p>{hook}</p>

                <div className="mt-3 flex gap-3">
                  <Button variant="outline" size="sm">Send to SkitFusion</Button>
                  <Button variant="outline" size="sm">Send to Meme2Ad</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="pt-6">
          <div className="text-sm text-gray-600 mb-2">Sample Nigerian Hashtags:</div>
          <div className="flex flex-wrap gap-2">
            {["#NaijaTrending", "#SkitTok", "#FunnyNigeria", "#ViralGist", "#BantsNation"].map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
