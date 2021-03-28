import React from 'react'
import PropTypes from 'prop-types'

export default function Country ({
  fill,
  name,
  onMouseEnter,
  onMouseLeave,
  path,
  transform
}) {
  const handleMouseEnter = () => onMouseEnter(name)
  const handleMouseLeave = () => onMouseLeave()

  return (
    <path
      name={name}
      fill={fill}
      stroke="#222"
      strokeLinejoin="round"
      strokeWidth="1.089"
      fillRule="evenodd"
      d={path}
      transform={transform}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

Country.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  transform: PropTypes.string,
  fill: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}
