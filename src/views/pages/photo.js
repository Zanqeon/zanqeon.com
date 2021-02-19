import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function PhotoPageView ({
  title
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
    </>
  )
}

PhotoPageView.propTypes = {
  title: PropTypes.string
}
