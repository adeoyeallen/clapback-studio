"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, ShoppingBag, Bot } from "lucide-react"
import { useEffect, useState } from "react"

const studioMap: { [key: string]: { label: string; icon: any; path: string; gradient: string } } = {
  "go-viral": {
    label: "Create Studio",
    icon: Sparkles,
    path: "/create",
    gradient: "from-purple-600 to-pink-600",
  },
  "grow-followers": {
    label: "Engage Studio",
    icon: Users,
    path: "/engage",
    gradient: "from-green-600 to-emerald-600",
  },
  "sell-products": {
    label: "Sell Studio",
    icon: ShoppingBag,
    path: "/sell",
    gradient: "from-orange-600 to-red-600",
  },
  "clapback-trolls": {
    label: "Engage Studio",
    icon: Bot,
    path: "/engage",
    gradient: "from-indigo-600 to-purple-600",
  },
}

export default function DashboardClient() {
  const params = useSearchParams()
  const router = useRouter()

  const [creator, setCreator] = useState("")
  const [goal, setGoal] = useState("")
  const [email, setEmail] = useState("")
  const [handle, setHandle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    setCreator(params.get("creator") || "")
    setGoal(params.get("goal") || "")
    setEmail(params.get("email") || "")
    setHandle(params.get("handle") || "")
    setContent(params.get("content") || "")
  }, [params])

  const studio = studioMap[goal] || studioMap["go-viral"]
  const Icon = studio.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        {/* Greeting */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            👋 Hey {handle ? `@${handle}` : "creator"} — Ready to Make Am?
          </h1>
          <p className="text-sm text-gray-600">
            {creator && `You're in as a ${creator}.`}{" "}
            {goal && `Goal: ${studio.label}`}
          </p>
        </div>

        {/* Recommended Studio */}
        <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-10 flex flex-col items-center space-y-4">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${studio.gradient} flex items-center justify-center`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{studio.label}</h2>
          <p className="text-sm text-gray-500">Based on your selected goal</p>
          <Button
            onClick={() => router.push(studio.path)}
            className={`bg-gradient-to-r ${studio.gradient} text-white px-6 py-3 rounded-full hover:shadow-lg`}
          >
            Enter {studio.label}
          </Button>
        </div>

        {/* Other Studios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {Object.entries(studioMap).map(([key, item]) => {
            if (item.label === studio.label) return null // skip current
            const AltIcon = item.icon
            return (
              <div key={key} className="bg-white p-4 rounded-lg border shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                    <AltIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{item.label}</span>
                </div>
                <Button size="sm" variant="outline" onClick={() => router.push(item.path)}>
                  Open
                </Button>
              </div>
            )
          })}
        </div>

        {/* Optional content */}
        {content && (
          <p className="text-xs text-gray-500 mt-4">
            Your content: <span className="italic">{content}</span>
          </p>
        )}
      </div>
    </div>
  )
}
