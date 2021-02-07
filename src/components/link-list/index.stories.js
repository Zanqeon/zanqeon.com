import React from 'react'
import LinkList from './index'
import { withKnobs, object } from '@storybook/addon-knobs'

export default {
  title: 'Components/Link List',
  decorators: [ withKnobs ]
}

const linkList = [
  {
    label: 'Instagram',
    href: '#',
    colorType: 'instagram'
  },
  {
    label: 'Facebook',
    href: '#',
    colorType: 'facebook'
  },
  {
    label: 'Linkedin',
    href: '#',
    colorType: 'linkedin'
  },
  {
    label: 'Github',
    href: '#',
    colorType: 'github'
  }
]

export const Default = () => {
  return (
    <LinkList
      items={object('Category', linkList)}
    />
  )
}
