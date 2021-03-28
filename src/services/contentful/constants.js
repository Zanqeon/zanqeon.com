export const CONTENT_TYPES = {
  PAGE: 'contentPage',
  HOMEPAGE: 'homepage',
  CATEGORYPAGE: 'categoryPage',
  PHOTOPAGE: 'photoPage',
  COUNTRY: 'country'
}

export const PAGE_SLUGS = [
  {
    contentType: CONTENT_TYPES.HOMEPAGE,
    slugPrefix: '/'
  },
  {
    contentType: CONTENT_TYPES.CATEGORYPAGE,
    slugPrefix: '/'
  }
]
