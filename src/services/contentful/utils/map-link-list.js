export default function mapLinkList (data) {
  if (!data) return null

  return data.fields.links.map(item => ({
    label: item.fields.label,
    href: item.fields.href,
    colorType: item.fields.color.toLowerCase()
  }))
}
