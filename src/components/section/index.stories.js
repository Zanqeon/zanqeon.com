import React from 'react'
import Section from './index'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Components/Section',
  decorators: [ withKnobs ]
}

export const isInner = () => {
  return (
    <Section isInner>
      children
    </Section>
  )
}

export const isOuter = () => {
  return (
    <Section isOuter>
      children
    </Section>
  )
}

export const isInnerHasBackground = () => {
  return (
    <Section isInner hasBackground>
      children
    </Section>
  )
}

export const isOuterHasBackground = () => {
  return (
    <Section isOuter hasBackground>
      children
    </Section>
  )
}
