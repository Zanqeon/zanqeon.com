import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import RichText from 'components/rich-text'
import { Container } from 'components/layout'

export default function HomePageView ({
  title,
  richText,
  roleList
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Container>
        <h1>{title}</h1>
        <RichText>{richText}</RichText>
        <h2>{roleList}</h2>
      </Container>
    </>
  )
}

HomePageView.propTypes = {}

HomePageView.defaultProps = {}
