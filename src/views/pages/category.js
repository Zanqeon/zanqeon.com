import React from 'react'
import PropTypes from 'prop-types'
import Head from 'components/head'
import PhotoGallerySection from 'sections/photo-gallery-section'
import * as defaultPropTypes from 'config/prop-types'
import CategoryHeader from 'components/header-category'

export default function CategoryPageView ({
  title,
  photos,
  currentPageSlug,
  metadata
}) {
  return (
    <>
      <Head {...metadata} />
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
  currentPageSlug: PropTypes.string,
  metadata: PropTypes.object
}
