import React from 'react'
import RoleList from './index'
import { withKnobs, array } from '@storybook/addon-knobs'

export default {
  title: 'Components/Role List',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <RoleList
      roles={array('Category', [ 'Photographer', 'Developer' ])}
    />
  )
}
