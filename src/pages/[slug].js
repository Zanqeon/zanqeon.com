import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage } from 'services/contentful'
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

export async function getServerSideProps ({ query }) {
  const slug = query.slug
  const isPreview = query.isPreview === 'true'
  const { pageData, statusCode } = await fetchPage(
    slug,
    CONTENT_TYPES.CATEGORYPAGE,
    isPreview
  )
  return {
    props: {
      pageData,
      statusCode
    }
  }
}

CategoryPage.propTypes = {
  pageData: PropTypes.object
}
