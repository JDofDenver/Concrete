"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function QuoteForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  async function handleQuoteSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType: data.get("projectType"),
          message: data.get("message"),
          company_website: data.get("company_website"),
        }),
      })
      if (!response.ok) {
        setError("Something went wrong. Please try again or call (303) 880-9483.")
        setSubmitting(false)
        return
      }
      router.push("/thanks")
    } catch {
      setError("Something went wrong. Please try again or call (303) 880-9483.")
      setSubmitting(false)
    }
  }

  return (
    <Card className="bg-white text-gray-900">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
        <form className="space-y-4" onSubmit={handleQuoteSubmit}>
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="company_website">Company website</label>
            <input
              id="company_website"
              name="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First Name *
              </label>
              <Input id="firstName" name="firstName" type="text" required placeholder="John" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name *
              </label>
              <Input id="lastName" name="lastName" type="text" required placeholder="Doe" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <Input id="phone" name="phone" type="tel" required placeholder="(303) 555-0123" />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select a service</option>
              <option value="driveway">Driveway</option>
              <option value="patio">Patio</option>
              <option value="walkway">Walkway</option>
              <option value="foundation">Foundation</option>
              <option value="repair">Repair</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Project Details
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your project, timeline, and any specific requirements..."
            />
          </div>

          {error ? (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3"
          >
            {submitting ? "Sending..." : "Get My Free Quote"}
          </Button>

          <p className="text-sm text-gray-600 text-center">
            We'll respond within 24 hours with your personalized quote
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
