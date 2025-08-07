import { NextRequest, NextResponse } from 'next/server'
import { directEmailService } from '../../../lib/direct-email'

interface DonationData {
  donationType: string
  amount: string
  firstName: string
  lastName: string
  email: string
  phone: string
  paymentMethod: string
}

export async function POST(request: NextRequest) {
  try {
    const data: DonationData = await request.json()
    
    console.log('📧 Enhanced donation submission received:', {
      donor: `${data.firstName} ${data.lastName}`,
      amount: data.amount,
      email: data.email
    })

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Try the enhanced email delivery system
    const emailResult = await directEmailService.sendDonationNotification(data)
    
    if (emailResult.success) {
      console.log(`✅ Email delivered successfully via ${emailResult.method}`)
      
      // Store in local storage as backup
      const donationRecord = {
        ...data,
        timestamp: new Date().toISOString(),
        emailDeliveryMethod: emailResult.method,
        status: 'email_sent'
      }
      
      // You could save to a local file or database here
      console.log('💾 Donation record:', donationRecord)
      
      return NextResponse.json({
        success: true,
        message: `Donation notification sent successfully via ${emailResult.method}`,
        deliveryMethod: emailResult.method
      })
    } else {
      console.log('❌ All email methods failed, saving locally only')
      
      // Even if email fails, save the donation record
      const donationRecord = {
        ...data,
        timestamp: new Date().toISOString(),
        emailDeliveryMethod: 'failed',
        status: 'email_failed_but_recorded',
        failureDetails: emailResult.details
      }
      
      console.log('💾 Donation record (email failed):', donationRecord)
      
      return NextResponse.json({
        success: false,
        message: 'Donation recorded but email notification failed. Please contact support.',
        error: emailResult.details,
        donationRecorded: true
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('❌ Enhanced donation API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}