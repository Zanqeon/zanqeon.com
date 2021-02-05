import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './index.module.scss'
import PropTypes from 'prop-types'

export default function RichText ({ children, element: Element, ...props }) {
  return (
    <Element className={styles.container} {...props}>
      {documentToReactComponents(children)}
    </Element>
  )
}

RichText.propTypes = {
  children: PropTypes.object, // todo: rich text object, figure out if this already has a proptype in contentful somewhere
  element: PropTypes.string
}

RichText.defaultProps = {
  element: 'div'
}
