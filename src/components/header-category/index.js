import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icons from 'components/icons'
import styles from './index.module.scss'

export default function HeaderCategory ({
  title
}) {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <a className={`${styles.link} ${styles.linkLeft}`}>
            <Icons.Logo className={`${styles.icon} ${styles.iconLogo}`} />
          </a>
        </Link>
        <h1 className={styles.title}>{title}</h1>
        <Link href="/">
          <a className={`${styles.link} ${styles.linkRight}`}>
            <Icons.Close className={`${styles.icon} ${styles.iconClose}`} />
          </a>
        </Link>
      </div>
      <h1 className={styles.title}>{title}</h1>
    </>
)
}

HeaderCategory.propTypes = {
  title: PropTypes.string
}

HeaderCategory.defaultProps = {
  title: ''
}
