import { InMemoryCache } from 'next/cache'

const cache = new InMemoryCache({
  max: 50, // Maximum number of items in cache
  ttl: 60 * 60 * 24 // 24 hour cache lifetime
})

export default async function handler(req, res) {
  try {
    const { key } = req.query
    const { method } = req

    if (method === 'GET') {
      const value = await cache.get(key)
      return res.status(200).json({ value })
    }

    if (method === 'POST') {
      const { value, ttl } = req.body
      await cache.set(key, value, ttl)
      return res.status(200).json({ success: true })
    }

    if (method === 'DELETE') {
      await cache.delete(key)
      return res.status(200).json({ success: true })
    }

    return res.status(405).end()
  } catch (error) {
    console.error('Cache handler error:', error)
    return res.status(500).json({ error: error.message })
  }
}
