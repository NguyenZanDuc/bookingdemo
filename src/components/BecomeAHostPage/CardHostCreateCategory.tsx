import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  title: string,
  image: string,
  description: string,
  href?: string,
  className?: string
}


const CardHostCreateCategory = ({title, image, description, href, className}: Props) => {
  const route = useRouter()
  function HandleClick(){
    route.replace(href??"#")
  }
  return (
    <div  className={`flex flex-col items-center w-full h-full cursor-pointer ${className}`} onClick={HandleClick}> 
        <div className="flex flex-col items-center justify-start gap-3">
          <Image src={image} alt={''} width={50} height={50}/>
          <p className="text-lg font-bold">{title}</p>
          <p className="text-xs text-center">{description}</p>
        </div>
        <button className="text-sm w-full mt-auto font-bold text-white py-2 bg-[#00487A]">Đăng chỗ nghỉ</button>

    </div>
  )
}

export default CardHostCreateCategory