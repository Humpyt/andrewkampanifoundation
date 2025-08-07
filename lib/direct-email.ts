// Direct email solution using multiple reliable methods
import nodemailer from 'nodemailer'

interface DonationData {
  donationType: string
  amount: string
  firstName: string
  lastName: string
  email: string
  phone: string
  paymentMethod: string
}

export class DirectEmailService {
  // Method 1: Use Gmail SMTP (most reliable)
  async sendViaGmailSMTP(data: DonationData): Promise<boolean> {
    try {
      // Create Gmail SMTP transporter
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: 'andrewkampanifoundation@gmail.com', // Foundation Gmail account
          pass: 'your-app-password-here' // Gmail App Password (not regular password)
        }
      })

      const mailOptions = {
        from: 'andrewkampanifoundation@gmail.com',
        to: 'info@andrewkampanifoundation.com',
        subject: `🎉 New Donation: UGX ${data.amount} from ${data.firstName} ${data.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Donation Received!</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Donor Information:</h3>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Amount:</strong> UGX ${data.amount}</p>
              <p><strong>Type:</strong> ${data.donationType}</p>
              <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Nairobi' })}</p>
            </div>
            <p style="color: #64748b; font-size: 14px;">This email was sent automatically from the Andrew Kampani Foundation donation system.</p>
          </div>
        `
      }

      await transporter.sendMail(mailOptions)
      console.log('✅ Gmail SMTP delivery successful')
      return true
    } catch (error) {
      console.log('❌ Gmail SMTP failed:', error)
      return false
    }
  }

  // Method 2: Use Outlook/Hotmail SMTP
  async sendViaOutlookSMTP(data: DonationData): Promise<boolean> {
    try {
      const transporter = nodemailer.createTransporter({
        service: 'hotmail',
        auth: {
          user: 'andrewkampanifoundation@outlook.com',
          pass: 'your-outlook-password-here'
        }
      })

      const mailOptions = {
        from: 'andrewkampanifoundation@outlook.com',
        to: 'info@andrewkampanifoundation.com',
        subject: `🎉 New Donation: UGX ${data.amount} from ${data.firstName} ${data.lastName}`,
        text: `
New Donation Received!

Donor: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Amount: UGX ${data.amount}
Type: ${data.donationType}
Payment: ${data.paymentMethod}
Time: ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Nairobi' })}
        `
      }

      await transporter.sendMail(mailOptions)
      console.log('✅ Outlook SMTP delivery successful')
      return true
    } catch (error) {
      console.log('❌ Outlook SMTP failed:', error)
      return false
    }
  }

  // Method 3: Use EmailJS (browser-based, no server needed)
  async sendViaEmailJS(data: DonationData): Promise<boolean> {
    try {
      const emailJSData = {
        service_id: 'service_donation',
        template_id: 'template_donation',
        user_id: 'your-emailjs-user-id',
        template_params: {
          to_email: 'info@andrewkampanifoundation.com',
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          subject: `New Donation: UGX ${data.amount}`,
          message: `
Donor: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Amount: UGX ${data.amount}
Type: ${data.donationType}
Payment: ${data.paymentMethod}
Time: ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Nairobi' })}
          `
        }
      }

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailJSData)
      })

      if (response.ok) {
        console.log('✅ EmailJS delivery successful')
        return true
      }
      return false
    } catch (error) {
      console.log('❌ EmailJS failed:', error)
      return false
    }
  }

  // Method 4: Use Zapier Webhook (most reliable external service)
  async sendViaZapierWebhook(data: DonationData): Promise<boolean> {
    try {
      const webhookData = {
        donor_name: `${data.firstName} ${data.lastName}`,
        donor_email: data.email,
        donor_phone: data.phone,
        donation_amount: data.amount,
        donation_type: data.donationType,
        payment_method: data.paymentMethod,
        timestamp: new Date().toISOString(),
        recipient_email: 'info@andrewkampanifoundation.com'
      }

      const response = await fetch('https://hooks.zapier.com/hooks/catch/your-zapier-webhook-id/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookData)
      })

      if (response.ok) {
        console.log('✅ Zapier webhook delivery successful')
        return true
      }
      return false
    } catch (error) {
      console.log('❌ Zapier webhook failed:', error)
      return false
    }
  }

  // Method 5: Use Make.com (Integromat) webhook
  async sendViaMakeWebhook(data: DonationData): Promise<boolean> {
    try {
      const webhookData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        amount: data.amount,
        type: data.donationType,
        payment: data.paymentMethod,
        time: new Date().toISOString()
      }

      const response = await fetch('https://hook.eu1.make.com/your-make-webhook-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookData)
      })

      if (response.ok) {
        console.log('✅ Make.com webhook delivery successful')
        return true
      }
      return false
    } catch (error) {
      console.log('❌ Make.com webhook failed:', error)
      return false
    }
  }

  // Master method that tries all approaches
  async sendDonationNotification(data: DonationData): Promise<{ success: boolean; method: string; details?: string }> {
    console.log('🚀 Attempting multiple email delivery methods...')

    // Try methods in order of reliability
    const methods = [
      { name: 'gmail-smtp', fn: () => this.sendViaGmailSMTP(data) },
      { name: 'zapier-webhook', fn: () => this.sendViaZapierWebhook(data) },
      { name: 'make-webhook', fn: () => this.sendViaMakeWebhook(data) },
      { name: 'outlook-smtp', fn: () => this.sendViaOutlookSMTP(data) },
      { name: 'emailjs', fn: () => this.sendViaEmailJS(data) }
    ]

    for (const method of methods) {
      try {
        const success = await method.fn()
        if (success) {
          return { success: true, method: method.name }
        }
      } catch (error) {
        console.log(`❌ ${method.name} failed:`, error)
        continue
      }
    }

    return { 
      success: false, 
      method: 'all-failed', 
      details: 'All email delivery methods failed' 
    }
  }
}

export const directEmailService = new DirectEmailService()