export default function mapImage (data) {
  return {
    alt: data?.fields?.description,
    src: `https:${data?.fields?.file?.url}`,
    title: data?.fields?.title
  }
}
