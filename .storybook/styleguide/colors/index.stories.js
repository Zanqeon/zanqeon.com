import React from 'react'
import Layout from 'components/layout'
import styles from './index.module.scss'

export default {
  title: 'Styleguide/Colors'
}

const renderColors = () => {
  const colors = []
  for (const [key] of Object.entries(styles)) {
    colors.push(
      <Layout.Col columns="xs:6 sm:4 md:2" key={key}>
        <div className={styles[key]}/>
        <p style={{ textAlign: 'center', fontSize: '1.4rem', fontFamily: 'Poppins, sans-serif', fontWeight: '300' }}>
          ${key}
        </p>
      </Layout.Col>
    )
  }
  return colors
}

export const Default = () => (
  <Layout.Container>
    <Layout.Row>
      {renderColors()}
    </Layout.Row>
  </Layout.Container>
)
