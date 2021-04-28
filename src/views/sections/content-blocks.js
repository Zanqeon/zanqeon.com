import React from 'react'
import PropTypes from 'prop-types'
import LogoSection from 'sections/logo-section'
import RichTextSection from 'sections/rich-text-section'
import ContactSection from 'sections/contact-section'
import PhotoListSection from 'sections/photo-list-section'
import WorldMapSection from 'sections/world-map-section'
import TitleSection from 'sections/title-section'
import { InView } from 'react-intersection-observer'

function ContentBlockSection ({ data, countriesData }) {
  switch (data.type) {
    case 'logoBlock':
      return <LogoSection {...data} />
    case 'richTextBlock':
      return <RichTextSection {...data} />
    case 'contactBlock':
      return <ContactSection {...data} />
    case 'photoListSection':
      return <PhotoListSection {...data} />
    case 'worldMapSection':
      return <WorldMapSection countries={countriesData} {...data} />
    case 'titleSection':
      return <TitleSection {...data} />
    default:
      return null
  }
}

ContentBlockSection.propTypes = {
  data: PropTypes.object,
  pageCategory: PropTypes.string,
  countriesData: PropTypes.array
}

const handleOnChange = (data) => {
  if (data.onChangeInView) {
    data.onChangeInView(data.id)
  }
}

export default function ContentBlocksSectionView ({ contentBlocks, countriesData }) {
  return contentBlocks.map(data => {
    return (
      <InView as="div" onChange={(inView) => inView && handleOnChange(data)} key={data.id} {...data.options}>
        <ContentBlockSection data={data} countriesData={countriesData} />
      </InView>
    )
  })
}

ContentBlocksSectionView.propTypes = {
  contentBlocks: PropTypes.array,
  pageCategory: PropTypes.string
}
