import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PhotoGallerySection from 'sections/photo-gallery-section'
import * as defaultPropTypes from 'config/prop-types'

export default function CategoryPageView ({
  title,
  photos,
  currentPageSlug
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <PhotoGallerySection photos={photos} currentPageSlug={currentPageSlug} />
    </>
  )
}

CategoryPageView.propTypes = {
  title: PropTypes.string,
  photos: defaultPropTypes.photos,
  currentPageSlug: PropTypes.string
}
