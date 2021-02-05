import React from 'react'
import PropTypes from 'prop-types'
import ErrorPage from 'pages/_error'

// Load CSS which will be available on all pages
import 'assets/scss/global.scss'

export default class MyApp extends React.Component {
  static propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
    error: PropTypes.object,
    initialState: PropTypes.object
  }

  render () {
    const { Component, pageProps, error } = this.props

    return (
      error
        ? <ErrorPage {...error} />
        : <Component {...pageProps} />
    )
  }
}
