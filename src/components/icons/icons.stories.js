import React from 'react'
import Icons from './index'

export default {
  title: 'Styleguide/Icons'
}

export const Default = () => {
  return (
    <div>
      {Object.entries(Icons).map(([ key, value ]) => {
        return (
          <div style={{ display: 'inline-block', margin: '2rem' }} key={key}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
              {value({ height: '6rem', width: '6rem' })}
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '1.4rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '300'
            }}
            >
              {key}
            </div>
          </div>
        )
      })}
    </div>
  )
}
