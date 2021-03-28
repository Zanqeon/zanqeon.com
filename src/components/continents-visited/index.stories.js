import React from 'react'
import ContinentsVisited from './index'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Components/Continents Visited',
  decorators: [ withKnobs ]
}

const continents = {
  Oceania: 2,
  Europe: 6,
  Asia: 2,
  'N. America': 2,
  Africa: 0,
  'S. America': 0
}

export const Default = () => {
  return (
    <ContinentsVisited
      continents={continents}
    />
  )
}
