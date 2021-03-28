import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import RichText from 'components/rich-text'
import Layout from 'components/layout'
import styles from './index.module.scss'

export default function PhotoInformation ({
  iso,
  aperture,
  shutterSpeed,
  date,
  location,
  description
}) {
  return (
    <Layout.Container>
      <div className={styles.container}>
        <Layout.Row>
          <Layout.Column columns="md:3" offset="md:2">
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
                  <a target="_blank">
                    {location.text}
                  </a>
                </Link>
              </li>
            </ul>
          </Layout.Column>
          <Layout.Column columns="md:4" offset="md:1">
            <div className={styles.descriptionContainer}>
              <div className={styles.title}>Description: </div>
              <RichText children={description} />
            </div>
          </Layout.Column>
        </Layout.Row>
      </div>
    </Layout.Container>
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
    text: PropTypes.string
  })
}
