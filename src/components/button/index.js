import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.module.scss'

export default function Button ({
  label,
  isDisabled
}) {
  const className = classNames([ styles.button, {
    [styles.disabled]: isDisabled
  }])
  return (
    <button className={className}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  isDisabled: PropTypes.bool
}

Button.defaultProps = {
  label: '',
  isDisabled: false
}
