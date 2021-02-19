import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage } from 'services/contentful'
import HomePageView from 'views/pages/home'
import { CONTENT_TYPES } from 'services/contentful/constants'
import mapHomepage from 'services/contentful/utils/map-homepage'

export default function Index ({
  pageData
}) {
  const page = mapHomepage(pageData)
  return (
    <HomePageView {...page} />
  )
}

export async function getServerSideProps ({ query }) {
  const slug = '/'
  const isPreview = query.isPreview === 'true'
  const { pageData, statusCode } = await fetchPage(
    slug,
    CONTENT_TYPES.HOMEPAGE,
    isPreview
  )
  return {
    props: {
      pageData,
      statusCode
    }
  }
}

Index.propTypes = {
  pageData: PropTypes.shape({
    title: PropTypes.string
  })
}
