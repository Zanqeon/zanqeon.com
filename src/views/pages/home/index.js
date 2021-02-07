import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ContentBlocksSectionView from 'views/sections/content-blocks'

export default function HomePageView ({
  contentBlocks
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <ContentBlocksSectionView contentBlocks={contentBlocks} />
    </>
  )
}

HomePageView.propTypes = {
  contentBlocks: PropTypes.arrayOf(PropTypes.object)
}

HomePageView.defaultProps = {}
