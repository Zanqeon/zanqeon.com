const mapPhotos = (items) => {
  return items.reduce((photos, photo) => {
    return [
      ...photos,
      {
        slug: photo.fields.slug
      }
    ]
  }, [])
}

export default function mapCategoryInfo (data) {
  return {
    id: data.pageData.sys.id,
    type: data.pageData.sys.contentType.sys.id,
    category: data.pageData.fields.title,
    categorySlug: data.pageData.fields.slug,
    photos: mapPhotos(data.pageData.fields.photos)
  }
}
