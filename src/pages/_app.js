import React from 'react'
import PropTypes from 'prop-types'
import ErrorPage from 'pages/_error'

// Load CSS which will be available on all pages
import 'assets/scss/global.scss'

function MyApp ({ Component, pageProps, error }) {
  return (
    error
      ? <ErrorPage {...error} />
      : <Component {...pageProps} />
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  error: PropTypes.object
}

export default MyApp
