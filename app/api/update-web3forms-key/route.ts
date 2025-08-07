import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { accessKey } = await request.json()

    if (!accessKey || typeof accessKey !== 'string') {
      return NextResponse.json(
        { error: 'Access key is required' },
        { status: 400 }
      )
    }

    // Read the current simple-email.ts file
    const filePath = path.join(process.cwd(), 'lib', 'simple-email.ts')
    const fileContent = await fs.readFile(filePath, 'utf8')

    // Replace the placeholder access key with the real one
    const updatedContent = fileContent.replace(
      /access_key: 'your-access-key-here'/g,
      `access_key: '${accessKey}'`
    )

    // Write the updated content back to the file
    await fs.writeFile(filePath, updatedContent, 'utf8')

    console.log('✅ Web3Forms access key updated successfully')

    return NextResponse.json(
      { 
        success: true, 
        message: 'Web3Forms access key updated successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Failed to update Web3Forms access key:', error)
    return NextResponse.json(
      { 
        error: 'Failed to update access key',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}