import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PhotoInformationSection from 'sections/photo-information-section'
import PhotoPageHeaderSection from 'sections/photo-page-header-section'

export default function PhotoPageView ({
  title,
  iso,
  shutterSpeed,
  aperture,
  description,
  location,
  coordinates,
  image,
  date,
  aspectRatio
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
      />
      <PhotoInformationSection
        iso={iso}
        aperture={aperture}
        shutterSpeed={shutterSpeed}
        date={date}
        location={location}
        description={description}
      />
    </>
  )
}

PhotoPageView.propTypes = {
  title: PropTypes.string,
  iso: PropTypes.string,
  shutterSpeed: PropTypes.string,
  aperture: PropTypes.string,
  description: PropTypes.object,
  location: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string
  }),
  coordinates: PropTypes.string,
  date: PropTypes.string,
  aspectRatio: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
}
