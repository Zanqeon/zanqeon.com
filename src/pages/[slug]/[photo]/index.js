import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage, fetchPaths } from 'services/contentful'
import { CONTENT_TYPES } from 'services/contentful/constants'
import PhotoPageView from 'views/pages/photo'
import mapPhotoPage from 'services/contentful/utils/map-photo-page'
import mapCategoryInfo from 'services/contentful/utils/map-category-info'
import Head from 'components/head'

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

export async function getStaticProps (context) {
  const slug = context?.params?.photo
  const category = context?.params?.slug
  const { pageData, statusCode } = await fetchPage(
    slug,
    CONTENT_TYPES.PHOTOPAGE
  )
  const categoryPhotosData = await fetchPage(
    category,
    CONTENT_TYPES.CATEGORYPAGE
  )

  return {
    props: {
      pageData,
      categoryPhotosData,
      statusCode
    }
  }
}

export async function getStaticPaths () {
  const data = await fetchPaths(CONTENT_TYPES.PHOTOPAGE)

  return {
    paths: data.paths,
    fallback: 'blocking'
  }
}

PhotoPage.propTypes = {
  pageData: PropTypes.object,
  categoryPhotosData: PropTypes.object
}
