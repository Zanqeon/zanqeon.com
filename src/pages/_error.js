import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorPage ({ statusCode, message }) {
  return (
    <>
      <h1>{statusCode}</h1>
      <p>{message}</p>
    </>
  )
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
  message: PropTypes.string
}

ErrorPage.defaultProps = {
  statusCode: 500,
  message: 'whoops, something went wrong..'
}
