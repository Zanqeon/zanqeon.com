import React from 'react'
import { array, text, withKnobs } from '@storybook/addon-knobs'
import PhotoListSection from './index'
import HighlightPhoto from 'components/highlight-photo'
import CategoryHeader from 'components/header-category'

export default {
  title: 'Sections/Photo List Section',
  decorators: [ withKnobs ]
}

const items = [
  {
    aspectRatio: '2/3',
    image: {
      src: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
      alt: 'Alt text'
    },
    link: {
      href: '#',
      label: 'Landscape Photography'
    }
  },
  {
    aspectRatio: '2/3',
    image: {
      src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
      alt: 'Alt text'
    },
    link: {
      href: '#',
      label: 'Wildlife Photography'
    }
  },
  {
    aspectRatio: '2/3',
    image: {
      src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
      alt: 'Alt text'
    },
    link: {
      href: '#',
      label: 'Cityscape Photography'
    }
  }
]

export const Default = () => {
  return (
    <PhotoListSection
      items={items}
      title={text('Title', 'Photographs')}
    />
  )
}
