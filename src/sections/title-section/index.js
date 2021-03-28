import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/section'
import styles from './index.module.scss'

export default function TitleSection ({
  title
}) {
  const hyphenateString = () => {
    const beforeHyphen = title.slice(0, 5)
    const afterHyphen = title.slice(5, title.length)

    return (
      <>
        <div className={styles.titleHyphen}>{beforeHyphen}</div>
        <div className={styles.titleAfterHyphen}>{afterHyphen}</div>
      </>
    )
  }

  const hyphenatedTitle = hyphenateString(title)

  return (
    <Section
      isOuter
      hasBackground
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{hyphenatedTitle}</h2>
      </div>
    </Section>
  )
}

TitleSection.propTypes = {
  title: PropTypes.string
}

TitleSection.defaultProps = {
  title: ''
}
