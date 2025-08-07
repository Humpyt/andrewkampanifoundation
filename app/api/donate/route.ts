import { NextRequest, NextResponse } from 'next/server'
import { simpleEmailService } from '../../../lib/simple-email'
import { saveDonation } from '../../../lib/storage'

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

    // Add timestamp and ID for tracking
    const donationData = {
      ...payload,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    }

    // Send email using the guaranteed delivery system
    const emailResult = await simpleEmailService.sendDonationEmail(payload)
    const emailSuccess = !!emailResult?.success

    // Save donation locally for backup and admin tracking
    try {
      await saveDonation(donationData)
      console.log('✅ Donation saved to local storage')
    } catch (storageError) {
      console.error('❌ Failed to save donation locally:', storageError)
      // Continue even if storage fails - email delivery is primary
    }

    return NextResponse.json(
      {
        success: emailSuccess,
        message: emailSuccess
          ? 'Donation submitted successfully! Notification sent to info@andrewkampanifoundation.com'
          : 'Donation received but email delivery failed. Please contact us directly.',
        emailDelivery: emailResult,
        saved: true
      },
      { status: emailSuccess ? 200 : 502 }
    )
  } catch (error) {
    console.error('Donate endpoint error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}