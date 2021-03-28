import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function ContinentsVisited ({
  continents
}) {
  const createTwoDigitNumber = (number) => {
    return (number < 10 ? '0' : '') + number
  }

  return (
    <ul className={styles.list}>
      {Object.keys(continents)
        .map(continent => {
          const numberOfCountriesVisitedPerContinent = continents[continent]
          const twoDigitNumber = createTwoDigitNumber(numberOfCountriesVisitedPerContinent)
          return (
            <li key={continent} className={styles.item}>
              {continent}
              <div className={styles.number}>
                {twoDigitNumber}
              </div>
            </li>
          )
        })}
    </ul>
  )
}

ContinentsVisited.propTypes = {
  continents: PropTypes.object
}
