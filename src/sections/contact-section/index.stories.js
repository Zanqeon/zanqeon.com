import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import ContactSection from './index'

export default {
  title: 'Sections/Contact Section',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <ContactSection
      email={text('Category', 'tim@example.com')}
      label={text('Label', 'Get in touch')}
    />
  )
}
