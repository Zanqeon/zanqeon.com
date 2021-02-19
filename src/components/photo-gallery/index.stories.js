import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import PhotoGallery from './index'

export default {
  title: 'Components/Photo Gallery',
  decorators: [ withKnobs ]
}

const photos = [
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://via.placeholder.com/800x400',
    slug: 'ice-and-fire',
    width: 2,
    height: 1
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 2,
    height: 3
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://via.placeholder.com/800x400',
    slug: 'ice-and-fire',
    width: 2,
    height: 1
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://via.placeholder.com/600x400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  }
]

export const Default = () => {
  return (
    <PhotoGallery
      photos={photos}
    />
  )
}
