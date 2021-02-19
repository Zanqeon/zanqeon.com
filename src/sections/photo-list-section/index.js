import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/section'
import styles from './index.module.scss'
import RichText from 'components/rich-text'
import LinkList from 'components/link-list'
import HighlightPhoto from 'components/highlight-photo'

export default function PhotoListSection ({
  title,
  items
}) {
  return (
    <div>
      <h1>{title}</h1>
      {items.map(item => {
        return (
          <HighlightPhoto
            key={item.link.label}
            image={item.image}
            link={item.link}
            aspectRatio={item.aspectRatio}
          />
        )
      })}
    </div>
  )
}

PhotoListSection.propTypes = {

}

PhotoListSection.defaultProps = {

}
