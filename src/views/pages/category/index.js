import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PhotoGallerySection from 'sections/photo-gallery-section'

export default function CategoryPageView ({
  title,
  photos
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <PhotoGallerySection photos={photos} />
    </>
  )
}

CategoryPageView.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape({
    aspectRatio: PropTypes.string,
    image: {
      alt: PropTypes.string,
      title: PropTypes.string,
      src: PropTypes.string
    },
    slug: {
      href: PropTypes.string,
      label: PropTypes.string
    }
  }))
}
