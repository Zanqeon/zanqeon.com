import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage, fetchCountries } from 'services/contentful'
import HomePageView from 'views/pages/home'
import { CONTENT_TYPES } from 'services/contentful/constants'
import mapHomepage from 'services/contentful/utils/map-homepage'
import mapCountries from 'services/contentful/utils/map-countries'

export default function Index ({
  pageData,
  countriesData
}) {
  const page = mapHomepage(pageData)
  const countries = mapCountries(countriesData)
  return (
    <HomePageView
      countriesData={countries}
      {...page}
    />
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
  const countriesData = await fetchCountries(CONTENT_TYPES.COUNTRY, isPreview)

  return {
    props: {
      pageData,
      countriesData,
      statusCode
    }
  }
}

Index.propTypes = {
  pageData: PropTypes.shape({
    title: PropTypes.string
  }),
  countriesData: PropTypes.arrayOf(PropTypes.object)
}
