import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import PhotoGallerySection from './index'

export default {
  title: 'Sections/Photo Gallery Section',
  decorators: [ withKnobs ]
}

const photos = [
  {
    src: 'https://picsum.photos/400/300',
    slug: 'ice-and-fire',
    width: 4,
    height: 3
  },
  {
    src: 'https://picsum.photos/400',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://picsum.photos/400/200',
    slug: 'ice-and-fire',
    width: 2,
    height: 1
  },
  {
    src: 'https://picsum.photos/600/400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://picsum.photos/400',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://picsum.photos/400/300',
    slug: 'ice-and-fire',
    width: 4,
    height: 3
  },
  {
    src: 'https://picsum.photos/400',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://picsum.photos/400/200',
    slug: 'ice-and-fire',
    width: 2,
    height: 1
  },
  {
    src: 'https://picsum.photos/600/400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://picsum.photos/400',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://picsum.photos/400/300',
    slug: 'ice-and-fire',
    width: 4,
    height: 3
  },
  {
    src: 'https://picsum.photos/600',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  },
  {
    src: 'https://picsum.photos/400/200',
    slug: 'ice-and-fire',
    width: 2,
    height: 1
  },
  {
    src: 'https://picsum.photos/600/400',
    slug: 'ice-and-fire',
    width: 3,
    height: 2
  },
  {
    src: 'https://picsum.photos/400',
    slug: 'ice-and-fire',
    width: 1,
    height: 1
  }
]

export const Default = () => {
  return (
    <PhotoGallerySection
      photos={photos}
    />
  )
}
