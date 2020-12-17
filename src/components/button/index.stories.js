import React from 'react'
import Button from './index'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Components/Button',
  decorators: [withKnobs]
}

export const Default = () => (
  <Button
    label="Check this out"
  />
)

export const Disabled = () => (
  <Button
    label="Don't click me!"
    isDisabled={true}
  />
)
