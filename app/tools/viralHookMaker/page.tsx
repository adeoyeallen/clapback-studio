'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target } from 'lucide-react'

export default function ViralHookMaker() {
  const [topic, setTopic] = useState('')
  const [hooks, setHooks] = useState<string[]>([])

  const handleGenerate = () => {
    if (!topic) return

    // Mocked hook generation logic
    const mockHooks = [
      `🔥 "${topic}" is breaking the internet. Here's why everyone is talking! #${topic.replace(/\s+/g, '')} #NaijaTrends`,
      `😂 You won't believe what happened with "${topic}" – must-watch! #FunnyNaija #${topic.split(' ')[0]}`,
      `💥 This "${topic}" story will blow your mind. Nigerians are not smiling! 🇳🇬 #GistNigeria #TrendingNow`,
    ]
    setHooks(mockHooks)
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card className="p-6 space-y-4 shadow-md">
        <div className="flex items-center gap-2">
          <Target className="text-red-600" />
          <h2 className="text-xl font-semibold">Viral Hook Maker</h2>
        </div>

        <Input
          placeholder="Enter a trending topic (e.g. election, iPhone 15, ASUU)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <Button onClick={handleGenerate} className="bg-green-700 text-white hover:bg-green-800">
          Generate
        </Button>

        {hooks.length > 0 && (
          <div className="space-y-4 mt-6">
            <h3 className="font-medium">Generated Hooks</h3>
            {hooks.map((hook, index) => (
              <Card key={index} className="p-4 space-y-2">
                <p>{hook}</p>
                <div className="flex gap-2">
                  <Badge variant="outline">#ClapbackStudio</Badge>
                  <Badge variant="outline">#ViralNigeria</Badge>
                </div>
                <div className="flex gap-2 text-sm text-blue-700 font-medium">
                  <button>Send to SkitFusion</button>
                  <span>|</span>
                  <button>Send to Meme2Ad</button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
