import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './index.module.scss'
import RichText from 'components/rich-text'

export default function PhotoInformation ({
  iso,
  aperture,
  shutterSpeed,
  date,
  location,
  description
}) {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.title}>ISO: </span>
            {iso}
          </li>
          <li className={styles.item}>
            <span className={styles.title}>Aperture: </span>
            {aperture}
          </li>
          <li className={styles.item}>
            <span className={styles.title}>Shutter Speed: </span>
            {shutterSpeed}
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.title}>Date: </span>
            {date}
          </li>
          <li className={styles.item}>
            <span className={styles.title}>Location: </span>
            <Link href={location.href}>
              <a>
                {`${location.place}, ${location.country}`}
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.title}>Description: </div>
        <RichText children={description} />
      </div>
    </div>
  )
}

PhotoInformation.propTypes = {
  iso: PropTypes.string,
  aperture: PropTypes.string,
  shutterSpeed: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.shape({
    href: PropTypes.string,
    country: PropTypes.string,
    place: PropTypes.string
  })
}
