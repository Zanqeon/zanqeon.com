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
        <div className={styles[key]}></div>
        <p style={{ textAlign: 'center', fontSize:'1.6rem' }}>
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
