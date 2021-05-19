import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ContentBlocksSectionView from 'views/sections/content-blocks'
import ActiveSectionIndicator from 'components/active-section-indicator'

export default function HomePageView ({
  contentBlocks = [],
  countriesData,
  sectionIndicatorList
}) {
  const [ sectionIdInView, setSectionIdInView ] = useState(null)

  const contentBlocksWithIndicators =
    contentBlocks.reduce((contentBlocks, contentBlock) => {
      const indicatorInfo = sectionIndicatorList.find((item) => item.sectionId === contentBlock.id)

      if (indicatorInfo) {
        contentBlocks.push({
          ...contentBlock,
          sectionTitle: indicatorInfo.title,
          onChangeInView: setSectionIdInView,
          options: {
            threshold: indicatorInfo.title === 'gallery' ? 0.4 : 0.25
          }
        })
      } else {
        contentBlocks.push({
          ...contentBlock
        })
      }

      return contentBlocks
    }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ActiveSectionIndicator
        activeSectionId={sectionIdInView}
        sections={sectionIndicatorList}
      />
      <ContentBlocksSectionView
        contentBlocks={contentBlocksWithIndicators}
        countriesData={countriesData}
      />
    </>
  )
}

HomePageView.propTypes = {
  contentBlocks: PropTypes.arrayOf(PropTypes.object),
  countriesData: PropTypes.arrayOf(PropTypes.object),
  sectionIndicatorList: PropTypes.arrayOf(PropTypes.object)
}

HomePageView.defaultProps = {}
