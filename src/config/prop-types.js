import PropTypes from 'prop-types'

export const country = PropTypes.shape({
  name: PropTypes.string,
  path: PropTypes.string,
  transform: PropTypes.string,
  yearsVisited: PropTypes.arrayOf(PropTypes.number),
  home: PropTypes.bool
})

export const highlightPhoto = PropTypes.shape({
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  aspectRatio: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string
  }),
  isReversed: PropTypes.bool
})
