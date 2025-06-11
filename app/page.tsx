"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  ImageIcon,
  MessageSquare,
  Video,
  Magnet,
  Bot,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react"

export default function ClapbackStudioLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Viral Hook Maker",
      description: "Generate attention-grabbing hooks that stop the scroll and boost engagement",
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      name: "Meme2Ad AI",
      description: "Transform trending memes into high-converting advertisements instantly",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      name: "Clapback Boss",
      description: "Craft witty, engaging responses that build your brand personality",
    },
    {
      icon: <Video className="w-8 h-8" />,
      name: "SkitFusion Editor",
      description: "Create viral video content with AI-powered editing and effects",
    },
    {
      icon: <Magnet className="w-8 h-8" />,
      name: "Comment Magnet",
      description: "Generate comments that spark conversations and drive engagement",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      name: "SabiBot",
      description: "Your AI assistant for content strategy and social media optimization",
    },
  ]

  const testimonials = [
    {
      name: "Adunni Okafor",
      role: "Content Creator",
      content: "Clapback Studio transformed my social media game! My engagement increased by 300% in just 2 weeks.",
      rating: 5,
    },
    {
      name: "Kemi Adeleke",
      role: "Digital Marketer",
      content: "The Viral Hook Maker is pure magic. I've never seen such consistent results from my content.",
      rating: 5,
    },
    {
      name: "Tunde Bakare",
      role: "Brand Manager",
      content: "From zero to viral - Clapback Studio helped us reach 2M views on our latest campaign.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm border-b border-green-800/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-yellow-400">Clapback Studio</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                  Testimonials
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                  Pricing
                </a>
                <Button className="bg-green-700 hover:bg-green-600 text-white">Start Free Trial</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-green-800/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium"
              >
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <Button className="bg-green-700 hover:bg-green-600 text-white w-full mt-2">Start Free Trial</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-black to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-6">
              🚀 Join 10,000+ Creators Going Viral
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Your Complete</span>
              <br />
              <span className="text-yellow-400">AI Toolkit</span>
              <br />
              <span className="text-green-400">for Viral Social Growth</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your social media presence with 6 powerful AI tools designed to create viral content, boost
              engagement, and grow your following exponentially.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 w-full sm:w-auto"
              >
                Start 14-Day Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold text-lg px-8 py-4 w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-yellow-400">6 Powerful Tools</span>
              <br />
              <span className="text-white">One Viral Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, optimize, and scale your social media content for maximum viral potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-black border-green-800/30 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-green-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">What Creators Are Saying</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of successful creators who've transformed their social media game
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-black border-green-800/30">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl text-white mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div>
                  <p className="font-bold text-yellow-400 text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-300">{testimonials[currentTestimonial].role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-yellow-400" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Simple, Transparent</span>
              <br />
              <span className="text-yellow-400">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300">Start free, scale as you grow viral</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-black border-green-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-300 mb-6">Perfect for beginners</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₦0</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />5 viral hooks per day
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Basic meme templates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Community support
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-600">Get Started Free</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-black border-yellow-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-400 text-black font-bold">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <p className="text-gray-300 mb-6">For serious creators</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₦15,000</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited viral content
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    All 6 AI tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Analytics dashboard
                  </li>
                </ul>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                  Start 14-Day Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Agency Plan */}
            <Card className="bg-black border-green-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Agency</h3>
                <p className="text-gray-300 mb-6">For teams and agencies</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₦45,000</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    White-label options
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-600">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-800/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Clapback Studio</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Your complete AI toolkit for viral social growth. Transform your content, boost engagement, and build a
                massive following.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-green-400 text-green-400">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-green-400 text-green-400">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-green-400 text-green-400">
                  LinkedIn
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-300 hover:text-yellow-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-yellow-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-800/30 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Clapback Studio. All rights reserved. Made with ❤️ in Nigeria.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
