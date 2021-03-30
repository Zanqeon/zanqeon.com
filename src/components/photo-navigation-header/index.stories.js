import React from 'react'
import PhotoNavigationHeader from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Photo Navigation Header',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <PhotoNavigationHeader
      title={text('Category', 'Landscape')}
    />
  )
}
