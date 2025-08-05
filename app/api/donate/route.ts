import { NextRequest, NextResponse } from 'next/server'
import { saveDonation } from '../../../lib/storage'
import { sendDonationEmail } from '../../../lib/email'

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

    // Save donation first (durable storage recommended in production)
    const donationData = {
      donationType: data.donationType,
      amount: data.amount,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      paymentMethod: data.paymentMethod,
      timestamp: new Date().toISOString()
    }

    await saveDonation(donationData)

    // Send email via hosting SMTP (server-only, env-configured)
    const emailResult = await sendDonationEmail({
      donationType: data.donationType,
      amount: data.amount,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      paymentMethod: data.paymentMethod
    })

    const success = !!emailResult?.success

    return NextResponse.json({
      success,
      message: success ? 'Donation submitted and email sent' : 'Donation submitted but email failed',
      emailDelivery: emailResult,
      adminUrl: '/admin/donations'
    }, { status: success ? 200 : 502 })

  } catch (error) {
    console.error('Donation submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process donation' },
      { status: 500 }
    )
  }
}