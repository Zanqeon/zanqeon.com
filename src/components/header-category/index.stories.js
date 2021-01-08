import React from 'react'
import CategoryHeader from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Header Category',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <CategoryHeader
      title={text('Category', 'Landscape')}
    />
  )
}
