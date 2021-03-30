import React from 'react'
import BlurHashPhoto from './index'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Blurhash Photo',
  decorators: [ withKnobs ]
}

export const Default = () => {
  return (
    <div style={{ maxWidth: 'min(80vw, 1440px)', marginLeft: 'auto', marginRight: 'auto' }}>
      <BlurHashPhoto
        aspectRatio={text('Aspect Ratio', '2/3')}
        image={{
          src: text('Source', 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1'),
          alt: text('Alt', 'Photo alt text'),
          blurHash: text('Blurhash (6x4)', 'WtKe7jMxS5t7Rjof~qf6V@kCf6WB%2xukCRjozbHbvjsjtbHjFjt')
        }}
      />
    </div>
  )
}
