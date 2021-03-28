import React from 'react'
import PropTypes from 'prop-types'
import Country from 'components/country'
import styles from './index.module.scss'

export default function WorldMap ({
  activeCountry,
  countries,
  onMouseMove
}) {
  const handleMouseEnter = (name) => {
    onMouseMove(name)
  }
  const handleMouseLeave = () => onMouseMove()
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="644.869"
      height="417.502"
      viewBox="0 0 644.869 417.502"
      pointerEvents="visible"
    >
      {countries.map(country => {
        const fillColour = country?.yearsVisited?.length > 0 || country?.homeCountry
          ? (country.name === activeCountry
            ? '#FFFFFF'
            : '#404040'
          )
          : 'none'

        return (
          <Country
            key={country.path}
            {...country}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            fill={fillColour}
          />)
      })}
    </svg>
  )
}

WorldMap.propTypes = {
  onMouseMove: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.object),
  activeCountry: PropTypes.string
}

WorldMap.defaultProps = {
  activeCountry: ''
}
