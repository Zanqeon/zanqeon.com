import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage } from 'services/contentful'
import { CONTENT_TYPES } from 'services/contentful/constants'
import PhotoPageView from 'views/pages/photo'
import mapPhotoPage from 'services/contentful/utils/map-photo-page'

export default function PhotoPage ({
  pageData
}) {
  const page = mapPhotoPage(pageData)
  return (
    <PhotoPageView {...page} />
  )
}

export async function getServerSideProps ({ query }) {
  const slug = query.photo
  const isPreview = query.isPreview === 'true'
  const { pageData, statusCode } = await fetchPage(
    slug,
    CONTENT_TYPES.PHOTOPAGE,
    isPreview
  )
  return {
    props: {
      pageData,
      statusCode
    }
  }
}

PhotoPage.propTypes = {
  pageData: PropTypes.object
}
