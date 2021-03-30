import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { BlurhashCanvas } from 'react-blurhash'
import styles from './index.module.scss'

export default function BlurHashPhoto ({
  image,
  aspectRatio,
  hasNegativeZIndex
}) {
  const [ height, width ] = aspectRatio.split('/')
  const backgroundColor = image.blurHash ? 'none' : '#f4f6f6'
  const zIndex = hasNegativeZIndex ? '-1' : ''

  return (
    /* Using paddingTop to prevent layout shift when photo is loaded in. */
    <div className={styles.imageContainer} style={{ paddingTop: `min(calc(100% * ${aspectRatio}))`, backgroundColor: `${backgroundColor}`, zIndex: `${zIndex}` }}>
      {image?.blurHash?.length > 6 && (
        <BlurhashCanvas
          className={styles.blurhash}
          hash={image.blurHash}
          width={100 * width}
          height={100 * height}
          punch={1}
        />
      )}
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
      />
    </div>
  )
}

BlurHashPhoto.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    blurHash: PropTypes.string
  }),
  aspectRatio: PropTypes.string,
  hasNegativeZIndex: PropTypes.bool
}

BlurHashPhoto.defaultProps = {
  aspectRatio: '2/3',
  hasNegativeZIndex: false
}
