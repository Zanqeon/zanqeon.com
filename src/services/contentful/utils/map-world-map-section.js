export default function mapWorldMapSection (data) {
  if (!data) return null

  return {
    title: data.title,
    sumTitle: data.sumTitle
  }
}
