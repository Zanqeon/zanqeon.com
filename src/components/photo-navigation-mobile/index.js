import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icons from 'components/icons'
import Layout from 'components/layout'
import styles from './index.module.scss'

export default function PhotoNavigationMobile ({
  categoryInfo,
  currentSlug
}) {
  const photos = categoryInfo.photos

  const currentItemIndex = photos.map(photo => photo.slug).indexOf(currentSlug)
  const itemNext = photos[currentItemIndex + 1] ? photos[currentItemIndex + 1] : photos[0]
  const itemPrevious = photos[currentItemIndex - 1] ? photos[currentItemIndex - 1] : photos[photos.length - 1]
  const currentPhotoNumber = (currentItemIndex + 1) < 10 ? '0' + (currentItemIndex + 1) : (currentItemIndex + 1)
  const photoLength = photos.length < 10 ? '0' + photos.length : photos.length

  return (
    <div className={styles.container}>
      <Layout.Container>
        <Layout.Row>
          <Layout.Column columns="xs:10" offset="xs:1">
            <div className={styles.contentContainer}>
              <Link href={`/${categoryInfo.categorySlug}/${itemPrevious.slug}`} className={styles.link}>
                <Icons.ArrowLeftStraight className={styles.icon} />
                <div className={`${styles.indicator} ${styles.indicatorLeft}`}>Prv</div>
              </Link>
              <div className={styles.counter}>
                {currentPhotoNumber}/{photoLength}
              </div>
              <Link href={`/${categoryInfo.categorySlug}/${itemNext.slug}`} className={styles.link}>
                <Icons.ArrowRightStraight className={styles.icon} />
                <div className={`${styles.indicator} ${styles.indicatorRight}`}>Nxt</div>
              </Link>
            </div>
          </Layout.Column>
        </Layout.Row>
      </Layout.Container>
    </div>
  )
}

PhotoNavigationMobile.propTypes = {
  categoryInfo: PropTypes.shape({
    category: PropTypes.string,
    categorySlug: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      slug: PropTypes.string
    }))
  }),
  currentSlug: PropTypes.string
}
