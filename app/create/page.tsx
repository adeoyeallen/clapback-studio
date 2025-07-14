"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Upload,
  ImageIcon,
  Video,
  Sparkles,
  Zap,
  ArrowRight,
  Download,
  Share2,
  Play,
  Star,
  Wand2,
  Settings,
  Type,
  Mic,
  Eye,
  ThumbsUp,
  Copy,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

interface MemeTemplate {
  id: string
  title: string
  preview: string
  matchScore: number
  category: "meme" | "skit"
  trending: boolean
}

interface CaptionSuggestion {
  headline: string
  caption: string
  audioHook: string
  engagement: number
}

const memeTemplates: MemeTemplate[] = [
  {
    id: "1",
    title: "Naija Parent Reaction",
    preview: "😤",
    matchScore: 95,
    category: "meme",
    trending: true,
  },
  {
    id: "2",
    title: "Lagos Traffic Vibes",
    preview: "🚗",
    matchScore: 88,
    category: "skit",
    trending: false,
  },
  {
    id: "3",
    title: "Jollof Rice Debate",
    preview: "🍚",
    matchScore: 92,
    category: "meme",
    trending: true,
  },
  {
    id: "4",
    title: "Generator Problems",
    preview: "⚡",
    matchScore: 85,
    category: "skit",
    trending: false,
  },
  {
    id: "5",
    title: "Aunty Gossip Mode",
    preview: "👀",
    matchScore: 90,
    category: "meme",
    trending: true,
  },
  {
    id: "6",
    title: "Okada Rider Chronicles",
    preview: "🏍️",
    matchScore: 87,
    category: "skit",
    trending: false,
  },
]

const captionSuggestions: CaptionSuggestion[] = [
  {
    headline: "When your product hits different! 🔥",
    caption:
      "This is why we stay winning in 2024! Drop a 🔥 if you feel this energy. Tag someone who needs to see this! #NaijaVibes #Quality",
    audioHook: "Yo, check this out...",
    engagement: 94,
  },
  {
    headline: "The glow up is real! ✨",
    caption:
      "From zero to hero with this game-changer! Who else is ready to level up? Comment 'ME' below! #Transformation #LevelUp",
    audioHook: "Listen, this changed everything...",
    engagement: 89,
  },
  {
    headline: "This hit different than expected 😱",
    caption:
      "I wasn't ready for this kind of results! Swipe to see the before and after. Your turn next! #Results #Shocked",
    audioHook: "Wait till you see this...",
    engagement: 91,
  },
]

export default function CreateStudio() {
  const [sendToWhatsApp, setSendToWhatsApp] = useState(false)
  const [formatForWhatsApp, setFormatForWhatsApp] = useState(false)
  const [stepComplete, setStepComplete] = useState(false)
  const [productDescription, setProductDescription] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [fusionMode, setFusionMode] = useState<"auto" | "manual">("auto")
  const [selectedCaption, setSelectedCaption] = useState<number>(0)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [aiCaptions, setAiCaptions] = useState<CaptionSuggestion[]>([])
  const [isGeneratingCaptions, setIsGeneratingCaptions] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

useEffect(() => {
  if (productDescription && selectedTemplate) {
    setIsGeneratingCaptions(true)

    const timeout = setTimeout(() => {
      // Simulate AI caption generation
      setAiCaptions(captionSuggestions) // Replace with real API later
      setIsGeneratingCaptions(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }
}, [productDescription, selectedTemplate])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file.name)
    }
  }

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setIsProcessing(true)
    setTimeout(() => setIsProcessing(false), 2000)
  }
  // ──────────────────────────────────────────────────────────────
  // Export Logic: gather selections into JSON and trigger download
  const handleExport = () => {
    const exportData = {
      productDescription,
      uploadedFile,
      selectedTemplate: memeTemplates.find((t) => t.id === selectedTemplate) || null,
      selectedCaption: aiCaptions[selectedCaption] || null,
      timestamp: new Date().toISOString(),
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportData, null, 2));

    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "trendam-export.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };
  // ──────────────────────────────────────────────────────────────
