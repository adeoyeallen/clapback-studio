"use client"

import { useState } from "react"
import { Play, Sparkles, MessageCircle, ShoppingBag, Star, Check, Zap, Heart, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

const testimonials = [
  {
    name: "Kemi Adebayo",
    handle: "@kemi_creates",
    avatar: "KA",
    quote: "I used Trendam and blew up my sales in 48hrs! From 200 to 50K followers, no cap! 🔥",
    verified: true,
  },
  {
    name: "David Okafor",
    handle: "@dave_comedy",
    avatar: "DO",
    quote: "Trendam's AI clapbacks are too funny! My engagement went from dead to 10K comments per post 😂",
    verified: true,
  },
  {
    name: "Blessing Nkem",
    handle: "@bless_beauty",
    avatar: "BN",
    quote: "Made ₦2M in one month using Trendam's Sell Studio. This AI is not playing! 💰",
    verified: true,
  },
]

const features = [
  {
    icon: Sparkles,
    title: "Create Studio",
    description: "Turn any idea into viral memes, skit & posts",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: MessageCircle,
    title: "Engage Studio",
    description: "Auto-reply to comments with clapbacks",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    icon: ShoppingBag,
    title: "Sell Studio",
    description: "Turn fans to buyers with correct DMs",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
]

function TrendamLanding() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image src="/assets/logo-trendam.png" alt="Trendam Logo" width={200} height={80} className="mx-auto" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center leading-tight sm:leading-[1.2]">
          <span className="block sm:inline">Make <span className="text-orange-400">Am.</span></span>{" "}
          <span className="block sm:inline">Go <span className="text-pink-400">Viral.</span></span>{" "}
          <span className="block sm:inline">With <span className="text-purple-400">AI.</span></span>
          </h1>
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Use AI do content wey go catch fire — even with{" "}
            <span className="text-green-400 font-semibold">zero followers.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              <Zap className="w-5 h-5 mr-2" />
              Try Trendam Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-200 rounded-full bg-transparent"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="w-5 h-5 mr-2" />
             See Wetin E Dey Do
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>No card wahala</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>10,000+ creators dey use am</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span>Over 1 million viral posts don drop</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Trendam
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              3 AI tools wey go level up your content hustle sharp sharp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={feature.title}
                  className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br ${feature.bgGradient}`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{feature.description}</p>
                    <div className="mt-6">
                      <Badge className={`bg-gradient-to-r ${feature.gradient} text-white`}>Step {index + 1}</Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Real{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-600">Built For African creators </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.handle}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-800 text-lg leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Built for African Creators</h3>
          <p className="text-xl text-green-100 mb-8">Join other Nigerians wey don dey cash out with AI tools</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-green-100">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6" />
              <span className="text-lg"> Made for Naija 🇳🇬</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6" />
              <span className="text-lg">#TrendamChallenge trending</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">WhatsApp support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              make am?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI movement and begin drop content wey go move market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              <Zap className="w-6 h-6 mr-3" />
              Start Free
            </Button>
            <div className="flex items-center justify-center text-gray-400">
              <span className="text-lg">No card Wahala</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default function Page() {
  return <TrendamLanding />
}