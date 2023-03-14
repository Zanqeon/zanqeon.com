import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import classNames from 'classnames'

export default function LinkList ({
  items
}) {
  if (!items) return null

  const COLOR_TYPES = {
    INSTAGRAM: 'instagram',
    FACEBOOK: 'facebook',
    LINKEDIN: 'linkedin',
    GITHUB: 'github'
  }

  return (
    <ul>
      {items.map(item => {
        const itemClassName = classNames(styles.link, {
          [styles.linkInstagram]: item.colorType === COLOR_TYPES.INSTAGRAM,
          [styles.linkFacebook]: item.colorType === COLOR_TYPES.FACEBOOK,
          [styles.linkLinkedin]: item.colorType === COLOR_TYPES.LINKEDIN,
          [styles.linkGithub]: item.colorType === COLOR_TYPES.GITHUB
        })

        return (
          <li key={item.label} className={styles.item}>
            <a href={item.href} className={itemClassName} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

LinkList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    colorType: PropTypes.oneOf([ 'instagram', 'facebook', 'linkedin', 'github' ])
  }))
}
