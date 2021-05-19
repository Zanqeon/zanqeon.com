import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage, fetchPaths } from 'services/contentful'
import { CONTENT_TYPES } from 'services/contentful/constants'
import CategoryPageView from 'views/pages/category'
import mapCategoryPage from 'services/contentful/utils/map-category-page'

export default function CategoryPage ({
  pageData
}) {
  const page = mapCategoryPage(pageData)
  return (
    <CategoryPageView {...page} />
  )
}

export async function getStaticProps (context) {
  const slug = context?.params?.slug
  const { pageData, statusCode } = await fetchPage(
    slug,
    CONTENT_TYPES.CATEGORYPAGE
  )
  return {
    props: {
      pageData,
      statusCode
    }
  }
}

export async function getStaticPaths () {
  const data = await fetchPaths(CONTENT_TYPES.CATEGORYPAGE)

  return {
    paths: data.paths,
    fallback: 'blocking'
  }
}

CategoryPage.propTypes = {
  pageData: PropTypes.object
}
