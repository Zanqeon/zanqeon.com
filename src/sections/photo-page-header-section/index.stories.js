import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import PhotoPageHeaderSection from './index'
import { string } from 'prop-types'

export default {
  title: 'Sections/Photo Page Header Section',
  decorators: [ withKnobs ]
}

const image = {
  src: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
  alt: 'Moraine lake',
  blurHash: 'WtKe7jMxS5t7Rjof~qf6V@kCf6WB%2xukCRjozbHbvjsjtbHjFjt'
}

const imagePortrait = {
  src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
  alt: 'Moraine lake',
  blurHash: 'WtKe7jMxS5t7Rjof~qf6V@kCf6WB%2xukCRjozbHbvjsjtbHjFjt'
}

const imageSquare = {
  src: 'https://images.unsplash.com/photo-1544854405-f9d585b54386?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
  alt: 'Moraine lake',
  blurHash: 'WtKe7jMxS5t7Rjof~qf6V@kCf6WB%2xukCRjozbHbvjsjtbHjFjt'
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

const photoInfo = {
  iso: '100',
  shutterSpeed: '1/80 sec',
  aperture: 'f/11',
  date: '19/08/2019',
  location: {
    href: '#',
    label: 'Moraine lake, Canada'
  },
  description: {
    data: {},
    content: [ {
      data: {},
      content: [ {
        data: {},
        marks: [],
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ornare sem. In sollicitudin neque in posuere ultricies. Sed metus massa, dictum in lobortis aliquam, volutpat a quam. Duis fermentum pharetra purus, ac pharetra tortor aliquet ut. Duis eu tempus mauris, a vestibulum elit. Proin rhoncus euismod dolor. Duis sit amet felis vel neque cursus mattis et eget erat. Mauris et turpis sit amet augue congue placerat. Ut congue gravida ipsum, quis pharetra felis mollis sit amet. Ut mattis ante id nisl tristique, eu consequat dolor blandit. Donec malesuada pellentesque porttitor.',
        nodeType: 'text'
      } ],
      nodeType: 'paragraph'
    } ],
    nodeType: 'document'
  }
}

export const Default = () => {
  return (
    <PhotoPageHeaderSection
      image={image}
      title={text('Title', 'Moraine Lake')}
      aspectRatio={text('Aspect Ratio', '2/3')}
      categoryInfo={categoryInfo}
      currentSlug="moraine-lake"
      photoInfo={photoInfo}
    />
  )
}

export const Portrait = () => {
  return (
    <PhotoPageHeaderSection
      image={imagePortrait}
      title={text('Title', 'Moraine Lake')}
      aspectRatio={text('Aspect Ratio', '3/2')}
      categoryInfo={categoryInfo}
      currentSlug="moraine-lake"
      photoInfo={photoInfo}
    />
  )
}

export const Square = () => {
  return (
    <PhotoPageHeaderSection
      image={imageSquare}
      title={text('Title', 'Moraine Lake')}
      aspectRatio={text('Aspect Ratio', '1/1')}
      categoryInfo={categoryInfo}
      currentSlug="moraine-lake"
      photoInfo={photoInfo}
    />
  )
}

