import { NextRequest, NextResponse } from 'next/server'
import { sendDonationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['donationType', 'amount', 'firstName', 'lastName', 'email', 'phone', 'paymentMethod']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Send email
    const result = await sendDonationEmail(data)
    
    if (result.success) {
      return NextResponse.json(
        { message: 'Donation submission sent successfully' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to send donation submission' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}