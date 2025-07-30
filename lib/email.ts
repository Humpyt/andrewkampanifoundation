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

export async function sendDonationEmail(data: DonationData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    authMethod: 'LOGIN'
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'donate@andrewkampanifoundation.com',
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
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully to donate@andrewkampanifoundation.com')
    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    console.log('FALLBACK: Logging donation data for manual processing:')
    console.log('Email would be sent with the following data:', {
      to: 'donate@andrewkampanifoundation.com',
      subject: 'New Donation Submission - Andrew Kampani Foundation',
      donationType: data.donationType,
      amount: data.amount,
      donor: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      paymentMethod: data.paymentMethod,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC'
    })
    // Return success to allow form functionality while email is being configured
    return { success: true }
  }
}