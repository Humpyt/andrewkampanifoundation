'use client'

import { useState, useEffect } from 'react'

interface Donation {
  donationType: string
  amount: string
  firstName: string
  lastName: string
  email: string
  phone: string
  paymentMethod: string
  timestamp: string
}

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ count: 0, total: 0 })

  const fetchDonations = async () => {
    try {
      const response = await fetch('/api/admin/donations')
      const data = await response.json()
      setDonations(data.donations || [])
      setStats({ count: data.count || 0, total: data.totalAmount || 0 })
    } catch (error) {
      console.error('Failed to fetch donations:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDonations()
    // Refresh every 30 seconds
    const interval = setInterval(fetchDonations, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (amount: string) => {
    const num = parseFloat(amount.replace(/[^0-9.-]+/g, ''))
    return `UGX ${num.toLocaleString()}`
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-UG', { 
      timeZone: 'Africa/Nairobi',
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading donations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Donation Dashboard</h1>
          <p className="text-gray-600">Real-time donation monitoring</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900">Total Donations</h3>
              <p className="text-2xl font-bold text-blue-600">{stats.count}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900">Total Amount</h3>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(stats.total.toString())}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900">Last Updated</h3>
              <p className="text-sm text-purple-600">{new Date().toLocaleTimeString('en-UG')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Donations</h2>
          </div>
          
          {donations.length === 0 ? (
            <div className="p-6 text-center">
              <div className="text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="text-lg">No donations yet</p>
                <p className="text-sm mt-2">Donations will appear here as they are received</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {donations.map((donation, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {donation.firstName} {donation.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        {formatCurrency(donation.amount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.donationType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.paymentMethod}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(donation.timestamp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <button 
            onClick={fetchDonations}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  )
}