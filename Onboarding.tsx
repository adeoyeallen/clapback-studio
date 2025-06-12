"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Building2,
  Users,
  Instagram,
  Music,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  Check,
  Chrome,
} from "lucide-react"

interface UserData {
  email: string
  password: string
  userType: "creator" | "business" | "agency" | ""
  connectedAccounts: {
    instagram: boolean
    tiktok: boolean
  }
}

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    userType: "",
    connectedAccounts: {
      instagram: false,
      tiktok: false,
    },
  })

  const totalSteps = 3

  const userTypes = [
    {
      id: "creator",
      title: "Creator",
      description: "Individual content creator looking to go viral",
      icon: <User className="w-8 h-8" />,
      features: ["Personal branding", "Content optimization", "Engagement tools"],
    },
    {
      id: "business",
      title: "Business",
      description: "Small to medium business wanting to grow online",
      icon: <Building2 className="w-8 h-8" />,
      features: ["Brand management", "Customer engagement", "Sales optimization"],
    },
    {
      id: "agency",
      title: "Agency/Org",
      description: "Agency or organization managing multiple accounts",
      icon: <Users className="w-8 h-8" />,
      features: ["Team collaboration", "Multi-account management", "Client reporting"],
    },
  ]

  const socialPlatforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      description: "Connect your Instagram account to analyze and optimize your content",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: <Music className="w-6 h-6" />,
      color: "bg-black",
      description: "Link your TikTok to create viral short-form content",
    },
  ]

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (userData.email && userData.password) {
      setCurrentStep(2)
    }
  }

  const handleGoogleSignup = () => {
    // Simulate Google signup
    setCurrentStep(2)
  }

  const handleUserTypeSelect = (type: "creator" | "business" | "agency") => {
    setUserData({ ...userData, userType: type })
    setCurrentStep(3)
  }

  const handleSocialConnect = (platform: "instagram" | "tiktok") => {
    setUserData({
      ...userData,
      connectedAccounts: {
        ...userData.connectedAccounts,
        [platform]: !userData.connectedAccounts[platform],
      },
    })
  }

  const handleFinish = () => {
    // Handle completion - redirect to dashboard or next step
    console.log("Onboarding completed:", userData)
  }

  const canProceedFromStep3 = userData.connectedAccounts.instagram || userData.connectedAccounts.tiktok

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <img src="/clapback-logo.png" alt="Clapback Studio" className="h-12 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Welcome to Clapback Studio</h1>
          <p className="text-gray-400">Your journey to viral content starts here</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step < currentStep
                      ? "bg-green-600 text-white"
                      : step === currentStep
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {step < currentStep ? <Check className="w-4 h-4" /> : step}
                </div>
                {step < totalSteps && (
                  <div className={`w-16 h-1 mx-2 ${step < currentStep ? "bg-green-600" : "bg-gray-700"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Account</span>
            <span>Profile</span>
            <span>Connect</span>
          </div>
        </div>

        {/* Step 1: Email/Password Signup */}
        {currentStep === 1 && (
          <Card className="bg-gray-900 border-green-800/30">
            <CardHeader>
              <CardTitle className="text-white text-center">Create Your Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleEmailSignup} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className="bg-black border-green-800/30 text-white focus:border-yellow-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={userData.password}
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                      className="bg-black border-green-800/30 text-white focus:border-yellow-400 pr-10"
                      placeholder="Create a strong password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                  Continue with Email
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-900 px-2 text-gray-400">or</span>
                </div>
              </div>

              <Button
                onClick={handleGoogleSignup}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium"
              >
                <Chrome className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>

              <p className="text-xs text-gray-400 text-center">
                By continuing, you agree to our{" "}
                <a href="#" className="text-yellow-400 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-yellow-400 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </CardContent>
          </Card>
        )}

        {/* Step 2: User Type Selection */}
        {currentStep === 2 && (
          <Card className="bg-gray-900 border-green-800/30">
            <CardHeader>
              <CardTitle className="text-white text-center">What describes you best?</CardTitle>
              <p className="text-gray-400 text-center text-sm">This helps us personalize your experience</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {userTypes.map((type) => (
                <Card
                  key={type.id}
                  className="bg-black border-green-800/30 hover:border-yellow-400/50 cursor-pointer transition-all duration-200 group"
                  onClick={() => handleUserTypeSelect(type.id as "creator" | "business" | "agency")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-200">
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-1">{type.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {type.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-green-800/30 text-gray-400">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="ghost"
                onClick={() => setCurrentStep(1)}
                className="w-full text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Social Account Connection */}
        {currentStep === 3 && (
          <Card className="bg-gray-900 border-green-800/30">
            <CardHeader>
              <CardTitle className="text-white text-center">Connect Your Social Accounts</CardTitle>
              <p className="text-gray-400 text-center text-sm">
                Connect at least one account to get started (you can add more later)
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {socialPlatforms.map((platform) => (
                  <Card
                    key={platform.id}
                    className={`border transition-all duration-200 cursor-pointer ${
                      userData.connectedAccounts[platform.id as keyof typeof userData.connectedAccounts]
                        ? "border-green-400 bg-green-400/10"
                        : "border-green-800/30 bg-black hover:border-yellow-400/50"
                    }`}
                    onClick={() => handleSocialConnect(platform.id as "instagram" | "tiktok")}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${platform.color} text-white`}>{platform.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{platform.name}</h3>
                          <p className="text-gray-400 text-sm">{platform.description}</p>
                        </div>
                        <div>
                          {userData.connectedAccounts[platform.id as keyof typeof userData.connectedAccounts] ? (
                            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-black" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 border-2 border-gray-600 rounded-full" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleFinish}
                  disabled={!canProceedFromStep3}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Setup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep(2)}
                  className="w-full text-gray-400 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>

              <p className="text-xs text-gray-400 text-center">
                You can always connect more accounts later in your dashboard settings
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
