import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Layout from 'components/layout'
import styles from './index.module.scss'

export default function PhotoPageHeaderSection ({
  title,
  image,
  aspectRatio
}) {
  console.log('image', image)
  return (
    <Layout.Container>
      <Layout.Row>
        <Layout.Column columns="md:10" offset="md:1">
          <div className={styles.imageContainer}>
            <div className={styles.image} style={{ paddingTop: `calc(100% * ${aspectRatio})` }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
              />
            </div>
          </div>
        </Layout.Column>
        <Layout.Column columns="xs:10 md:8" offset="xs:1 md:2">
          <div className={styles.title}>
            {title}
          </div>
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  )
}

PhotoPageHeaderSection.propTypes = {
  title: PropTypes.string,
  image: {
    src: PropTypes.string,
    alt: PropTypes.string
  },
  aspectRatio: PropTypes.string
}

PhotoPageHeaderSection.defaultProps = {
}