const handleSendToWhatsApp = () => {
  const baseMessage = aiCaptions[selectedCaption]?.caption || "Check this out! 👀";

  const message = formatForWhatsApp
    ? `🔥 *New Drop from trendam* 🔥\n\n${baseMessage}\n\n#trendam #NaijaVibes`
    : baseMessage;

  const encoded = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/?text=${encoded}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Trendam Create</h1>
               <p className="text-sm text-gray-500">Create viral content that trends across social media</p>

              </div>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input & Upload */}
          <div className="lg:col-span-1 space-y-6">
            {/* Product Description */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Type className="w-5 h-5 mr-2" />
                  Product Description
                </CardTitle>
                <CardDescription>Tell us about your product or service</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe your product, its benefits, target audience, and what makes it special..."
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
                <div className="mt-2 text-sm text-gray-500">{productDescription.length}/500 characters</div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Media
                </CardTitle>
                <CardDescription>Add your product images or videos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <Video className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900">{uploadedFile}</p>
                        <p className="text-xs text-gray-500">Click to change file</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                          <ImageIcon className="w-6 h-6 text-purple-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900">Upload your media</p>
                        <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 50MB</p>
                      </div>
                    )}
                  </label>
                </div>
               <Button
  className="mt-4 w-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-200"
  onClick={() => {
    if (productDescription.length > 10 && uploadedFile) {
      setStepComplete(true)
    } else {
      alert("Please add product description and upload media first.")
    }
  }}>
  Continue to Suggestions
