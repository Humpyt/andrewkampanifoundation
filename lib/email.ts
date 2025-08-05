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

/**
 * Server-only SMTP email sender using hosting provider.
 * Reads all configuration from environment variables.
 * Required env vars:
 *  - SMTP_HOST
 *  - SMTP_PORT (e.g., 465 or 587)
 *  - SMTP_SECURE ("true" for 465/SSL, "false" for 587/TLS)
 *  - SMTP_USER
 *  - SMTP_PASS
 *  - SMTP_FROM (fallbacks to SMTP_USER)
 *  - SMTP_TO   (fallback recipient, defaults to info@andrewkampanifoundation.com)
 */
export async function sendDonationEmail(data: DonationData) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO
  } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP configuration missing. Ensure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS are set as env vars.')
    return { success: false, error: 'SMTP configuration missing' }
  }

  const port = Number(SMTP_PORT)
  const secure = (SMTP_SECURE ?? (port === 465 ? 'true' : 'false')).toLowerCase() === 'true'

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      // Allow self-signed/older ciphers if host requires; can tighten later
      rejectUnauthorized: false,
    },
  })

  const recipient = SMTP_TO || 'info@andrewkampanifoundation.com'
  const from = SMTP_FROM || SMTP_USER

  const mailOptions = {
    from,
    to: recipient,
    subject: 'New Donation Submission - Andrew Kampani Foundation',
    html: `
      <h2>New Donation Submission</h2>
      <p><strong>Donation Type:</strong> ${data.donationType}</p>
      <p><strong>Amount:</strong> UGX ${data.amount}</p>
      <p><strong>Donor Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
      <p><strong>Submission Time:</strong> ${new Date().toISOString().replace('T', ' ').substring(0, 19)} UTC</p>
    `,
  }

  try {
    console.log('Attempting SMTP send', {
      host: SMTP_HOST,
      port,
      user: SMTP_USER,
      secure,
    })

    await transporter.sendMail(mailOptions)
    console.log(`Email sent successfully to ${recipient}`)
    return { success: true, method: 'smtp' }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown SMTP error' }
  }
}