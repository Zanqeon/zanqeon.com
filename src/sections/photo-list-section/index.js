import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/section'
import styles from './index.module.scss'
import HighlightPhoto from 'components/highlight-photo'
import * as defaultPropTypes from 'config/prop-types'
import Layout from 'components/layout'

export default function PhotoListSection ({
  title,
  items
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
    <>
      <Section
        isOuter
        hasBackground
      >
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{hyphenatedTitle}</h2>
        </div>
      </Section>
      <Layout.Container>
        <ul className={styles.list}>
          {items.map((item, idx) => {
            const isOddItem = (idx % 2 === 1)

            return (
              <li key={item.link.label} className={styles.item}>
                <HighlightPhoto
                  image={item.image}
                  link={item.link}
                  aspectRatio={item.aspectRatio}
                  isReversed={isOddItem}
                />
              </li>
            )
          })}
        </ul>
      </Layout.Container>
    </>
  )
}

PhotoListSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(defaultPropTypes.highlightPhoto)),
  title: PropTypes.string
}
