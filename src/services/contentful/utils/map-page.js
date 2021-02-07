export function mapPage (data) {
  return {
    id: data.sys.id,
    slug: data.fields.slug,
    type: data.sys.contentType.sys.id,
    title: data.fields.title
  }
}
