import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import PhotoPageHeaderSection from './index'

export default {
  title: 'Sections/Photo Page Header Section',
  decorators: [ withKnobs ]
}

const image = {
  src: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
  alt: 'Moraine lake'
}

export const Default = () => {
  return (
    <PhotoPageHeaderSection
      image={image}
      title={text('Title', 'Moraine Lake')}
      aspectRatio={text('Aspect Ratio', '2/3')}
    />
  )
}
