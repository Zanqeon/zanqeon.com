import * as React from 'react'

function SvgArrowLeftHooked (props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 42 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M41 17.47V6.49H1.784"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <path
        d="M1 6.49l5.49 5.49M1 6.49L6.49 1"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgArrowLeftHooked
