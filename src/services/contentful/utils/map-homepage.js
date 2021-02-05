export function mapHomepage ({
  sys: {
    id,
    contentType: {
      sys: {
        id: type
      } = {}
    } = {}
  } = {},
  fields: {
    title,
    roleList,
    richText
  }
}) {
  return {
    id,
    type,
    title,
    roleList,
    richText
  }
}
