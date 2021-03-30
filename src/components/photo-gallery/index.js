import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import Link from 'next/link'
import Gallery from 'react-photo-gallery'
import * as defaultPropTypes from 'config/prop-types'
import { BlurhashCanvas } from 'react-blurhash'

function GalleryItem ({
  item,
  margin,
  currentPageSlug
}) {
  return (
    <Link href={`/${currentPageSlug}/${item.slug}`}>
      <a
        className={styles.link}
        style={{
          height: item.height,
          width: item.width,
          margin: margin,
          backgroundColor: item.blurHash ? '' : '#76e0ff'
        }}
      >
        <img
          className={styles.image}
          src={item.src}
          alt={item.alt}
        />
        {item?.blurHash?.length > 6 && (
          <BlurhashCanvas
            className={styles.blurhash}
            hash={item.blurHash}
            width={Math.round(0.05 * item.width)}
            height={Math.round(0.05 * item.height)}
            punch={1}
          />
        )}
      </a>
    </Link>
  )
}

GalleryItem.propTypes = {
  item: PropTypes.object,
  margin: PropTypes.number,
  currentPageSlug: PropTypes.string
}

export default function PhotoGallery ({
  photos,
  currentPageSlug
}) {
  const [ showGallery, setShowGallery ] = useState(false)

  /*
    Set to true when component has mounted,because the container needs to know it's width in order to properly size the images inside.
    This happens on the client side, so we have to wait with rendering the <Gallery> component,because we will receive a useLayoutEffect warning otherwise.
   */
  useEffect(() => {
    setShowGallery(true)
  }, [])

  const config = {
    margin: 2
  }

  const imageRenderer = useCallback(
    ({ photo, margin }) => (
      <GalleryItem
        item={photo}
        margin={margin}
        currentPageSlug={currentPageSlug}
        key={photo.src}
      />
    ),
    []
  )

  // placeholder gallery to show on server side so google can see the data
  if (!showGallery) {
    return (
      <ul className={styles.galleryPlaceholder}>
        {photos.map(photo => {
          return (
            <li key={photo.src}>
              <a href={`/${currentPageSlug}/${photo.slug}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                />
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  if (showGallery) {
    return (
      <div className={styles.container}>
        <Gallery
          photos={photos}
          renderImage={imageRenderer}
          {...config}
        />
      </div>
    )
  }
}

PhotoGallery.propTypes = {
  photos: defaultPropTypes.photos,
  currentPageSlug: PropTypes.string
}
