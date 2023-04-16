import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    title: string,
    detail: string[]
}

const HotelCityCard = ({image, title, detail}: Props) => {
  return (
    <div className="flex flex-col items-start flex-1 gap-2">
        <div className="w-full">
            <img src={image} alt="" className="object-fill w-full"/>
        </div>
        {/* <Image src={'https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o='} alt={''} width={170} height={140} className="rounded-sm "/> */}
        <p className="text-base font-semibold">{title}</p>
        {detail&&detail.map((detail, index)=>(
            <p  key={index} className="text-xs font-light text-gray-600">{detail}</p>
        ))}
    </div>
  )
}

export default HotelCityCard