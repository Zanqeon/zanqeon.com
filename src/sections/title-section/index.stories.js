import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import TitleSection from './index'

export default {
  title: 'Sections/Title Section',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <TitleSection
      title={text('Title', 'Equipment')}
    />
  )
}
