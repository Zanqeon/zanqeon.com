import React from 'react'
import CountryVisited from './index'
import {
  withKnobs,
  boolean,
  text,
  array
} from '@storybook/addon-knobs'

export default {
  title: 'Components/CountryVisited',
  decorators: [ withKnobs ]
}

export const Default = () => {
  const country = {
    name: text('Country', 'The Netherlands'),
    yearsVisited: array('Years Visited', [ 2013, 2017 ]),
    home: boolean('home', true)
  }

  return (
    <CountryVisited
      country={country}
    />
  )
}
