import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withNextRouter } from 'storybook-addon-next-router'
import 'assets/scss/global.scss'
import './styleguide/storybook.scss'

export const customBackgrounds = [
  {
    name: 'twitter',
    value: '#00aced'
  },
  {
    name: 'facebook',
    value: '#3b5998'
  }
]

const customViewports = {
  iphone8p: {
    name: 'iPhone 8+',
    styles: {
      height: '736px',
      width: '414px'
    },
    type: 'mobile'
  },
  iphonex: {
    name: 'iPhone X',
    styles: {
      height: '812px',
      width: '375px'
    },
    type: 'mobile'
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px'
    },
    type: 'tablet'
  },
  ipad12p: {
    name: 'iPad Pro 12.9in',
    styles: {
      height: '1366px',
      width: '1024px'
    },
    type: 'tablet'
  },
  macbook13: {
    name: 'MacBook Pro 13in',
    styles: {
      height: '1050px',
      width: '1680px'
    },
    type: 'desktop'
  },
  macbook15: {
    name: 'MacBook Pro 15in',
    styles: {
      height: '1800px',
      width: '2880px'
    },
    type: 'desktop'
  }
}

addDecorator(
  withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
    push () {}
  })
)

addDecorator(withKnobs)

export const parameters = {
  viewport: {
    viewports: customViewports
  }
}
