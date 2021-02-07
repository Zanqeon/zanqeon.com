import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './index.module.scss'

export default function Contact ({
  email,
  label
}) {
  return (
    <div className={styles.container}>
      <Link href={`mailto:${email}`}>
        <a className={styles.link}>{label}</a>
      </Link>
    </div>
  )
}

Contact.propTypes = {
  email: PropTypes.string,
  label: PropTypes.string
}

Contact.defaultProps = {
  label: ''
}
