import Image from 'next/image'
import React from 'react'

type Props = {
  url: string,
  name: string,
}

const AddressHotelCard = (props: Props) => {
  return (
    <div className="relative flex-1 ">
        <img src={props.url} alt="" className="object-fill w-full h-[270px] rounded-lg cursor-pointer"/>
        <p className="absolute flex items-center justify-center gap-2 text-2xl font-medium text-white top-5 left-5">
            {props.name}
            <Image src={'/Flag.png'} alt={''} width={25} height={15}/>
        </p>
        <div className="bg-[#FF8001] text-xs font-serif flex flex-col items-end p-1 absolute bottom-5 right-5">
            <p>Ưu đãi bắt đầu từ</p>
            <p className="text-sm">€ 5,62</p>
        </div>
    </div>
  )
}

export default AddressHotelCard