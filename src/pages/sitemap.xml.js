import absoluteUrl from 'next-absolute-url'
import { fetchPaths } from 'services/contentful'
import { CONTENT_TYPES } from 'services/contentful/constants'

export default function Sitemap () {
  return null
}

Sitemap.getInitialProps = async ({ res, req }) => {
  const { origin } = absoluteUrl(req)
  const homePage = await fetchPaths(CONTENT_TYPES.HOMEPAGE)
  const photoPages = await fetchPaths(CONTENT_TYPES.PHOTOPAGE)
  const categoryPages = await fetchPaths(CONTENT_TYPES.CATEGORYPAGE)
  const allPages = [ homePage.paths, ...categoryPages.paths, ...photoPages.paths ]

  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(origin, allPages))
  res.end()

  return {}
}

const createSitemap = (origin, pages) => (
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((url) => (`
        <url>
          <loc>${origin + url}</loc>
        </url>
      `)).join('')}
    </urlset>
  `
)
