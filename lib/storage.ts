import fs from 'fs/promises'
import path from 'path'

export interface DonationData {
  donationType: string
  amount: string
  firstName: string
  lastName: string
  email: string
  phone: string
  paymentMethod: string
  timestamp: string
}

const STORAGE_FILE = path.join(process.cwd(), 'donations.json')

export async function saveDonation(data: DonationData): Promise<void> {
  try {
    let donations: DonationData[] = []
    
    // Read existing donations
    try {
      const fileContent = await fs.readFile(STORAGE_FILE, 'utf-8')
      donations = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
      donations = []
    }

    // Add new donation
    donations.push(data)

    // Save back to file
    await fs.writeFile(STORAGE_FILE, JSON.stringify(donations, null, 2))
    console.log('✅ Donation saved locally')
  } catch (error) {
    console.error('❌ Failed to save donation:', error)
    throw error
  }
}

export async function getDonations(): Promise<DonationData[]> {
  try {
    const fileContent = await fs.readFile(STORAGE_FILE, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    // File doesn't exist or is empty
    return []
  }
}

export async function getDonationCount(): Promise<number> {
  const donations = await getDonations()
  return donations.length
}

export async function getTotalDonations(): Promise<number> {
  const donations = await getDonations()
  return donations.reduce((total, donation) => {
    const amount = parseFloat(donation.amount.replace(/[^0-9.-]+/g, ''))
    return total + (isNaN(amount) ? 0 : amount)
  }, 0)
}