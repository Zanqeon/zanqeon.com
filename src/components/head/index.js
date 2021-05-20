import React from 'react'
import PropTypes from 'prop-types'
import NextHead from 'next/head'
import { CONTENT_TYPES } from 'services/contentful/constants'

export default function Head ({
  title,
  description,
  image,
  pageType
}) {
  const isBlog = pageType === CONTENT_TYPES.PHOTOPAGE

  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'WebPage',
    name: title,
    description: description
  }

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="Description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      {image && (
        <meta property="og:image" content={`${image.src}?w=600&q=80`} />
      )}
      {isBlog && (
        <meta property="og:type" content="article" />
      )}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </NextHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  pageType: PropTypes.string
}
