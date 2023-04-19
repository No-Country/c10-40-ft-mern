import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const apiUrl = process.env.API_BASE_URL

const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  const referer = event.headers.referer
  const regex = /\b(?:exercify|netlify|localhost)\b/

  if (!apiUrl) return { statusCode: 400 }
  if (referer && regex.test(referer)) {
    return {
      statusCode: 200,
      body: JSON.stringify(apiUrl)
    }
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Not authorized' })
    }
  }
}

export { handler }
