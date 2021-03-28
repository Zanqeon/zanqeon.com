import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Section from 'components/section'
import WorldMap from 'components/world-map'
import CountryVisited from 'components/country-visited'
import ContinentsVisited from 'components/continents-visited'
import styles from './index.module.scss'

export default function WorldMapSection ({
  countries,
  title,
  sumTitle
}) {
  const [ activeCountryName, setActiveCountryName ] = useState('')

  const getCountryInfoByName = (name) => {
    return (countries.find((country) => country.name === name))
  }

  const countriesByContinent = countries
    .filter((country) => { return country.continent })
    .reduce((continents, country) => {
      return {
        ...continents,
        [country.continent]: continents[country.continent]
          ? [ ...continents[country.continent], country ]
          : [ country ]
      }
    }, {})

  const visitedContinents = Object.keys(countriesByContinent)
    .sort((a, b) => a.localeCompare(b)) // sort object alphabetically
    .reduce((continents, continent) => {
      const numberOfVisitedCountries = countriesByContinent[continent]
        .filter(country => (country?.yearsVisited?.length || country.homeCountry)).length
      return {
        ...continents,
        [continent]: numberOfVisitedCountries
      }
    }, {})

  const countryInfo = getCountryInfoByName(activeCountryName)
  const totalCountriesVisited = Object.values(visitedContinents).reduce((sum, number) => sum + number)

  const onMouseMove = (countryName) => {
    setActiveCountryName(countryName)
  }

  return (
    <>
      <Section
        isInner
        hasBackground
      >
        <h3 className={styles.title}>{title}</h3>
      </Section>
      <Section
        isMiddle
        hasBackground
      >
        <div className={styles.worldMap}>
          <WorldMap
            countries={countries}
            onMouseMove={onMouseMove}
            activeCountry={activeCountryName}
          />
        </div>
      </Section>
      <Section
        isInner
        hasBackground
      >
        <div className={styles.infoSection}>
          <ContinentsVisited continents={visitedContinents} />
          <CountryVisited country={countryInfo} />
        </div>
        <div className={styles.sumOfVisitedCountries}>
          <span className={styles.bodyText}>{sumTitle}</span>
          <div className={styles.numberLarge}>{totalCountriesVisited}</div>
        </div>
      </Section>
    </>
  )
}

WorldMapSection.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object),
  sumTitle: PropTypes.string,
  title: PropTypes.string
}

WorldMapSection.defaultProps = {

}
