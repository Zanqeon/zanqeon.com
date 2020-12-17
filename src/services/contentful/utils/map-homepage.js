
export function mapHomepage (data) {
  return {
    id: data.sys.id,
    type: data.sys.contentType.sys.id,
    title: data.fields.title
  }
}
