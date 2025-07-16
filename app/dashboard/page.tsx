import { Suspense } from "react"
import DashboardClient from "@/components/DashboardClient"

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading your studio...</div>}>
      <DashboardClient />
    </Suspense>
  )
}
