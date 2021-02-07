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
    <h3 className={styles.heading3}>Heading 3</h3>
    <div className={styles.role}>Role</div>
  </Container>
)

export const Text = () => (
  <Container>
    <p className={styles.bodyText}>Body text</p>
    <a href="#" className={styles.bodyLink}>Link</a>
  </Container>
)

export const Accents = () => (
  <Container>
    <div className={styles.bodyText}>Accent small:</div>
    <p className={styles.accentSmall}>01</p>
    <br/>
    <div className={styles.bodyText}>Accent:</div>
    <p className={styles.accent}>2020</p>
    <br/>
    <div className={styles.bodyText}>Accent large:</div>
    <p className={styles.accentLarge}>21</p>
  </Container>
)
