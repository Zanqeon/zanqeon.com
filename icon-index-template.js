const path = require('path')

module.exports = function indexTemplate (files) {
  const { imports, exports } = files.reduce((obj, file) => {
    const basename = path.basename(file, path.extname(file))
    const exportName = camelize(basename)
    obj.imports.push(`import ${exportName} from './${basename}'`)
    obj.exports.push(`${exportName}`)
    return obj
  }, {
    imports: [],
    exports: []
  })

  return `
${imports.join('\n')}
  
export default {
  ${exports.join(',')}
}
`
}

function camelize (str) {
  return str
    .split('-')
    .map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item)
    .join('')
}
