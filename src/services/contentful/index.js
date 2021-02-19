import { createClient } from 'contentful'
import safeJsonStringify from 'safe-json-stringify'

let publicClient
let previewClient

function getClient ({
  accessToken,
  host = process.env.NEXT_PUBLIC_CMS_HOST,
  space = process.env.NEXT_PUBLIC_CMS_SPACE_ID,
  isPreview = false
} = {}) {
  const token = accessToken || (isPreview ? process.env.NEXT_PUBLIC_CMS_PREVIEW_TOKEN : process.env.NEXT_PUBLIC_CMS_TOKEN)

  if (isPreview) {
    previewClient = previewClient || createClient({
      space,
      accessToken: token,
      host: host
    })
    return previewClient
  } else {
    publicClient = publicClient || createClient({
      space,
      accessToken: token
    })
    return publicClient
  }
}

export async function fetchPage (slug, pageType, isPreview) {
  try { // eslint-disable-line no-useless-catch
    const { items } = await getClient({ isPreview })
      .getEntries({
        content_type: pageType,
        limit: 1,
        include: 5,
        'fields.slug': slug
      })
    const data = items[0]
    if (!data) {
      return {
        pageData: null,
        statusCode: 404
      }
    }
    const pageData = safeJsonStringify.ensureProperties(data)
    return {
      pageData,
      statusCode: 200
    }
  } catch (error) {
    throw error
  }
}
