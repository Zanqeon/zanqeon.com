import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/section'
import styles from './index.module.scss'
import RichText from 'components/rich-text'
import LinkList from 'components/link-list'

export default function RichTextSection ({
  title,
  richText,
  linkList
}) {
  return (
    <Section
      isInner
      hasBackground
    >
      <div className={styles.container}>
        {title && (
          <h3 className={styles.title}>{title}</h3>
        )}
        <RichText children={richText} />
        {linkList && (
          <LinkList items={linkList} />
        )}
      </div>
    </Section>
  )
}

RichTextSection.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    colorType: PropTypes.string
  })),
  richText: PropTypes.object,
  title: PropTypes.string
}

RichTextSection.defaultProps = {
  linkList: [],
  richText: {}
}
