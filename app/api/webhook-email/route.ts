import { NextRequest, NextResponse } from 'next/server'

// Simple webhook-based email service using free services
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log('📧 Webhook email service received:', data)

    // Method 1: Use Formspree (free alternative to FormSubmit)
    const formspreeResult = await sendViaFormspree(data)
    if (formspreeResult.success) {
      return NextResponse.json({ success: true, method: 'formspree' })
    }

    // Method 2: Use Netlify Forms (if deployed on Netlify)
    const netlifyResult = await sendViaNetlifyForms(data)
    if (netlifyResult.success) {
      return NextResponse.json({ success: true, method: 'netlify' })
    }

    // Method 3: Use Getform.io
    const getformResult = await sendViaGetform(data)
    if (getformResult.success) {
      return NextResponse.json({ success: true, method: 'getform' })
    }

    // Method 4: Use Basin (free form backend)
    const basinResult = await sendViaBasin(data)
    if (basinResult.success) {
      return NextResponse.json({ success: true, method: 'basin' })
    }

    return NextResponse.json(
      { success: false, error: 'All webhook methods failed' },
      { status: 500 }
    )
    
  } catch (error) {
    console.error('❌ Webhook email error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Formspree - Free form backend service
async function sendViaFormspree(data: any): Promise<{ success: boolean }> {
  try {
    const formspreeData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      amount: data.amount,
      type: data.donationType,
      payment: data.paymentMethod,
      message: `New donation received:\n\nDonor: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nAmount: UGX ${data.amount}\nType: ${data.donationType}\nPayment: ${data.paymentMethod}\nTime: ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Nairobi' })}`,
      _replyto: data.email,
      _subject: `🎉 New Donation: UGX ${data.amount} from ${data.firstName} ${data.lastName}`,
      _to: 'info@andrewkampanifoundation.com'
    }

    const response = await fetch('https://formspree.io/f/your-formspree-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formspreeData)
    })

    if (response.ok) {
      console.log('✅ Formspree delivery successful')
      return { success: true }
    }
    return { success: false }
  } catch (error) {
    console.log('❌ Formspree failed:', error)
    return { success: false }
  }
}

// Netlify Forms - Free if deployed on Netlify
async function sendViaNetlifyForms(data: any): Promise<{ success: boolean }> {
  try {
    const netlifyData = new URLSearchParams({
      'form-name': 'donation-notification',
      'donor-name': `${data.firstName} ${data.lastName}`,
      'donor-email': data.email,
      'donor-phone': data.phone,
      'donation-amount': data.amount,
      'donation-type': data.donationType,
      'payment-method': data.paymentMethod,
      'timestamp': new Date().toISOString(),
      'recipient': 'info@andrewkampanifoundation.com'
    })

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: netlifyData.toString()
    })

    if (response.ok) {
      console.log('✅ Netlify Forms delivery successful')
      return { success: true }
    }
    return { success: false }
  } catch (error) {
    console.log('❌ Netlify Forms failed:', error)
    return { success: false }
  }
}

// Getform.io - Free form backend
async function sendViaGetform(data: any): Promise<{ success: boolean }> {
  try {
    const getformData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      amount: data.amount,
      type: data.donationType,
      payment: data.paymentMethod,
      message: `New donation: UGX ${data.amount} from ${data.firstName} ${data.lastName}`,
      timestamp: new Date().toISOString(),
      recipient: 'info@andrewkampanifoundation.com'
    }

    const response = await fetch('https://getform.io/f/your-getform-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getformData)
    })

    if (response.ok) {
      console.log('✅ Getform delivery successful')
      return { success: true }
    }
    return { success: false }
  } catch (error) {
    console.log('❌ Getform failed:', error)
    return { success: false }
  }
}

// Basin - Free form backend
async function sendViaBasin(data: any): Promise<{ success: boolean }> {
  try {
    const basinData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      amount: data.amount,
      type: data.donationType,
      payment: data.paymentMethod,
      message: `Donation notification for info@andrewkampanifoundation.com:\n\nDonor: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nAmount: UGX ${data.amount}\nType: ${data.donationType}\nPayment: ${data.paymentMethod}\nTime: ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Nairobi' })}`,
      _replyTo: data.email,
      _subject: `New Donation: UGX ${data.amount}`
    }

    const response = await fetch('https://usebasin.com/f/your-basin-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(basinData)
    })

    if (response.ok) {
      console.log('✅ Basin delivery successful')
      return { success: true }
    }
    return { success: false }
  } catch (error) {
    console.log('❌ Basin failed:', error)
    return { success: false }
  }
}