"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SetupWeb3FormsPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [accessKey, setAccessKey] = useState('')

  const createAccessKey = async () => {
    setLoading(true)
    setMessage(null)

    try {
      // Create a form and submit it to Web3Forms to get access key
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://api.web3forms.com/submit'
      form.style.display = 'none'

      // Add email field for access key generation
      const emailField = document.createElement('input')
      emailField.type = 'email'
      emailField.name = 'email'
      emailField.value = 'info@andrewkampanifoundation.com'
      form.appendChild(emailField)

      // Add access key request
      const accessKeyField = document.createElement('input')
      accessKeyField.type = 'hidden'
      accessKeyField.name = 'access_key'
      accessKeyField.value = 'YOUR_ACCESS_KEY_HERE'
      form.appendChild(accessKeyField)

      const nameField = document.createElement('input')
      nameField.type = 'text'
      nameField.name = 'name'
      nameField.value = 'Andrew Kampani Foundation'
      form.appendChild(nameField)

      const messageField = document.createElement('input')
      messageField.type = 'text'
      nameField.name = 'message'
      messageField.value = 'Setting up Web3Forms for donation system'
      form.appendChild(messageField)

      document.body.appendChild(form)
      form.submit()
      
      setMessage('Request sent! Check info@andrewkampanifoundation.com for Web3Forms access key.')
    } catch (error) {
      setMessage('Failed to request access key: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  const updateAccessKey = async () => {
    if (!accessKey.trim()) {
      setMessage('Please enter the access key first')
      return
    }

    try {
      const response = await fetch('/api/update-web3forms-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessKey: accessKey.trim() })
      })

      if (response.ok) {
        setMessage('✅ Web3Forms access key updated successfully!')
      } else {
        setMessage('❌ Failed to update access key')
      }
    } catch (error) {
      setMessage('❌ Error updating access key: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Setup Web3Forms Backup</h1>
          <p className="text-gray-600 mb-8">
            Web3Forms provides a reliable backup email service. Let's set it up as a secondary option.
          </p>

          <Card className="p-6 mb-6">
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Step 1: Get Access Key</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Web3Forms will send an access key to info@andrewkampanifoundation.com
                  </p>
                  <Button 
                    onClick={createAccessKey} 
                    disabled={loading} 
                    className="w-full"
                  >
                    {loading ? 'Requesting...' : 'Request Web3Forms Access Key'}
                  </Button>
                </div>

                {message && (
                  <div className={`p-3 rounded ${
                    message.includes('✅') 
                      ? 'bg-green-50 text-green-700' 
                      : message.includes('❌')
                      ? 'bg-red-50 text-red-700'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Step 2: Enter Access Key</h3>
                  <p className="text-green-700 text-sm mb-3">
                    Once you receive the access key email, enter it below to activate Web3Forms backup.
                  </p>
                  
                  <div className="space-y-3">
                    <Input 
                      type="text" 
                      placeholder="Enter your Web3Forms access key here..."
                      value={accessKey}
                      onChange={(e) => setAccessKey(e.target.value)}
                    />
                    <Button 
                      onClick={updateAccessKey} 
                      className="w-full"
                      disabled={!accessKey.trim()}
                    >
                      Update Web3Forms Access Key
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Current Status</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Primary: FormSubmit.co (needs activation)</li>
                    <li>• Backup: Web3Forms (setup in progress)</li>
                    <li>• Local Storage: ✅ Working</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}