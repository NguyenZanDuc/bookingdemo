import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    title: string,
    detail: string[]
}

const HotelCityCard = ({image, title, detail}: Props) => {
  return (
    <div className="flex flex-col items-start flex-1 h-auto gap-2 pb-2 ">
        <div className="w-full">
            <img src={image} alt="" className="object-fill w-full rounded-lg"/>
        </div>
        <p className="px-2 text-base font-semibold ">{title}</p>
        {detail&&detail.map((detail, index)=>(
            <p  key={index} className="px-2 text-sm font-normal text-gray-600">{detail}</p>
        ))}
    </div>
  )
}

export default HotelCityCard