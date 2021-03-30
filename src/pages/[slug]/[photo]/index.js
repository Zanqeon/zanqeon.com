import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage } from 'services/contentful'
import { CONTENT_TYPES } from 'services/contentful/constants'
import PhotoPageView from 'views/pages/photo'
import mapPhotoPage from 'services/contentful/utils/map-photo-page'
import mapCategoryInfo from 'services/contentful/utils/map-category-info'

export default function PhotoPage ({
  pageData,
  categoryPhotosData
}) {
  const page = mapPhotoPage(pageData)
  const categoryInfo = mapCategoryInfo(categoryPhotosData)
  return (
    <PhotoPageView
      categoryInfo={categoryInfo}
      {...page}
    />
  )
}

export async function getServerSideProps ({ query }) {
  const slug = query.photo
  const category = query.slug
  const isPreview = query.isPreview === 'true'
  const { pageData, statusCode } = await fetchPage(
    slug,
    CONTENT_TYPES.PHOTOPAGE,
    isPreview
  )
  const categoryPhotosData = await fetchPage(
    category,
    CONTENT_TYPES.CATEGORYPAGE,
    isPreview
  )

  return {
    props: {
      pageData,
      categoryPhotosData,
      statusCode
    }
  }
}

PhotoPage.propTypes = {
  pageData: PropTypes.object,
  categoryPhotosData: PropTypes.arrayOf(PropTypes.object)
}
