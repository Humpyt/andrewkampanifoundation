'use client'

import { useState } from 'react'

export default function TestEmailPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const testEmail = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donationType: 'Test Donation',
          amount: '50000',
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          phone: '0771234567',
          paymentMethod: 'Mobile Money'
        })
      })
      
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : 'Unknown error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Test Email System</h1>
        <p className="text-gray-600 mb-6">
          Click the button below to send a test donation notification to info@andrewkampanifoundation.com
        </p>
        
        <button
          onClick={testEmail}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Sending...' : 'Send Test Donation'}
        </button>

        {result && (
          <div className="mt-6 p-4 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">Result:</h3>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        <div className="mt-6 text-center">
          <a href="/admin/donations" className="text-blue-600 hover:underline">
            View Admin Dashboard →
          </a>
        </div>
      </div>
    </div>
  )
}