import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/section'
import Contact from 'components/contact'
import styles from './index.module.scss'

export default function ContactSection ({
  email,
  label
}) {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <Section
        isInner
        hasBackground
        hasMarginTop
      >
        <div className={styles.year}>{currentYear}</div>
        <Contact
          email={email}
          label={label}
        />
      </Section>
    </div>
  )
}

ContactSection.propTypes = {
  email: PropTypes.string,
  label: PropTypes.string
}

ContactSection.defaultProps = {
  email: '',
  label: 'Get in touch'
}
