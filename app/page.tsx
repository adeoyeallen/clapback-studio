"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Sparkles, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TrendamDashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-start space-x-3">
              <div className="flex flex-col items-start space-y-1">
                <div className="relative w-12 h-12 sm:w-24 sm:h-24">
                  <Image
                    src="/assets/logo-trendam.png"
                    alt="Trendam Logo - Make Am Go Viral"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">Wetin you wan do today?</h2>
          <p className="text-base sm:text-lg text-gray-600">Choose a studio to begin your content journey</p>
        </div>

        {/* Studio Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create Studio */}
          <Button
            onClick={() => router.push("/create")}
            className="p-6 h-auto flex flex-col items-center space-y-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Create Studio</h3>
              <p className="text-sm text-white/80">Turn ideas into viral content</p>
            </div>
          </Button>

          {/* Engage Studio */}
          <Button
            onClick={() => router.push("/engage")}
            className="p-6 h-auto flex flex-col items-center space-y-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Engage Studio</h3>
              <p className="text-sm text-white/80">Boost conversations & community</p>
            </div>
          </Button>

          {/* Sell Studio */}
          <Button
            onClick={() => router.push("/sell")}
            className="p-6 h-auto flex flex-col items-center space-y-2 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Sell Studio</h3>
              <p className="text-sm text-white/80">Turn content into cash</p>
            </div>
          </Button>
        </div>
      </main>
    </div>
  )
}
