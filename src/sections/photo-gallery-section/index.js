import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import * as defaultPropTypes from 'config/prop-types'
import PhotoGallery from 'components/photo-gallery'
import Layout from 'components/layout'

export default function PhotoGallerySection ({
  photos,
  currentPageSlug
}) {
  return (
    <Layout.Container>
      <PhotoGallery
        photos={photos}
        currentPageSlug={currentPageSlug}
      />
    </Layout.Container>
  )
}

PhotoGallerySection.propTypes = {
  photos: defaultPropTypes.photos,
  currentPageSlug: PropTypes.string
}
