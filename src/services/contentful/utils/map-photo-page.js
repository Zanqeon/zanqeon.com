import mapImage from 'services/contentful/utils/map-image'

export default function mapPhotoPage (data) {
  const mapDate = (dateString) => {
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
    image: mapImage(data.fields.photograph),
    location: {
      text: data.fields.locationText,
      href: data.fields.locationLink
    },
    aspectRatio: data.fields.aspectRatio,
    coordinates: data.fields.coordinates,
    date: mapDate(data.fields.date),
    iso: data.fields.iso,
    aperture: data.fields.aperture,
    shutterSpeed: data.fields.shutterSpeed,
    description: data.fields.description
  }
}
