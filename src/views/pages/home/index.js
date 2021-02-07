import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import RichText from 'components/rich-text'
import LogoSection from 'sections/logo-section'
import ContactSection from 'sections/contact-section'

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
      <ContactSection />
      <LogoSection
        title={title}
        roles={roleList}
      />
    </>
  )
}

HomePageView.propTypes = {}

HomePageView.defaultProps = {}
