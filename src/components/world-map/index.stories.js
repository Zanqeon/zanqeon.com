import React from 'react'
import { countries } from 'mock-data/countries'
import WorldMap from './index'

import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Components/World Map',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <WorldMap
      countries={countries}
    />
  )
}
