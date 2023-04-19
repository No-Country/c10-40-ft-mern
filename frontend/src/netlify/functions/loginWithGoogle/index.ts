import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const apiUrl = process.env.API_BASE_URL
const url =
  process.env.NODE_ENV === 'production'
    ? process.env.URL
    : process.env.DEPLOY_URL

const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  const referer = event.headers.referer
  if (!apiUrl || !url) return { statusCode: 400 }

  if (referer === `${url}/login`) {
    return {
      statusCode: 200,
      body: JSON.stringify(apiUrl)
    }
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ message: 'Not authorized' })
  }
}

export { handler }
