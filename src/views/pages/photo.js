import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PhotoPageHeaderSection from 'sections/photo-page-header-section'
import PhotoNavigationMobile from 'components/photo-navigation-mobile'

export default function PhotoPageView ({
  title,
  image,
  aspectRatio,
  categoryInfo,
  slug,
  photoInfo
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <PhotoPageHeaderSection
        title={title}
        image={image}
        aspectRatio={aspectRatio}
        photoInfo={photoInfo}
        categoryInfo={categoryInfo}
        currentSlug={slug}
      />
      <PhotoNavigationMobile
        categoryInfo={categoryInfo}
        currentSlug={slug}
      />
    </>
  )
}

PhotoPageView.propTypes = {
  title: PropTypes.string,
  photoInfo: PropTypes.shape({
    iso: PropTypes.string,
    shutterSpeed: PropTypes.string,
    aperture: PropTypes.string,
    description: PropTypes.object,
    location: PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    }),
    coordinates: PropTypes.shape({
      lon: PropTypes.number,
      lat: PropTypes.number
    }),
    date: PropTypes.string
  }),
  aspectRatio: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  categoryInfo: PropTypes.object,
  slug: PropTypes.string
}
