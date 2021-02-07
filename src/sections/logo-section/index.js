import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/section'
import Icons from 'components/icons'
import RoleList from 'components/role-list'
import styles from './index.module.scss'

export default function LogoSection ({
  title,
  roles
}) {
  return (
    <Section
      isOuter
      hasBackground
    >
      <h1>
        <Icons.Logo className={styles.logo} />
        <span className={styles.title}>{title}</span>
      </h1>
      <RoleList roles={roles} />
    </Section>
  )
}

LogoSection.propTypes = {
  title: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string)
}

LogoSection.defaultProps = {
  title: 'Zanq Photography',
  roles: []
}