</Button>

              </CardContent>
            </Card>

            {/* Smart Fusion Panel */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Smart Fusion
                </CardTitle>
                <CardDescription>Choose your creation mode</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="fusion-mode" className="text-sm font-medium">
                      {fusionMode === "auto" ? "Full Auto" : "Guided Manual"}
                    </Label>
                    <p className="text-xs text-gray-500">
                      {fusionMode === "auto"
                        ? "AI handles everything automatically"
                        : "You control each step of the process"}
                    </p>
                  </div>
                  <Switch
                    id="fusion-mode"
                    checked={fusionMode === "manual"}
                    onCheckedChange={(checked) => setFusionMode(checked ? "manual" : "auto")}
                  />
                </div>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Processing...</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Meme & Skit Suggestions */}
{stepComplete && (
  <div className="lg:col-span-1">
    <Card className="shadow-md border-0 h-fit">
      <CardHeader>
        <CardTitle className="text-purple-600 flex items-center">
          <Zap className="w-5 h-5 mr-2" />
          Meme & Skit Suggestions
        </CardTitle>
        <CardDescription>AI-powered templates based on your product</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {memeTemplates.map((template) => (
            <div
              key={template.id}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                selectedTemplate === template.id
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-purple-300"
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{template.preview}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{template.title}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant={template.category === "meme" ? "default" : "secondary"}>
                        {template.category}
                      </Badge>
                      {template.trending && (
                        <Badge variant="destructive" className="bg-orange-500">
                          Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-green-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{template.matchScore}%</span>
                  </div>
                  <p className="text-xs text-gray-500">match</p>
                </div>
              </div>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                disabled={selectedTemplate === template.id}
              >
                {selectedTemplate === template.id ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Selected
                  </>
                ) : (
                  "Use Template"
                )}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
)}
          {/* Right Column - Caption Generator & Export */}
          <div className="lg:col-span-1 space-y-6">
            {/* Caption Generator */}
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Mic className="w-5 h-5 mr-2" />
                  Caption Generator
                </CardTitle>
                <CardDescription>AI-generated captions for maximum engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {isGeneratingCaptions && (
  <div className="text-sm text-gray-500">Generating captions...</div>
)}
                 {aiCaptions.map((suggestion, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedCaption === index
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      onClick={() => setSelectedCaption(index)}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">{suggestion.headline}</h4>
                          <div className="flex items-center space-x-1 text-green-600">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm font-medium">{suggestion.engagement}%</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <Label className="text-xs text-gray-500 uppercase tracking-wide">Caption</Label>
                            <p className="text-sm text-gray-700 line-clamp-3">{suggestion.caption}</p>
                          </div>

                          <div>
                            <Label className="text-xs text-gray-500 uppercase tracking-wide">Audio Hook</Label>
                            <p className="text-sm text-purple-600 font-medium">"{suggestion.audioHook}"</p>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                          </Button>
                          <Button size="sm" variant="outline">
                            <RefreshCw className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export & Move to Engage */}
            <Card className="shadow-md border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Ready to Launch?
                </CardTitle>
                <CardDescription>Export your creation or move to Trendam Engage </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                <Button
                 variant="outline"
                 className="flex flex-col h-auto py-4"
                 onClick={handleExport}
>
                 <Download className="w-6 h-6 mb-2" />
                 <span className="text-sm">Export</span>
                 </Button>

                 <Button
                 variant="outline"
                 className="flex flex-col h-auto py-4"
                 onClick={() => setIsPreviewOpen(true)}
>
                 <Share2 className="w-6 h-6 mb-2" />
                 <span className="text-sm">Preview</span>
                </Button>
                </div>
                <div className="mt-4 space-y-3">
  <div className="flex items-center justify-between border p-3 rounded-md bg-white shadow-sm">
    <Label htmlFor="send-whatsapp" className="font-medium text-sm text-gray-700">
      Send to WhatsApp Channel
    </Label>
    <Switch
      id="send-whatsapp"
      checked={sendToWhatsApp}
      onCheckedChange={setSendToWhatsApp}
      className="data-[state=checked]:bg-green-600"
    />
  </div>

  {sendToWhatsApp && (
    <div className="flex items-center justify-between border p-3 rounded-md bg-white shadow-sm">
      <Label htmlFor="format-whatsapp" className="font-medium text-sm text-gray-700">
        Auto-format Caption for WhatsApp
      </Label>
      <Switch
        id="format-whatsapp"
        checked={formatForWhatsApp}
        onCheckedChange={setFormatForWhatsApp}
        className="data-[state=checked]:bg-blue-600"
      />
    </div>
  )}
</div>
                <Button
  variant="outline"
  className="w-full py-4 flex items-center justify-center"
  onClick={() => {
    const message = encodeURIComponent(
      `🎬 New Trendam Skit/Meme:\n\n📌 ${productDescription}\n\n💬 ${aiCaptions[selectedCaption]?.caption || ""}`
    )
    const whatsappUrl = `https://wa.me/?text=${message}`
    window.open(whatsappUrl, "_blank")
  }}
>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
  <span className="text-sm">Send to WhatsApp Channel</span>
</Button>
                <Button
  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 text-lg font-semibold hover:shadow-lg transition-all duration-200"
  size="lg"
  onClick={() => {
    if (sendToWhatsApp) {
      handleSendToWhatsApp()
    }
    // 👇 You can navigate or do other logic after WhatsApp
    // e.g., router.push("/engage") — we'll add this later if needed
  }}
>
  <ArrowRight className="w-5 h-5 mr-2" />
  Move to Trendam Engage
</Button>


                <p className="text-xs text-center text-gray-500">
                  Continue your journey in Trendam Engage to connect with your audience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {isPreviewOpen && (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
      <button
        onClick={() => setIsPreviewOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>
      <h2 className="text-xl font-bold text-purple-600 mb-4">Preview Mode</h2>

      <div className="space-y-4">
        <div>
          <Label className="text-sm font-medium text-gray-700">Product Description</Label>
          <p className="text-sm text-gray-800">{productDescription || "No description added."}</p>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700">Selected Template</Label>
          <p className="text-sm text-gray-800">
            {selectedTemplate
              ? memeTemplates.find((t) => t.id === selectedTemplate)?.title
              : "No template selected."}
          </p>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700">Selected Caption</Label>
          <p className="text-sm text-gray-800">
            {aiCaptions.length > 0 ? aiCaptions[selectedCaption]?.caption : "No caption generated."}
          </p>
        </div>
      </div>
    </div>
  </div>
)}
      </main>
    </div>
  )
}
