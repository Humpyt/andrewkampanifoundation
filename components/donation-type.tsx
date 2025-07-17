"use client"

import { Button } from "@/components/ui/button"

export function DonationType() {
  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="h-16 text-lg border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50"
        onClick={() => {
          const input = document.getElementById('type') as HTMLInputElement | null
          if (input) input.value = 'one-time'
        }}
      >
        💝 One-Time Donation
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-16 text-lg border-2 border-teal-200 hover:border-teal-500 hover:bg-teal-50"
        onClick={() => {
          const input = document.getElementById('type') as HTMLInputElement | null
          if (input) input.value = 'monthly'
        }}
      >
        🔄 Monthly Sponsorship
      </Button>
      <input type="hidden" id="type" name="type" value="one-time" />
    </>
  )
}