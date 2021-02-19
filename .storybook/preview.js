import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withNextRouter } from 'storybook-addon-next-router'
import 'assets/scss/global.scss'
import './styleguide/storybook.scss'
import * as nextImage from "next/image"

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

//Mock the Nextjs <Image> component so it works in storybook, normal next <Image> component doesn't work
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: props => <img
    {...props}
    style={{
      visibility: 'visible',
      position: 'absolute',
      inset: '0',
      boxSizing: 'border-box',
      padding: '0',
      border: 'none',
      margin: 'auto',
      display: 'block',
      width: '0',
      height: '0',
      minWidth: '100%',
      maxWidth: '100%',
      minHeight: '100%',
      maxHeight: '100%'
    }}
  />
})

export const parameters = {
  viewport: {
    viewports: customViewports
  },
  layout: 'fullscreen'
}
