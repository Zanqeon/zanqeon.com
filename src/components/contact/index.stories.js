import React from 'react'
import Contact from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Contact',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <Contact
      email={text('Category', 'tim@example.com')}
      label={text('Label', 'Get in touch')}
    />
  )
}
