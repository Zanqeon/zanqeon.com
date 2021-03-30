import React from 'react'
import PhotoPagination from './index'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Components/Photo Pagination',
  decorators: [ withKnobs ]
}

const photos = [
  { slug: 'moraine-lake' },
  { slug: 'ice-and-fire' },
  { slug: 'serenity' },
  { slug: 'swiss-sunrise' },
  { slug: 'cloud-breaker' },
  { slug: 'glacial-lighthouse' },
  { slug: 'grand-canyon' },
  { slug: 'yosemite-grandeur' }
]

export const Default = () => {
  return (
    <PhotoPagination
      photos={photos}
      currentSlug="moraine-lake"
    />
  )
}
