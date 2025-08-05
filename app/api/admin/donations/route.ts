import { NextRequest, NextResponse } from 'next/server'
import { getDonations, getDonationCount, getTotalDonations } from '@/lib/storage'

export async function GET() {
  try {
    const donations = await getDonations()
    const count = await getDonationCount()
    const total = await getTotalDonations()

    return NextResponse.json({
      donations,
      count,
      totalAmount: total,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Failed to fetch donations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donations' },
      { status: 500 }
    )
  }
}

// Optional: Add POST endpoint for testing
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // This would be for admin actions like marking donations as processed
    return NextResponse.json({
      message: 'Admin action completed',
      data
    })
  } catch (error) {
    console.error('Admin action error:', error)
    return NextResponse.json(
      { error: 'Failed to process admin action' },
      { status: 500 }
    )
  }
}