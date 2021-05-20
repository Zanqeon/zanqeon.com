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

export async function fetchCountries (contentType, isPreview) {
  try { // eslint-disable-line no-useless-catch
    const { items } = await getClient()
      .getEntries({
        content_type: contentType,
        limit: 400
      })

    const data = items

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

export async function fetchData (contentType, isPreview) {
  try { // eslint-disable-line no-useless-catch
    const { items } = await getClient()
      .getEntries({
        content_type: contentType,
        limit: 1,
        include: 5
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

export async function fetchPaths (page) {
  try { // eslint-disable-line no-useless-catch

    const { items } = await getClient()
      .getEntries({
        content_type: 'categoryPage'
      })

    if (!items) {
      return {
        paths: null,
        statusCode: 404
      }
    }

    const paths = items.reduce((paths, path) => {
      if (page === 'categoryPage') {
        paths.push(`/${path.fields.slug}`)
      } else if (page === 'photoPage') {
        path.fields.photos.map(photo => {
          paths.push(`/${path?.fields?.slug}/${photo?.fields?.slug}`)
        })
      }

      return paths
    }, [])

    if (page === 'homepage') {
      paths.push('/')
    }

    return {
      paths,
      statusCode: 200
    }
  } catch (error) {
    throw error
  }
}
