export default function mapCountries (data) {
  const mapContinentName = (continent) => {
    if (continent === 'South America') { return 'S. America' }
    if (continent === 'North America') { return 'N. America' }
    else return continent
  }

  const mapYearsVisited = (years) => {
    if (!years) return []
    return years
      .sort()
      .reverse()
      .slice(0, 4)
  }

  return data.pageData.map(country => {
    return {
      id: country.sys.id,
      type: country.sys.contentType.sys.id,
      name: country.fields.countryName,
      continent: mapContinentName(country.fields.continent),
      yearsVisited: mapYearsVisited(country.fields.yearsVisited),
      homeCountry: country.fields.homeCountry || false,
      path: country.fields.svgPath,
      transform: country.fields.svgTransform
    }
  })
}
