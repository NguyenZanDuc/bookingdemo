import Image from 'next/image'
import React from 'react'

type Props = {}

const HistorySearchCard = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 p-3 rounded-lg shadow-sm shadow-gray-400 w-[360px] h-[100px] cursor-pointer">
       <Image src={'/imageHistorySearchCard.png'} alt={''} width={64} height={64} className="rounded-lg"/>
        <div className="flex flex-col items-start gap-1">
            <p className="text-sm font-bold">Đà Nẵng</p>
            <p className="text-sm font-light text-gray-500">26 tháng 4-27 tháng 4, 2 người</p>
        </div>
    </div>
  )
}

export default HistorySearchCard