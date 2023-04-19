import React from 'react'
import SvgProps from './type'


const CardSvg = ({className, color}: SvgProps) => {
  return (
    <svg className={className} fill={color} height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M22.5 12v6.75a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75V12zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v13.5A2.25 2.25 0 0 0 2.25 21h19.5A2.25 2.25 0 0 0 24 18.75V12zM.75 9h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm4.5 4.5h8.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5zm0 3h5.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5z"></path></svg>
  )
}

export default CardSvg