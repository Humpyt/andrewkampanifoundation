"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

export default function DonatePage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    phone: ""
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const onChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donationType: "General Donation",
          amount: form.amount,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          paymentMethod: "Unspecified",
        })
      })

      const ok = res.ok
      setMessage(ok ? "Thank you. Your message has been delivered." : "Failed to deliver. Please try again.")
      if (ok) {
        setForm({ firstName: "", lastName: "", email: "", amount: "", phone: "" })
      }
    } catch {
      setMessage("Failed to deliver. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Donate</h1>
          <p className="text-gray-600 mb-8">Submit your details and amount. We will send payment instructions and a receipt to your email.</p>

          <Card className="p-6">
            <CardContent className="p-0">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">First name</label>
                    <Input value={form.firstName} onChange={e => onChange("firstName", e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Last name</label>
                    <Input value={form.lastName} onChange={e => onChange("lastName", e.target.value)} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Email</label>
                    <Input type="email" value={form.email} onChange={e => onChange("email", e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Phone</label>
                    <Input type="tel" value={form.phone} onChange={e => onChange("phone", e.target.value)} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Amount (UGX)</label>
                  <Input type="number" min="0" step="1000" value={form.amount} onChange={e => onChange("amount", e.target.value)} required />
                </div>

                {message && (
                  <div className={`p-3 rounded ${message.includes("Thank") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {message}
                  </div>
                )}

                <Button type="submit" disabled={loading} className="w-full h-12 text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  {loading ? "Sending..." : "Send"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-xs text-gray-500 mt-4">
            All submissions from this page are emailed directly to info@andrewkampanifoundation.com.
          </p>
        </div>
      </section>
    </div>
  )
}
