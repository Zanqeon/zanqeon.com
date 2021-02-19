import mapImage from 'services/contentful/utils/map-image'

export default function mapPhotolistSection (data) {
  if (!data) return null

  const mapHighlightPhotos = (items) => {
    return items.reduce((photos, photo) => {
      return [
        ...photos,
        {
          image: mapImage(photo.fields.image),
          link: {
            href: photo.fields.pageLink.fields.slug,
            label: photo.fields.label
          },
          aspectRatio: photo.fields.aspectRatio
        }
      ]
    }, [])
  }

  return {
    title: data.title,
    items: mapHighlightPhotos(data.highlightPhotos)
  }
}
