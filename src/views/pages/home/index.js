import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function HomePageView ({ data }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <h1>{data.title}</h1>
    </>
  )
}

HomePageView.propTypes = {}

HomePageView.defaultProps = {}
