import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import BlurHashPhoto from 'components/blurhash-photo'
import styles from './index.module.scss'
import PhotoInformationSection from 'sections/photo-information-section'
import PhotoNavigationHeader from 'components/photo-navigation-header'

export default function PhotoPageHeaderSection ({
  title,
  image,
  aspectRatio,
  photoInfo,
  categoryInfo,
  currentSlug
}) {
  if (aspectRatio === '3/2') { // portrait photo
    return (
      <Layout.Container>
        <Layout.Row>
          <Layout.Column columns="sm:8 lg:5" offset="sm:2 lg:1">
            <div className={styles.imageContainer}>
              <BlurHashPhoto
                hasNegativeZIndex
                image={image}
                aspectRatio={aspectRatio}
                highQuality
              />
            </div>
          </Layout.Column>
          <Layout.Column columns="xs:10 sm:8 md:6" offset="sm:2 md:3 lg:2" className={styles.showOnMobile}>
            <div className={styles.title}>
              {title}
            </div>
          </Layout.Column>
          <PhotoNavigationHeader
            categoryInfo={categoryInfo}
            currentSlug={currentSlug}
          />
          <PhotoInformationSection
            isPortrait
            {...photoInfo}
          />
        </Layout.Row>
        <div className={styles.hideOnMobile}>
          <Layout.Row>
            <Layout.Column columns="lg:6" offset="lg:1">
              <div className={styles.title}>
                {title}
              </div>
            </Layout.Column>
          </Layout.Row>
        </div>
      </Layout.Container>
    )
  }

  if (aspectRatio === '1/1') { // square photo
    return (
      <Layout.Container>
        <Layout.Row>
          <Layout.Column columns="md:8 lg:7" offset="md:2 lg:2">
            <div className={styles.imageContainer}>
              <BlurHashPhoto
                hasNegativeZIndex
                image={image}
                aspectRatio={aspectRatio}
                highQuality
              />
            </div>
          </Layout.Column>
          <Layout.Column columns="xs:10 sm:8 md:6" offset="sm:2 md:3" className={styles.showOnMobile}>
            <div className={styles.title}>
              {title}
            </div>
          </Layout.Column>
          <PhotoNavigationHeader
            categoryInfo={categoryInfo}
            currentSlug={currentSlug}
          />
          <div className={styles.hideOnMobile}>
            <Layout.Column columns="lg:7" offset="lg:3">
              <div className={styles.title}>
                {title}
              </div>
            </Layout.Column>
          </div>
          <PhotoInformationSection
            {...photoInfo}
          />
        </Layout.Row>
      </Layout.Container>
    )
  }

  if (aspectRatio === '2/3' || aspectRatio === '1/2') {
    return (
      <Layout.Container>
        <Layout.Row>
          <Layout.Column columns="md:10" offset="md:1">
            <div className={styles.imageContainer}>
              <BlurHashPhoto
                hasNegativeZIndex
                image={image}
                aspectRatio={aspectRatio}
                highQuality
              />
            </div>
          </Layout.Column>
          <Layout.Column columns="xs:10 md:8" offset="xs:1 md:2">
            <div className={styles.title}>
              {title}
            </div>
          </Layout.Column>
          <PhotoNavigationHeader
            categoryInfo={categoryInfo}
            currentSlug={currentSlug}
          />
        </Layout.Row>
        <PhotoInformationSection
          {...photoInfo}
        />
      </Layout.Container>
    )
  } else {
    return (
      <Layout.Container>
        <Layout.Row>
          <Layout.Column columns="xs:12 md:10" offset="md:1">
            <div className={styles.imageContainer}>
              <BlurHashPhoto
                hasNegativeZIndex
                image={image}
                aspectRatio={aspectRatio}
                highQuality
              />
            </div>
          </Layout.Column>
          <Layout.Column columns="xs:10 md:8" offset="xs:1 md:2">
            <div className={styles.title}>
              {title}
            </div>
          </Layout.Column>
          <PhotoNavigationHeader
            categoryInfo={categoryInfo}
            currentSlug={currentSlug}
          />
        </Layout.Row>
        <PhotoInformationSection
          {...photoInfo}
        />
      </Layout.Container>
    )
  }
}

PhotoPageHeaderSection.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    blurHash: PropTypes.string
  }),
  aspectRatio: PropTypes.string,
  iso: PropTypes.string,
  aperture: PropTypes.string,
  shutterSpeed: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string
  })
}

PhotoPageHeaderSection.defaultProps = {
}
