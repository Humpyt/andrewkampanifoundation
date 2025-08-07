'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, XCircle, Mail, Zap, Globe, Send, RefreshCw } from 'lucide-react'

interface TestResult {
  method: string
  status: 'pending' | 'success' | 'failed'
  message: string
  timestamp?: string
}

export default function EmailTestPage() {
  const [loading, setLoading] = useState(false)
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [testData, setTestData] = useState({
    firstName: 'Test',
    lastName: 'Donor',
    email: 'test@example.com',
    phone: '+256700000000',
    amount: '50000',
    donationType: 'one-time',
    paymentMethod: 'mobile-money'
  })

  const addResult = (method: string, status: 'success' | 'failed', message: string) => {
    setTestResults(prev => [
      ...prev,
      {
        method,
        status,
        message,
        timestamp: new Date().toLocaleTimeString()
      }
    ])
  }

  const testMethod = async (endpoint: string, methodName: string) => {
    try {
      addResult(methodName, 'pending', 'Testing...')
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testData)
      })

      const result = await response.json()
      
      if (response.ok && result.success) {
        addResult(methodName, 'success', `✅ Success via ${result.method || methodName}`)
      } else {
        addResult(methodName, 'failed', `❌ Failed: ${result.error || 'Unknown error'}`)
      }
    } catch (error) {
      addResult(methodName, 'failed', `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const testAllMethods = async () => {
    setLoading(true)
    setTestResults([])
    
    const methods = [
      { endpoint: '/api/donate-enhanced', name: 'Enhanced Multi-Method' },
      { endpoint: '/api/webhook-email', name: 'Webhook Services' },
      { endpoint: '/api/donate', name: 'Original FormSubmit' }
    ]

    for (const method of methods) {
      await testMethod(method.endpoint, method.name)
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    setLoading(false)
  }

  const testSingleMethod = async (endpoint: string, name: string) => {
    setLoading(true)
    await testMethod(endpoint, name)
    setLoading(false)
  }

  const clearResults = () => {
    setTestResults([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧪 Email Delivery Test Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test all email delivery methods to ensure donation notifications 
            reach info@andrewkampanifoundation.com
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Test Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Test Configuration
              </CardTitle>
              <CardDescription>
                Configure the test donation data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={testData.firstName}
                    onChange={(e) => setTestData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={testData.lastName}
                    onChange={(e) => setTestData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={testData.email}
                  onChange={(e) => setTestData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={testData.phone}
                    onChange={(e) => setTestData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Amount (UGX)</Label>
                  <Input
                    id="amount"
                    value={testData.amount}
                    onChange={(e) => setTestData(prev => ({ ...prev, amount: e.target.value }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Test Controls
              </CardTitle>
              <CardDescription>
                Run tests on different email delivery methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={testAllMethods}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 h-12"
              >
                {loading ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Zap className="w-4 h-4 mr-2" />
                )}
                Test All Methods
              </Button>
              
              <div className="grid gap-2">
                <Button 
                  variant="outline"
                  onClick={() => testSingleMethod('/api/donate-enhanced', 'Enhanced Multi-Method')}
                  disabled={loading}
                  className="justify-start"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Test Enhanced System
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => testSingleMethod('/api/webhook-email', 'Webhook Services')}
                  disabled={loading}
                  className="justify-start"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Test Webhook Services
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => testSingleMethod('/api/donate', 'Original FormSubmit')}
                  disabled={loading}
                  className="justify-start"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Test Original System
                </Button>
              </div>
              
              <Button 
                variant="ghost"
                onClick={clearResults}
                className="w-full"
              >
                Clear Results
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Test Results */}
        {testResults.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Test Results
              </CardTitle>
              <CardDescription>
                Real-time results from email delivery tests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {testResults.map((result, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      result.status === 'success' 
                        ? 'bg-green-50 border-green-500' 
                        : result.status === 'failed'
                        ? 'bg-red-50 border-red-500'
                        : 'bg-yellow-50 border-yellow-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {result.status === 'success' && <CheckCircle className="w-4 h-4 text-green-500" />}
                        {result.status === 'failed' && <XCircle className="w-4 h-4 text-red-500" />}
                        {result.status === 'pending' && <RefreshCw className="w-4 h-4 text-yellow-500 animate-spin" />}
                        <span className="font-semibold">{result.method}</span>
                      </div>
                      {result.timestamp && (
                        <span className="text-sm text-gray-500">{result.timestamp}</span>
                      )}
                    </div>
                    <p className="text-sm mt-1 font-mono">{result.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Setup Links */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>🔗 Quick Setup Links</CardTitle>
            <CardDescription>
              Access setup pages for different email services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => window.open('/email-setup', '_blank')}
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold">Email Setup</span>
                <span className="text-xs text-gray-600">Configure all services</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => window.open('/activate-email', '_blank')}
              >
                <Zap className="w-6 h-6" />
                <span className="font-semibold">Activate FormSubmit</span>
                <span className="text-xs text-gray-600">Trigger activation email</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => window.open('/setup-web3forms', '_blank')}
              >
                <Globe className="w-6 h-6" />
                <span className="font-semibold">Setup Web3Forms</span>
                <span className="text-xs text-gray-600">Configure backup service</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => window.open('/admin', '_blank')}
              >
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Admin Dashboard</span>
                <span className="text-xs text-gray-600">View all donations</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status Summary */}
        <Alert className="mt-6">
          <Mail className="w-4 h-4" />
          <AlertDescription>
            <strong>Testing Strategy:</strong> The system now has multiple email delivery methods. 
            Test each one to find which works best for your setup. The enhanced system will 
            automatically try multiple methods until one succeeds.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}