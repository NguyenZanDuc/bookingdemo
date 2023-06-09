import React from 'react'
import SvgProps from './type'



const StartSvg = ({className, color}: SvgProps) => {
  return (
    <svg className={className} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M93.94 79.48a4 4 0 0 1-2.83-1.17L80.27 67.47a4.002 4.002 0 1 1 5.66-5.66l7.58 7.58L107 51.4a4 4 0 1 1 6.4 4.8L97.14 77.88a4 4 0 0 1-2.92 1.59zM128 63.5C128 46.103 113.897 32 96.5 32S65 46.103 65 63.5 79.103 95 96.5 95c17.39-.016 31.483-14.11 31.5-31.5zm-8 0C120 76.479 109.479 87 96.5 87S73 76.479 73 63.5 83.521 40 96.5 40c12.974.011 23.489 10.526 23.5 23.5zm-60.75-16a4 4 0 0 0 -4-4H4a4 4 0 0 0 0 8h51.25a4 4 0 0 0 4-3.98zm0 17.06a4 4 0 0 0-4-4h-35a4 4 0 0 0 0 8h35a4 4 0 0 0 4-3.98zm0 18.09a4 4 0 0 0-4-4H38a4 4 0 0 0 0 8h17.25a4 4 0 0 0 4-3.98z"></path></svg>
  )
}

export default StartSvg