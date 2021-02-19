import mapContentBlocks from 'services/contentful/utils/map-content-blocks'

export default function mapHomepage (data) {
  return {
    id: data.sys.id,
    type: data.sys.contentType.sys.id,
    contentBlocks: mapContentBlocks(data.fields.contentBlocks)
  }
}
