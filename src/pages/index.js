import React from 'react'
import PropTypes from 'prop-types'
import { fetchHomepage } from 'services/contentful'
import HomePageView from 'views/pages/home'

export default function Index ({ page }) {
  return (
    <HomePageView {...page} />
  )
}

Index.getInitialProps = async ({ store, query }) => {
  const page = await fetchHomepage()

  return {
    page
  }
}

Index.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string
  })
}
