import mapContentBlocks from 'services/contentful/utils/map-content-blocks'
import mapImage from 'services/contentful/utils/map-image'

export default function mapHomepage (data) {
  return {
    id: data.sys.id,
    type: data.sys.contentType.sys.id,
    contentBlocks: mapContentBlocks(data.fields.contentBlocks),
    metadata: {
      title: data.fields.seoTitle,
      description: data.fields.seoDescription,
      image: mapImage(data?.fields?.socialImage),
      pageType: data?.sys?.contentType?.sys?.id
    }
  }
}
