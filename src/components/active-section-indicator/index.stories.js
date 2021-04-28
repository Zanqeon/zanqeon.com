import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import ActiveSectionIndicator from './index'

export default {
  title: 'Components/Active Section Indicator',
  decorators: [ withKnobs ]
}

const sections = [ { sectionId: '1', title: 'about' }, { sectionId: '2', title: 'gallery' }, { sectionId: '3', title: 'gear' } ]
const activeSectionId = '2'

export const Default = () => {
  return (
    <ActiveSectionIndicator
      sections={sections}
      activeSectionId={activeSectionId}
    />
  )
}
