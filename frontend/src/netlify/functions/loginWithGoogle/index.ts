import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  const apiUrl = process.env.API_BASE_URL
  const referer = event.headers.referer
  const clientUrl = process.env.DEPLOY_URL

  if (!apiUrl || !clientUrl) return { statusCode: 400 }

  if (referer === `${clientUrl}/login` && apiUrl) {
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
