import mapImage from 'services/contentful/utils/map-image'
import mapAspectRatio from 'services/contentful/utils/map-aspect-ratio'

export default function mapPhotoPage (data) {
  const mapDate = (dateString) => {
    if (!dateString) return null

    const date = new Date(Date.parse(dateString))
    const day = date.getUTCDate()
    const month = date.getUTCMonth() + 1 // months from 1-12
    const year = date.getUTCFullYear()

    const getTwoDigitNumber = (number) => {
      return number.toString().length < 2
        ? '0' + number
        : number
    }

    const formattedDate = getTwoDigitNumber(day) + '/' + getTwoDigitNumber(month) + '/' + year

    return formattedDate
  }
  return {
    id: data.sys.id,
    type: data.sys.contentType.sys.id,
    title: data.fields.title,
    image: {
      ...mapImage(data.fields.photograph),
      blurHash: data.fields.blurhash
    },
    photoInfo: {
      coordinates: data.fields.coordinates,
      date: mapDate(data?.fields?.date),
      iso: data.fields.iso,
      aperture: data.fields.aperture,
      shutterSpeed: data.fields.shutterSpeed,
      description: data.fields.description,
      location: {
        label: data.fields.locationText,
        href: data.fields.locationLink
      }
    },
    aspectRatio: mapAspectRatio(data.fields.aspectRatio),
    slug: data.fields.slug,
    metadata: {
      title: data.fields.seoTitle,
      description: data.fields.seoDescription,
      image: mapImage(data?.fields?.photograph),
      pageType: data?.sys?.contentType?.sys?.id
    }
  }
}
