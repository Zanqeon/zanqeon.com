import mapLogoSection from './map-logo-section'
import mapContactSection from './map-contact-section'
import mapRichTextSection from './map-rich-text-section'
import mapPhotoListsection from './map-photo-list-section'

function mapContentBlock (block, type) {
  const contentBlockMap = {
    logoBlock: mapLogoSection,
    contactBlock: mapContactSection,
    richTextBlock: mapRichTextSection,
    photoListSection: mapPhotoListsection
  }

  if (!contentBlockMap[type]) return null

  return {
    ...contentBlockMap[type](block.fields),
    type,
    id: block.sys.id
  }
}

export default function mapContentBlocks (data) {
  if (data) {
    return data.map(contentBlock => mapContentBlock(contentBlock, contentBlock.sys.contentType?.sys.id)).filter(Boolean)
  }
}
