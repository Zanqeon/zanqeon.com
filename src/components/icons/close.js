import * as React from 'react'

function SvgClose (props) {
  return (
    <svg
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 41c11.046 0 20-8.954 20-20S32.046 1 21 1 1 9.954 1 21s8.954 20 20 20z"
        stroke="#000"
        strokeWidth={1.5}
      />
      <path
        d="M17.479 24.747l7.287-7.267M17.482 17.48l7.287 7.267"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgClose
