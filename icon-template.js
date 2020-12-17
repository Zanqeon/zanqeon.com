function template (
  { template },
  opts,
  {
    imports, componentName, jsx, exports
  }
) {
  return template.ast`
    ${imports}
    import PropTypes from 'prop-types'
    import classNames from 'classnames'
    function ${componentName} ({ fill, className: givenClass, ...props }) {
      const className = classNames('c-icon', givenClass)
      return ${jsx}
    }
    
    ${componentName}.defaultProps = {
      fill: ''
    }
    
    ${componentName}.propTypes = {
      className: PropTypes.string,
      fill: PropTypes.string,
    }
    ${exports}
  `
}

module.exports = template
