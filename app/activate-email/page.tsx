"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ActivateEmailPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const activateFormSubmit = async () => {
    setLoading(true)
    setMessage(null)

    try {
      // Create a form and submit it directly to FormSubmit.co to trigger activation
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://formsubmit.co/info@andrewkampanifoundation.com'
      form.style.display = 'none'

      // Add required fields
      const nameField = document.createElement('input')
      nameField.type = 'text'
      nameField.name = 'name'
      nameField.value = 'Andrew Kampani Foundation Test'
      form.appendChild(nameField)

      const emailField = document.createElement('input')
      emailField.type = 'email'
      emailField.name = 'email'
      emailField.value = 'test@andrewkampanifoundation.com'
      form.appendChild(emailField)

      const messageField = document.createElement('input')
      messageField.type = 'text'
      messageField.name = 'message'
      messageField.value = 'This is an activation test for FormSubmit.co'
      form.appendChild(messageField)

      // Add subject
      const subjectField = document.createElement('input')
      subjectField.type = 'hidden'
      subjectField.name = '_subject'
      subjectField.value = 'FormSubmit.co Activation Test'
      form.appendChild(subjectField)

      // Add next page redirect
      const nextField = document.createElement('input')
      nextField.type = 'hidden'
      nextField.name = '_next'
      nextField.value = window.location.origin + '/activate-email'
      form.appendChild(nextField)

      document.body.appendChild(form)
      form.submit()
      
      setMessage('Activation form submitted! Check info@andrewkampanifoundation.com for activation email.')
    } catch (error) {
      setMessage('Failed to submit activation form: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Activate FormSubmit.co Email</h1>
          <p className="text-gray-600 mb-8">
            FormSubmit.co requires email activation before it starts working. 
            Click the button below to trigger an activation email to info@andrewkampanifoundation.com.
          </p>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Steps to activate:</h3>
                  <ol className="list-decimal list-inside text-yellow-700 space-y-1">
                    <li>Click the "Send Activation Form" button below</li>
                    <li>Check the inbox for info@andrewkampanifoundation.com</li>
                    <li>Look for an email from FormSubmit.co with activation link</li>
                    <li>Click the activation link in the email</li>
                    <li>Once activated, all future donations will be delivered</li>
                  </ol>
                </div>

                {message && (
                  <div className={`p-3 rounded ${
                    message.includes('submitted') 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {message}
                  </div>
                )}

                <Button 
                  onClick={activateFormSubmit} 
                  disabled={loading} 
                  className="w-full h-12 text-lg"
                >
                  {loading ? 'Sending...' : 'Send Activation Form'}
                </Button>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Why is this needed?</h3>
                  <p className="text-blue-700 text-sm">
                    FormSubmit.co requires email verification to prevent spam. Until the email is activated, 
                    submissions are held in their system but not delivered. This is a one-time setup process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}