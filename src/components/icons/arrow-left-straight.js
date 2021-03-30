import * as React from 'react'

function SvgArrowLeftStraight (props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#arrow-left-straight_svg__clip0)"
        stroke="#000"
        strokeLinecap="round"
      >
        <path d="M39.245 6.038H1.51M.755 6.038l5.283 5.283M.755 6.038L6.038.755" />
      </g>
      <defs>
        <clipPath id="arrow-left-straight_svg__clip0">
          <path fill="#fff" d="M0 0h40v12.075H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgArrowLeftStraight
