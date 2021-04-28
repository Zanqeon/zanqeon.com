export const CONTENT_TYPES = {
  PAGE: 'contentPage',
  HOMEPAGE: 'homepage',
  CATEGORYPAGE: 'categoryPage',
  PHOTOPAGE: 'photoPage',
  COUNTRY: 'country',
  SECTION_INDICATOR: 'sectionIndicatorList'
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
