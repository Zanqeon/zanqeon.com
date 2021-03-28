import React from 'react'
import { countries } from 'mock-data/countries'
import WorldMapSection from 'sections/world-map-section'

import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Sections/World Map Section',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <WorldMapSection
      countries={countries}
    />
  )
}
