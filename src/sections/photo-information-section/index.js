import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import RichText from 'components/rich-text'
import Layout from 'components/layout'
import classNames from 'classnames'
import styles from './index.module.scss'

export default function PhotoInformation ({
  iso,
  aperture,
  shutterSpeed,
  date,
  location,
  description,
  isPortrait
}) {
  const listClassName = classNames(styles.list, {
    [styles.listPortrait]: isPortrait
  })

  const descriptionContainerClassName = classNames(styles.descriptionContainer, {
    [styles.descriptionContainerAlternative]: isPortrait
  })

  return (
    <>
      {isPortrait && (
        <Layout.Column columns="sm:8 md:6 lg:4" offset="sm:2 lg:1">
          <ul className={listClassName}>
            {iso && (
              <li className={styles.item}>
                <span className={styles.title}>ISO: </span>
                {iso}
              </li>
            )}
            {aperture && (
              <li className={styles.item}>
                <span className={styles.title}>Aperture: </span>
                {aperture}
              </li>
            )}
            {shutterSpeed && (
              <li className={styles.item}>
                <span className={styles.title}>Shutter Speed: </span>
                {shutterSpeed}
              </li>
            )}
          </ul>
          <ul className={styles.list}>
            {date && (
              <li className={styles.item}>
                <span className={styles.title}>Date: </span>
                {date}
              </li>
            )}
            {location?.href && location?.label && (
              <li className={styles.item}>
                <span className={styles.title}>Location: </span>
                <Link href={location.href}>
                  <a target="_blank">
                    {location.label}
                  </a>
                </Link>
              </li>
            )}
            {description && (
              <li className={descriptionContainerClassName}>
                <div className={styles.title}>Description:</div>
                <RichText children={description} />
              </li>
            )}
          </ul>
        </Layout.Column>
      )}
      {!isPortrait && (
        <Layout.Container>
          <Layout.Row>
            <Layout.Column columns="md:4 lg:3" offset="sm:1">
              <ul className={listClassName}>
                {iso && (
                  <li className={styles.item}>
                    <span className={styles.title}>ISO: </span>
                    {iso}
                  </li>
                )}
                {aperture && (
                  <li className={styles.item}>
                    <span className={styles.title}>Aperture: </span>
                    {aperture}
                  </li>
                )}
                {shutterSpeed && (
                  <li className={styles.item}>
                    <span className={styles.title}>Shutter Speed: </span>
                    {shutterSpeed}
                  </li>
                )}
              </ul>
              <ul className={styles.list}>
                {date && (
                  <li className={styles.item}>
                    <span className={styles.title}>Date: </span>
                    {date}
                  </li>
                )}
                {location?.href && location?.label && (
                  <li className={styles.item}>
                    <span className={styles.title}>Location: </span>
                    <Link href={location.href}>
                      <a target="_blank">
                        {location.label}
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </Layout.Column>
            {description && (
              <Layout.Column columns="sm:8 md:5" offset="sm:1 lg:2">
                <div className={descriptionContainerClassName}>
                  <div className={styles.title}>Description:</div>
                  <RichText children={description} />
                </div>
              </Layout.Column>
            )}
          </Layout.Row>
        </Layout.Container>
      )}
    </>
  )
}

PhotoInformation.propTypes = {
  iso: PropTypes.string,
  aperture: PropTypes.string,
  shutterSpeed: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.object,
  location: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string
  }),
  isPortrait: PropTypes.bool
}
