export default function mapPhotoPage (data) {
  // TODO: Add mapping for contentful
  return {
    id: data.sys.id,
    type: data.sys.contentType.sys.id,
    title: data.fields.title
  }
}
