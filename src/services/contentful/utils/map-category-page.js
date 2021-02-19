import mapImage from 'services/contentful/utils/map-image'

const mapPhotos = (items) => {
  return items.reduce((photos, photo) => {
    return [
      ...photos,
      {
        image: mapImage(photo.fields.photograph),
        slug: {
          href: photo.fields.photograph.fields.slug,
          label: photo.fields.photograph.fields.title
        },
        aspectRatio: photo.fields.photograph.fields.aspectRatio
      }
    ]
  }, [])
}

export default function mapCategoryPage (data) {
  return {
    id: data.sys.id,
    type: data.sys.contentType.sys.id,
    title: data.fields.title,
    photos: mapPhotos(data.fields.photos)
  }
}
