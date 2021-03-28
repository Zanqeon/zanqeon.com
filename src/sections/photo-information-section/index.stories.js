import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import PhotoInformation from './index'

export default {
  title: 'Sections/Photo Information Section',
  decorators: [ withKnobs ]
}

export const Default = () => {
  const iso = text('ISO', '200')
  const shutterSpeed = text('Shutterspeed', '1/100 sec')
  const aperture = text('Aperture', 'f/9')
  const date = text('Date', 'f/9')
  const location = {
    href: text('Href', '#'),
    text: text('Place', 'Lake Wanaka, New Zealand')
  }
  const description = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet imperdiet dignissim. Phasellus a faucibus dolor.',
            marks: [],
            data: {}
          },
          {
            nodeType: 'text',
            value: ' ',
            marks: [],
            data: {}
          },
          {
            nodeType: 'text',
            value: 'Mauris non vestibulum purus.',
            marks: [ { type: 'bold' } ],
            data: {}
          }
        ]
      }
    ]
  }

  return (
    <PhotoInformation
      iso={iso}
      shutterSpeed={shutterSpeed}
      aperture={aperture}
      date={date}
      location={location}
      description={description}
    />
  )
}
