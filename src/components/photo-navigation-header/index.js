import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icons from 'components/icons'
import PhotoCounter from 'components/photo-pagination'
import Layout from 'components/layout'
import styles from './index.module.scss'

export default function PhotoNavigationHeader ({
  categoryInfo,
  currentSlug
}) {
  return (
    <div className={styles.container}>
      <div className={styles.showOnMobile}>
        <Link href="/">
          <a className={`${styles.link} ${styles.linkLeft}`}>
            <Icons.Logo className={`${styles.icon} ${styles.iconLogo}`} />
          </a>
        </Link>
        <h1 className={styles.title}>{categoryInfo.category}</h1>
      </div>
      <Layout.Row>
        <Layout.Column columns="xs:11">
          <Link href={`/${categoryInfo.categorySlug}`}>
            <a className={`${styles.link} ${styles.linkRight}`}>
              <Icons.Close className={`${styles.icon} ${styles.iconClose}`} />
            </a>
          </Link>
        </Layout.Column>
      </Layout.Row>
      <PhotoCounter
        photos={categoryInfo.photos}
        categorySlug={categoryInfo.categorySlug}
        currentSlug={currentSlug}
      />
    </div>
  )
}

PhotoNavigationHeader.propTypes = {
  categoryInfo: PropTypes.shape({
    category: PropTypes.string,
    categorySlug: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      slug: PropTypes.string
    }))
  }),
  currentSlug: PropTypes.string
}
