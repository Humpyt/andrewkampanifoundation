'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, XCircle, Mail, Settings, Zap, Globe } from 'lucide-react'

interface ServiceStatus {
  name: string
  configured: boolean
  tested: boolean
  working: boolean
  icon: React.ReactNode
  description: string
}

export default function EmailSetupPage() {
  const [loading, setLoading] = useState(false)
  const [testResult, setTestResult] = useState<string>('')
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: 'Gmail SMTP',
      configured: false,
      tested: false,
      working: false,
      icon: <Mail className="w-5 h-5" />,
      description: 'Most reliable method using Gmail SMTP servers'
    },
    {
      name: 'Zapier Webhook',
      configured: false,
      tested: false,
      working: false,
      icon: <Zap className="w-5 h-5" />,
      description: 'Automated workflow that sends emails via Zapier'
    },
    {
      name: 'Make.com Webhook',
      configured: false,
      tested: false,
      working: false,
      icon: <Settings className="w-5 h-5" />,
      description: 'Alternative automation platform for email delivery'
    },
    {
      name: 'EmailJS',
      configured: false,
      tested: false,
      working: false,
      icon: <Globe className="w-5 h-5" />,
      description: 'Browser-based email service, no server required'
    }
  ])

  const testEnhancedDonation = async () => {
    setLoading(true)
    setTestResult('')
    
    try {
      const testData = {
        donationType: 'one-time',
        amount: '50000',
        firstName: 'Test',
        lastName: 'Donor',
        email: 'test@example.com',
        phone: '+256700000000',
        paymentMethod: 'mobile-money'
      }

      const response = await fetch('/api/donate-enhanced', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testData)
      })

      const result = await response.json()
      
      if (result.success) {
        setTestResult(`✅ Success! Email delivered via ${result.deliveryMethod}`)
      } else {
        setTestResult(`❌ Failed: ${result.error || 'Unknown error'}`)
      }
    } catch (error) {
      setTestResult(`❌ Test failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📧 Email Delivery Setup Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Configure multiple email delivery methods to ensure donation notifications 
            reach info@andrewkampanifoundation.com reliably
          </p>
        </div>

        {/* Service Status Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <CardTitle className="text-sm">{service.name}</CardTitle>
                  </div>
                  {service.working ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                <div className="text-xs">
                  <div className={`inline-block px-2 py-1 rounded ${
                    service.configured ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {service.configured ? 'Configured' : 'Not Configured'}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Test Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Test Enhanced Email System
            </CardTitle>
            <CardDescription>
              Test the new multi-method email delivery system with a sample donation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button 
                onClick={testEnhancedDonation}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {loading ? 'Testing...' : '🧪 Test Email Delivery'}
              </Button>
              
              {testResult && (
                <Alert className={testResult.includes('✅') ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
                  <AlertDescription className="font-mono text-sm">
                    {testResult}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Gmail SMTP Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Gmail SMTP Setup
              </CardTitle>
              <CardDescription>Most reliable method - recommended</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📋 Setup Steps:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Create andrewkampanifoundation@gmail.com</li>
                  <li>Enable 2-Factor Authentication</li>
                  <li>Generate App Password in Google Account settings</li>
                  <li>Update the password in lib/direct-email.ts</li>
                </ol>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gmail-password">Gmail App Password</Label>
                <Input 
                  id="gmail-password"
                  type="password"
                  placeholder="Enter 16-character app password"
                  className="font-mono"
                />
                <Button size="sm" className="w-full">
                  Update Gmail Configuration
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Zapier Webhook Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Zapier Webhook Setup
              </CardTitle>
              <CardDescription>Automated email workflow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚡ Setup Steps:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Create free Zapier account</li>
                  <li>Create new Zap: Webhook → Email</li>
                  <li>Copy webhook URL</li>
                  <li>Configure email template</li>
                  <li>Test and activate</li>
                </ol>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zapier-webhook">Zapier Webhook URL</Label>
                <Input 
                  id="zapier-webhook"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  className="font-mono text-xs"
                />
                <Button size="sm" className="w-full">
                  Update Zapier Configuration
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Make.com Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Make.com Webhook Setup
              </CardTitle>
              <CardDescription>Alternative automation platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔧 Setup Steps:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Create free Make.com account</li>
                  <li>Create scenario: Webhook → Email</li>
                  <li>Copy webhook URL</li>
                  <li>Configure email module</li>
                  <li>Test and activate scenario</li>
                </ol>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="make-webhook">Make.com Webhook URL</Label>
                <Input 
                  id="make-webhook"
                  placeholder="https://hook.eu1.make.com/..."
                  className="font-mono text-xs"
                />
                <Button size="sm" className="w-full">
                  Update Make.com Configuration
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* EmailJS Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                EmailJS Setup
              </CardTitle>
              <CardDescription>Browser-based email service</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🌐 Setup Steps:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Create EmailJS account</li>
                  <li>Add email service (Gmail/Outlook)</li>
                  <li>Create email template</li>
                  <li>Get Service ID and Template ID</li>
                  <li>Update configuration</li>
                </ol>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="emailjs-service">EmailJS Service ID</Label>
                <Input 
                  id="emailjs-service"
                  placeholder="service_xxxxxxx"
                  className="font-mono"
                />
                <Label htmlFor="emailjs-template">EmailJS Template ID</Label>
                <Input 
                  id="emailjs-template"
                  placeholder="template_xxxxxxx"
                  className="font-mono"
                />
                <Button size="sm" className="w-full">
                  Update EmailJS Configuration
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🚀 Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to get your email system working
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="font-semibold">Create Gmail Account</span>
                <span className="text-xs text-gray-600">Set up foundation Gmail</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Zap className="w-6 h-6" />
                <span className="font-semibold">Setup Zapier</span>
                <span className="text-xs text-gray-600">Create automation workflow</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Test All Methods</span>
                <span className="text-xs text-gray-600">Verify email delivery</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status Summary */}
        <Alert className="mt-8">
          <Mail className="w-4 h-4" />
          <AlertDescription>
            <strong>Current Status:</strong> The enhanced email system will try multiple delivery methods 
            in sequence until one succeeds. Configure at least one method above to ensure reliable 
            email delivery to info@andrewkampanifoundation.com.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}