import React from 'react'
import * as defaultPropTypes from 'config/prop-types'
import styles from './index.module.scss'

export default function CountryVisited ({
  country
}) {
  return (
    <div className={styles.container}>
      <div className={styles.countryName}>{country && country.name}</div>
      <ul>
        {!country?.home && country?.yearsVisited && (
          country.yearsVisited.map((year) =>
            <li className={styles.listItem} key={year}>
              {'Visited in ' + year}
            </li>)
        )}
        {country?.home && (
          <li className={styles.listItem} key={country.name}>
            Permanent Residence
          </li>
        )}
      </ul>
    </div>
  )
}

CountryVisited.propTypes = {
  country: defaultPropTypes.country
}

CountryVisited.defaultProps = {
  country: {}
}
