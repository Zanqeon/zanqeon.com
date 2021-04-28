export default function mapSectionIndicatorList (data) {
  return data.pageData.fields.sections.map(section => {
    return {
      sectionId: section.fields.section.sys.id,
      title: section.fields.title
    }
  })
}
