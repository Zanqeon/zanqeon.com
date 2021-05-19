import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Icons from 'components/icons'
import styles from './index.module.scss'

export default function PhotoPagination ({
  photos,
  currentSlug,
  categorySlug
}) {
  const currentItemIndex = photos.map(photo => photo.slug).indexOf(currentSlug)
  const itemNext = photos[currentItemIndex + 1] ? photos[currentItemIndex + 1] : photos[0]
  const itemPrevious = photos[currentItemIndex - 1] ? photos[currentItemIndex - 1] : photos[photos.length - 1]

  const doubleDigits = (number) => {
    return number < 10 ? '0' + number : number
  }

  return (
    <>
      <div className={styles.counter}>
        {photos.map((photo, index) => (
          photo.slug === currentSlug ? doubleDigits(index + 1) : null
        ))}
        <span className={styles.counterTotal}>{doubleDigits(photos.length)}</span>
      </div>
      <div className={styles.pagination}>
        <Link href={`/${categorySlug}/${itemPrevious.slug}`}>
          <a className={styles.link}>
            <Icons.ArrowLeftHooked className={styles.icon} />
          </a>
        </Link>
        <Link href={`/${categorySlug}/${itemNext.slug}`}>
          <a className={styles.link}>
            <Icons.ArrowRightHooked className={styles.icon} />
          </a>
        </Link>
      </div>
    </>
  )
}

PhotoPagination.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string
  })),
  currentSlug: PropTypes.string,
  categorySlug: PropTypes.string
}
