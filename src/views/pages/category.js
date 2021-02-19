import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PhotoGallerySection from 'sections/photo-gallery-section'
import * as defaultPropTypes from 'config/prop-types'
import CategoryHeader from 'components/header-category'

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
      <CategoryHeader
        title={title}
      />
      <PhotoGallerySection photos={photos} currentPageSlug={currentPageSlug} />
    </>
  )
}

CategoryPageView.propTypes = {
  title: PropTypes.string,
  photos: defaultPropTypes.photos,
  currentPageSlug: PropTypes.string
}
