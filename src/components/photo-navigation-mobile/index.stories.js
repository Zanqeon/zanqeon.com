import React from 'react'
import PhotoNavigationHeader from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Photo Navigation Header',
  decorators: [ withKnobs ]
}

const categoryInfo = {
  category: 'Landscape',
  categorySlug: 'landscape',
  photos: [
    {
      slug: 'moraine-lake'
    },
    {
      slug: 'test-slug'
    },
    {
      slug: 'test-slug2'
    }
  ]
}

export const Default = () => {
  return (
    <PhotoNavigationHeader
      categoryInfo={categoryInfo}
      currentSlug="moraine-lake"
    />
  )
}
