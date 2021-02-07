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
  const columns = classNames({
    'xs:8': isInner,
    'xs:10': isMiddle,
    'xs:12 md:10': isOuter
  })

  const offset = classNames({
    'xs:2': isInner,
    'xs:1': isMiddle,
    'md:1': isOuter
  })

  const sectionClassName = classNames(styles.section, {
    [styles.sectionBackground]: hasBackground
  })

  return (
    <Layout.Container>
      <Layout.Row>
        <Layout.Column offset={offset} columns={columns}>
          <section className={sectionClassName}>
            {children}
          </section>
        </Layout.Column>
      </Layout.Row>
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
