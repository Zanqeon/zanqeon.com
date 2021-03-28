import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ContentBlocksSectionView from 'views/sections/content-blocks'

export default function HomePageView ({
  contentBlocks,
  countriesData
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ContentBlocksSectionView contentBlocks={contentBlocks} countriesData={countriesData} />
    </>
  )
}

HomePageView.propTypes = {
  contentBlocks: PropTypes.arrayOf(PropTypes.object),
  countriesData: PropTypes.arrayOf(PropTypes.object)
}

HomePageView.defaultProps = {}
