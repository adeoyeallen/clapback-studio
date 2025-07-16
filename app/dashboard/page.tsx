import { Suspense } from "react"
import DashboardClient from "@/components/DashboardClient"

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading dashboard...</div>}>
      <DashboardClient />
    </Suspense>
  )
}
