import React from 'react'
import {GrNext} from 'react-icons/gr'

type Props = {}

const NextButton = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-2xl cursor-pointer shadow-black hover:bg-gray-200">
        <GrNext/>
    </div>
  )
}

export default NextButton