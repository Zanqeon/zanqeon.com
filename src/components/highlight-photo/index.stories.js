import React from 'react'
import HighlightPhoto from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Highlight Photo',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <HighlightPhoto
      aspectRatio={text('Aspect Ratio', '2/3')}
      image={{
        src: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
        alt: text('Alt', 'Photo of that wanaka tree in new zealand'),
      }}
      link={{
        href: text('Href', '#'),
        label: text('Label', 'Landscape Photography')
      }}
    />
  )
}
