import React from 'react'
import PropTypes from 'prop-types'
import {
  fetchPage,
  fetchCountries,
  fetchData
} from 'services/contentful'
import HomePageView from 'views/pages/home'
import { CONTENT_TYPES } from 'services/contentful/constants'
import mapHomepage from 'services/contentful/utils/map-homepage'
import mapCountries from 'services/contentful/utils/map-countries'
import mapSectionIndicatorList from 'services/contentful/utils/map-section-indicator-list'

export default function Index ({
  pageData,
  countriesData,
  sectionIndicatorData
}) {
  const page = mapHomepage(pageData)
  const countries = mapCountries(countriesData)
  const sectionIndicatorList = mapSectionIndicatorList(sectionIndicatorData)

  return (
    <HomePageView
      countriesData={countries}
      sectionIndicatorList={sectionIndicatorList}
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
  const sectionIndicatorData = await fetchData(CONTENT_TYPES.SECTION_INDICATOR, isPreview)

  return {
    props: {
      pageData,
      countriesData,
      sectionIndicatorData,
      statusCode
    }
  }
}

Index.propTypes = {
  pageData: PropTypes.shape({
    title: PropTypes.string
  }),
  countriesData: PropTypes.object,
  sectionIndicatorData: PropTypes.object
}
