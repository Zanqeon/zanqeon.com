import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function RoleList ({
  roles
}) {
  return (
    <ul>
      {roles.map(role => (
        <li key={role} className={styles.item}>
          <h2 className={styles.role}>{role}</h2>
        </li>
      ))}
    </ul>
  )
}

RoleList.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string)
}

RoleList.defaultProps = {
  roles: []
}
