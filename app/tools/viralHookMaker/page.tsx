"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ViralHookMaker() {
  const [topic, setTopic] = useState("")
  const [hooks, setHooks] = useState<string[]>([])

  const generateHooks = () => {
    // Mock AI-generated hooks
    const mockHooks = [
      `POV: You just bought your first ${topic} in Mushin 😂`,
      `This ${topic} slaps harder than NEPA in August! ⚡️`,
      `If ${topic} was a person, it’d be Wizkid on a Monday 😎`,
    ]
    setHooks(mockHooks)
  }

  return (
    <Card className="max-w-xl mx-auto mt-10 p-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">🎯 Viral Hook Maker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Enter a trending topic (e.g. election, iPhone, etc)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={generateHooks}>Generate</Button>

        {hooks.length > 0 && (
          <div className="space-y-4">
            <div className="text-lg font-semibold">🔥 Trending Hooks:</div>
            <ul className="list-disc list-inside space-y-2">
              {hooks.map((hook, index) => (
                <li key={index} className="text-sm">{hook}</li>
              ))}
            </ul>

            <div className="flex space-x-2">
              <Button variant="outline">Send to SkitFusion</Button>
              <Button variant="outline">Send to Meme2Ad</Button>
            </div>

            <div className="pt-4">
              <span className="text-sm text-muted-foreground">Suggested Hashtags:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["#NaijaTrends", "#ViralNigeria", "#SkitsHub", "#HookItUp", "#TrendingNow"].map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
