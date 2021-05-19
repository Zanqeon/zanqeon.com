import mapAspectRatio from 'services/contentful/utils/map-aspect-ratio'
import mapImage from 'services/contentful/utils/map-image'

const getHeightFromAspectRatio = (aspectRatio) => {
  return Number(aspectRatio.split('/')[0])
}

const getWidthFromAspectRatio = (aspectRatio) => {
  return Number(aspectRatio.split('/')[1])
}

const mapPhotos = (items) => {
  return items.reduce((photos, photo) => {
    return [
      ...photos,
      {
        ...mapImage(photo?.fields?.photograph),
        blurHash: photo?.fields?.blurhash,
        slug: photo.fields.slug,
        label: photo.fields.title,
        height: getHeightFromAspectRatio(mapAspectRatio(photo.fields.aspectRatio)) || 2,
        width: getWidthFromAspectRatio(mapAspectRatio(photo.fields.aspectRatio)) || 3
      }
    ]
  }, [])
}

export default function mapCategoryPage (data) {
  return {
    id: data.sys.id,
    type: data.sys.contentType.sys.id,
    title: data.fields.title,
    photos: mapPhotos(data.fields.photos),
    currentPageSlug: data.fields.slug
  }
}
