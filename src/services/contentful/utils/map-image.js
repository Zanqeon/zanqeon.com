// const IMAGE_SIZES = [ 375, 768, 1024, 1440 ]
// const IMAGE_QUALITY = 80

export default function mapImage (data) {
  // TODO: check if srcSet is needed for the next image component
  // const images = IMAGE_SIZES.map(size => `${data.fields.file.url}?w=${size}&q=${IMAGE_QUALITY} ${size}w`)
  return {
    alt: data?.fields?.description,
    src: `https:${data?.fields?.file?.url}`,
    title: data?.fields?.title
    // srcSet: images.join(',')
  }
}
