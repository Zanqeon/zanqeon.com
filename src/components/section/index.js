import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import classNames from 'classnames'
import styles from './index.module.scss'

export default function Section ({
  isInner,
  isMiddle,
  isOuter,
  hasBackground,
  children
}) {
  const sectionClassName = classNames(styles.section, {
    [styles.sectionBackground]: hasBackground,
    [styles.middleSection]: isMiddle,
    [styles.innerSection]: isInner,
    [styles.outerSection]: isOuter
  })

  return (
    <Layout.Container>
      <section className={sectionClassName}>
        <div className={styles.content}>
          {children}
        </div>
      </section>
    </Layout.Container>
  )
}

Section.propTypes = {
  isInner: PropTypes.bool,
  isMiddle: PropTypes.bool,
  isOuter: PropTypes.bool,
  hasBackground: PropTypes.bool,
  children: PropTypes.node
}

Section.defaultProps = {
  isInner: false,
  isMiddle: false,
  isOuter: false,
  hasBackground: false
}
