"use client"

import type React from "react"

import { useState } from "react"
import {
  Camera,
  Video,
  Mic,
  Edit3,
  MessageCircle,
  Users,
  TrendingUp,
  BarChart3,
  ShoppingBag,
  CreditCard,
  Package,
  Target,
  Sparkles,
  Zap,
  Heart,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Studio = "create" | "engage" | "sell"

interface Tool {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const studioTools: Record<Studio, Tool[]> = {
  create: [
    {
      name: "Video Creator",
      description: "Create stunning videos with AI-powered editing",
      icon: Video,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      name: "Photo Studio",
      description: "Professional photo editing and enhancement",
      icon: Camera,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      name: "Audio Mixer",
      description: "Record and mix high-quality audio content",
      icon: Mic,
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      name: "Content Editor",
      description: "Write and edit compelling content",
      icon: Edit3,
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
  ],
  engage: [
    {
      name: "Community Chat",
      description: "Connect with your audience in real-time",
      icon: MessageCircle,
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
    {
      name: "Audience Builder",
      description: "Grow and manage your follower base",
      icon: Users,
      color: "bg-gradient-to-br from-teal-500 to-green-500",
    },
    {
      name: "Trend Tracker",
      description: "Stay on top of viral content trends",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      name: "Analytics Hub",
      description: "Track engagement and performance metrics",
      icon: BarChart3,
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
  ],
  sell: [
    {
      name: "Product Showcase",
      description: "Display your products beautifully",
      icon: ShoppingBag,
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
    {
      name: "Payment Gateway",
      description: "Secure payment processing made easy",
      icon: CreditCard,
      color: "bg-gradient-to-br from-blue-500 to-indigo-500",
    },
    {
      name: "Inventory Manager",
      description: "Track and manage your stock levels",
      icon: Package,
      color: "bg-gradient-to-br from-purple-500 to-violet-500",
    },
    {
      name: "Sales Funnel",
      description: "Convert visitors into paying customers",
      icon: Target,
      color: "bg-gradient-to-br from-red-500 to-pink-500",
    },
  ],
}

const studioConfig = {
  create: {
    name: "Create Studio",
    description: "Bring your creative vision to life",
    icon: Sparkles,
    color: "from-purple-600 to-pink-600",
    accent: "text-purple-600",
  },
  engage: {
    name: "Engage Studio",
    description: "Connect and grow your community",
    icon: Heart,
    color: "from-green-600 to-emerald-600",
    accent: "text-green-600",
  },
  sell: {
    name: "Sell Studio",
    description: "Turn your passion into profit",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    accent: "text-orange-600",
  },
}

export default function ClapbackStudio() {
  const [activeStudio, setActiveStudio] = useState<Studio | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Clapback Studio</h1>
                <p className="text-sm text-gray-500">Create • Engage • Sell</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What do you want to do today?</h2>
          <p className="text-xl text-gray-600 mb-8">Choose your studio and start creating amazing content</p>

          {/* Studio Selection Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {(Object.keys(studioConfig) as Studio[]).map((studio) => {
              const config = studioConfig[studio]
              const IconComponent = config.icon

              return (
                <Button
                  key={studio}
                  onClick={() => setActiveStudio(studio)}
                  variant={activeStudio === studio ? "default" : "outline"}
                  className={`h-auto p-6 flex flex-col items-center space-y-3 transition-all duration-200 hover:scale-105 ${
                    activeStudio === studio
                      ? `bg-gradient-to-r ${config.color} text-white shadow-lg`
                      : "hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStudio === studio ? "bg-white/20" : `bg-gradient-to-r ${config.color}`
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 ${activeStudio === studio ? "text-white" : "text-white"}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{config.name}</h3>
                    <p className={`text-sm ${activeStudio === studio ? "text-white/80" : "text-gray-500"}`}>
                      {config.description}
                    </p>
                  </div>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Active Studio Tools */}
        {activeStudio && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h3 className={`text-3xl font-bold ${studioConfig[activeStudio].accent} mb-2`}>
                {studioConfig[activeStudio].name}
              </h3>
              <p className="text-gray-600">{studioConfig[activeStudio].description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studioTools[activeStudio].map((tool, index) => {
                const IconComponent = tool.icon

                return (
                  <Card
                    key={tool.name}
                    className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer border-0 shadow-md"
                  >
                    <CardHeader className="pb-3">
                      <div
                        className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${studioConfig[activeStudio].color} text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`}
              >
                Start Creating in {studioConfig[activeStudio].name}
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!activeStudio && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to get started?</h3>
            <p className="text-gray-600">Select a studio above to explore the available tools and features.</p>
          </div>
        )}
      </main>
    </div>
  )
}
