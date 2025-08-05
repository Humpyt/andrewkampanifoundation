import { NextRequest, NextResponse } from 'next/server'
import { sendDonationEmail } from '../../../lib/email'

/**
 * Simplified donate endpoint:
 * - Validates minimal fields
 * - Sends a single SMTP email to info@andrewkampanifoundation.com
 * - No local persistence, no multiple providers
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Minimal validation for simplicity and reliability
    const required = ['firstName', 'lastName', 'email', 'amount']
    for (const key of required) {
      if (!data?.[key] || String(data[key]).trim() === '') {
        return NextResponse.json({ error: `Missing required field: ${key}` }, { status: 400 })
      }
    }

    // Normalize fields with safe fallbacks
    const payload = {
      donationType: data.donationType || 'General Donation',
      amount: String(data.amount),
      firstName: String(data.firstName),
      lastName: String(data.lastName),
      email: String(data.email),
      phone: data.phone ? String(data.phone) : 'N/A',
      paymentMethod: data.paymentMethod ? String(data.paymentMethod) : 'Unspecified',
    }

    // Send a single SMTP email (configured via env in lib/email.ts)
    const emailResult = await sendDonationEmail(payload)
    const success = !!emailResult?.success

    return NextResponse.json(
      {
        success,
        message: success
          ? 'Message delivered to info@andrewkampanifoundation.com'
          : 'Failed to deliver message to info@andrewkampanifoundation.com',
        emailDelivery: emailResult,
      },
      { status: success ? 200 : 502 }
    )
  } catch (error) {
    console.error('Donate endpoint error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}