import mapLinkList from 'services/contentful/utils/map-link-list'

export default function mapRichTextSection (data) {
  return {
    title: data.title,
    richText: data.text,
    linkList: mapLinkList(data?.linkList)
  }
}
