import { createClient } from 'contentful'
import * as Constants from './constants'
import { mapHomepage } from './utils/map-homepage'
import { mapPage } from './utils/map-page'

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

export async function fetchHomepage (isPreview) {
  try { // eslint-disable-line no-useless-catch
    const { items } = await getClient({ isPreview }).getEntries({
      content_type: Constants.CONTENT_TYPES.HOMEPAGE,
      limit: 1,
      include: 10
    })
    const data = items[0]
    if (!data) {
      const error = new Error('We could not retrieve the homepage.')
      error.statusCode = 404
    }

    return mapHomepage({ ...data })
  } catch (error) {
    throw error
  }
}

export async function fetchPage (slug, isPreview) {
  try { // eslint-disable-line no-useless-catch
    const { items } = await getClient({ isPreview }).getEntries({
      content_type: Constants.CONTENT_TYPES.PAGE,
      limit: 1,
      include: 5,
      'fields.slug': slug
    })
    const data = items[0]
    if (!data) {
      const error = new Error(`page with slug ${slug} not found`)
      error.statusCode = 404
    }

    return mapPage({ ...data })
  } catch (error) {
    throw error
  }
}
