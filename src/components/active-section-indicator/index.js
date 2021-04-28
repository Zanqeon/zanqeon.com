import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import classNames from 'classnames'
export default function ActiveSectionIndicator ({
  sections,
  activeSectionId
}) {
  const doubleDigits = (number) => {
    return number < 10 ? '0' + number : number
  }
  const activeSectionNumber = sections.findIndex((section) => section.sectionId === activeSectionId) + 1

  return (
    <>
      <div className={styles.container}>
        <ul>
          {sections.map((section) => {
            const itemClassName = classNames(styles.item, {
              [styles.activeItem]: section.sectionId === activeSectionId
            })
            return (
              <li key={section.sectionId} className={itemClassName}>{section.title}</li>
            )
          })}
        </ul>
        <div className={styles.counterContainer}>
          <span>{doubleDigits(activeSectionNumber)}</span>
          <span className={styles.counterTotal}>{doubleDigits(sections.length)}</span>
        </div>
      </div>
    </>
  )
}

ActiveSectionIndicator.propTypes = {
  activeSectionId: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.object)
}
