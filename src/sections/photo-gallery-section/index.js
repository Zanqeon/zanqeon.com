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
      <div className={styles.container}>
        <Layout.Row>
          <Layout.Column columns="md:10" offset="md:1">
            <PhotoGallery
              photos={photos}
              currentPageSlug={currentPageSlug}
            />
          </Layout.Column>
        </Layout.Row>

      </div>
    </Layout.Container>
  )
}

PhotoGallerySection.propTypes = {
  photos: defaultPropTypes.photos,
  currentPageSlug: PropTypes.string
}
