import React from 'react'
import { Container } from 'components/layout'
import styles from './index.module.scss'

export default {
  title: 'Styleguide/Typography'
}

export const Headings = () => (
  <Container>
    <h1 className={styles.heading1}>Heading 1</h1>
    <h2 className={styles.heading2}>Heading 2</h2>
  </Container>
)

export const Text = () => (
  <Container>
    <p className={styles.bodyText}>Body text</p>
  </Container>
)
