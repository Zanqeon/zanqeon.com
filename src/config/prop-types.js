import PropTypes from 'prop-types'

export const country = PropTypes.shape({
  name: PropTypes.string,
  path: PropTypes.string,
  transform: PropTypes.string,
  yearsVisited: PropTypes.arrayOf(PropTypes.number),
  home: PropTypes.bool
})
