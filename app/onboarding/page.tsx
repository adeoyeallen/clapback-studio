"use client"

import { useState } from "react"
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Users,
  ShoppingBag,
  Music,
  MoreHorizontal,
  TrendingUp,
  Zap,
  Shield,
  Check,
  Mail,
  User,
  Edit3,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"

type CreatorType = "influencer" | "skit-maker" | "small-business" | "musician" | "other"
type Goal = "go-viral" | "grow-followers" | "sell-products" | "clapback-trolls"

interface UserInfo {
  email: string
  handle: string
  content: string
}

const creatorTypes = [
  {
    id: "influencer" as CreatorType,
    title: "Influencer",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "skit-maker" as CreatorType,
    title: "Skit Maker",
    icon: Sparkles,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "small-business" as CreatorType,
    title: "Small Business",
    icon: ShoppingBag,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "musician" as CreatorType,
    title: "Musician",
    icon: Music,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "other" as CreatorType,
    title: "Other",
    icon: MoreHorizontal,
    gradient: "from-gray-500 to-gray-600",
  },
]

const goals = [
  {
    id: "go-viral" as Goal,
    title: "Go Viral",
    description: "Create trending memes, skits & posts",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
    studio: "Create Studio",
  },
  {
    id: "grow-followers" as Goal,
    title: "Grow Followers",
    description: "Build and engage your audience",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    studio: "Engage Studio",
  },
  {
    id: "sell-products" as Goal,
    title: "Sell Products",
    description: "Convert followers into customers",
    icon: ShoppingBag,
    gradient: "from-orange-500 to-red-500",
    studio: "Sell Studio",
  },
  {
    id: "clapback-trolls" as Goal,
    title: "Clapback at Trolls",
    description: "Auto-reply with savage comebacks",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500",
    studio: "Engage Studio",
  },
]

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCreatorType, setSelectedCreatorType] = useState<CreatorType | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    handle: "",
    content: "",
  })
  const [errors, setErrors] = useState<Partial<UserInfo>>({})

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validateForm = () => {
    const newErrors: Partial<UserInfo> = {}

    if (!userInfo.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!userInfo.handle) {
      newErrors.handle = "Handle is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const canContinue = () => {
    switch (currentStep) {
      case 2:
        return selectedCreatorType !== null
      case 3:
        return selectedGoal !== null
      case 5:
        return userInfo.email && userInfo.handle && Object.keys(errors).length === 0
      default:
        return true
    }
  }

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleFinalSubmit = () => {
    if (validateForm()) {
      // Redirect to dashboard with query parameters
      const params = new URLSearchParams({
        goal: selectedGoal || "",
        creator: selectedCreatorType || "",
        email: userInfo.email,
        handle: userInfo.handle,
        ...(userInfo.content && { content: userInfo.content }),
      })
      window.location.href = `/dashboard?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Progress Indicator */}
      {currentStep > 1 && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  step <= currentStep ? "bg-gradient-to-r from-green-400 to-emerald-400" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Step 1: Welcome Screen */}
        {currentStep === 1 && (
          <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <Image src="/assets/logo-trendam.png" alt="Trendam Logo" width={180} height={72} className="mx-auto" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Trendam
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Let's help you go viral with AI
            </p>
            <Button
              size="lg"
              onClick={nextStep}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              Start
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        )}

        {/* Step 2: Choose Creator Type */}
        {currentStep === 2 && (
          <div className="w-full max-w-4xl animate-in fade-in-0 slide-in-from-right-4 duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What kind of creator are you?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {creatorTypes.map((type) => {
                const IconComponent = type.icon
                const isSelected = selectedCreatorType === type.id

                return (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all duration-200 hover:scale-105 border-2 ${
                      isSelected
                        ? "border-green-400 bg-green-400/10"
                        : "border-white/20 bg-white/5 hover:border-white/40"
                    }`}
                    onClick={() => setSelectedCreatorType(type.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${type.gradient} flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">{type.title}</h3>
                      {isSelected && (
                        <div className="mt-2">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep} className="bg-transparent border-white/20 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canContinue()}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white disabled:opacity-50"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Pick a Goal */}
        {currentStep === 3 && (
          <div className="w-full max-w-2xl animate-in fade-in-0 slide-in-from-right-4 duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What do you want to do first?</h2>
            </div>

            <div className="space-y-4 mb-12">
              {goals.map((goal) => {
                const IconComponent = goal.icon
                const isSelected = selectedGoal === goal.id

                return (
                  <Card
                    key={goal.id}
                    className={`cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 ${
                      isSelected
                        ? "border-green-400 bg-green-400/10"
                        : "border-white/20 bg-white/5 hover:border-white/40"
                    }`}
                    onClick={() => setSelectedGoal(goal.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${goal.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-xl mb-1">{goal.title}</h3>
                          <p className="text-gray-300 text-sm">{goal.description}</p>
                          <Badge className={`mt-2 bg-gradient-to-r ${goal.gradient} text-white`}>{goal.studio}</Badge>
                        </div>
                        {isSelected && (
                          <div className="flex-shrink-0">
                            <Check className="w-6 h-6 text-green-400" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep} className="bg-transparent border-white/20 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canContinue()}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white disabled:opacity-50"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Ready to Launch */}
        {currentStep === 4 && (
          <div className="text-center animate-in fade-in-0 slide-in-from-right-4 duration-500">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Make Am?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              We'll take you to your custom dashboard
            </p>
            <Button
              size="lg"
              onClick={nextStep}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 rounded-full mb-4"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Launch My Studio
            </Button>
            <p className="text-gray-400 text-sm">No card wahala. Cancel anytime.</p>
          </div>
        )}

        {/* Step 5: User Info Collection */}
        {currentStep === 5 && (
          <div className="w-full max-w-lg animate-in fade-in-0 slide-in-from-right-4 duration-500">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Before You Enter Studio…</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We no dey spam people. Just drop your info so we fit personalize your Trendam experience 💫
              </p>
            </div>

            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg ${
                      errors.email ? "border-red-400" : ""
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>

                {/* Handle Field */}
                <div className="space-y-2">
                  <Label htmlFor="handle" className="text-white flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Instagram or TikTok Handle *</span>
                  </Label>
                  <Input
                    id="handle"
                    type="text"
                    value={userInfo.handle}
                    onChange={(e) => handleInputChange("handle", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg ${
                      errors.handle ? "border-red-400" : ""
                    }`}
                    placeholder="@your_handle"
                  />
                  {errors.handle && <p className="text-red-400 text-sm">{errors.handle}</p>}
                </div>

                {/* Content Field */}
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white flex items-center space-x-2">
                    <Edit3 className="w-4 h-4" />
                    <span>What do you create? (optional)</span>
                  </Label>
                  <Textarea
                    id="content"
                    value={userInfo.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg resize-none"
                    placeholder="Fashion skits, dance videos, tech gist..."
                    rows={3}
                  />
                </div>

                {/* Reassurance Note */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-2 text-green-300">
                    <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">
                      Your info is safe with us. We go only send you updates wey go help you blow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={prevStep} className="bg-transparent border-white/20 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleFinalSubmit}
                disabled={!canContinue()}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white disabled:opacity-50 px-8"
              >
                Enter My Studio 🔥
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
