import React from 'react'
import { array, withKnobs } from '@storybook/addon-knobs'
import LogoSection from './index'

export default {
  title: 'Sections/Logo Section',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <LogoSection
      title="Zanqeon"
      roles={array('Category', [ 'Photographer', 'Developer' ])}
    />
  )
}
