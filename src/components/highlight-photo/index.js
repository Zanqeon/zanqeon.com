import React from 'react'
import * as defaultPropTypes from 'config/prop-types'
import Link from 'next/link'
import styles from './index.module.scss'
import Layout from 'components/layout'
import classNames from 'classnames'
import BlurHashPhoto from 'components/blurhash-photo'
import Image from 'next/image'

export default function HighlightPhoto ({
  image,
  aspectRatio,
  link,
  isReversed
}) {
  const splitLabel = link.label.split(' ')

  const containerClassName = classNames({
    [styles.containerReversed]: isReversed
  })
  return (
    <div className={containerClassName}>
      <Layout.Row isReversed={isReversed}>
        <Layout.Column columns="xs:10 sm:9 md:8" offset={isReversed ? 'xs:2 sm:3 md:0 lg:1' : 'md:1'}>
          <Link href={`/${link.href}`}>
            <a>
              <div className={styles.imageContainer}>
                <BlurHashPhoto
                  hasAnimatedHover
                  image={image}
                  aspectRatio={aspectRatio}
                  isLazyLoading
                  isHighQuality
                  sizes="
                        (max-width: 400px) 350px,
                        (max-width: 800px) 600px,
                        (max-width: 1200px) 900px,
                        1000px
                        "
                />
              </div>
            </a>
          </Link>
        </Layout.Column>
        <Layout.Column columns="xs:9 md:3 lg:2" offset={isReversed ? 'xs:3 sm:4 md:0' : 'xs:1 md:0 lg:1'}>
          <div className={styles.textLinkContainer}>
            <Link href={`/${link.href}`}>
              <a className={styles.textLink}>
                <div className={styles.labelContainer}>
                  {splitLabel.map(word => (
                    <div className={styles.label} key={word}>
                      {word}
                    </div>
                  ))}
                </div>
              </a>
            </Link>
          </div>
        </Layout.Column>
      </Layout.Row>
    </div>
  )
}

HighlightPhoto.propTypes = defaultPropTypes.highlightPhoto

HighlightPhoto.defaultProps = {
  aspectRatio: '2/3',
  link: {
    href: '/',
    label: ''
  },
  isReversed: false
}
