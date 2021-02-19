import React from 'react'
import PropTypes from 'prop-types'
import LogoSection from 'sections/logo-section'
import RichTextSection from 'sections/rich-text-section'
import ContactSection from 'sections/contact-section'
import PhotoListSection from 'sections/photo-list-section'

function ContentBlockSection ({ data }) {
  switch (data.type) {
    case 'logoBlock':
      return <LogoSection {...data} />
    case 'richTextBlock':
      return <RichTextSection {...data} />
    case 'contactBlock':
      return <ContactSection {...data} />
    case 'photoListSection':
      return <PhotoListSection {...data} />
    default:
      return null
  }
}

ContentBlockSection.propTypes = {
  data: PropTypes.object,
  pageCategory: PropTypes.string
}

export default function ContentBlocksSectionView ({ contentBlocks }) {
  return contentBlocks.map(data => <ContentBlockSection data={data} key={data.id} />)
}
ContentBlocksSectionView.propTypes = {
  contentBlocks: PropTypes.array,
  pageCategory: PropTypes.string
}
