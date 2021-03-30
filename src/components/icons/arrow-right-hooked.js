import * as React from 'react'

function SvgArrowRightHooked (props) {
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
        d="M1 1v10.98h39.216"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <path
        d="M41 11.98l-5.49-5.49M41 11.98l-5.49 5.49"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgArrowRightHooked
