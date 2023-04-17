import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {CiLocationOn} from 'react-icons/ci'

type Props = {}

const CardSearchMore = (props: Props) => {
  return (
    <div className="flex flex-col rounded-sm w-[150] shadow-xl">
        <Image src={'/villaDaNang.jpeg'} alt={''} height={180} width={170}/>
        <div className="flex flex-col gap-2 p-2">
            <div className="flex justify-start gap-2">
                <p className="text-xs">Biệt thự</p>
                <Rating value={4} readOnly size='small'/>
            </div>
            <p className="text-xl w-[150px] font-medium truncate">Vila Da Nang Remmmmm</p>
            <p className="text-sm text-gray-500">8,6 Tuyệt vời</p>
            <div className="flex justify-start gap-2 text-sm text-gray-500">
                <CiLocationOn/>
                <p>5km từ trung tâm</p>
            </div>
            <div >
                <p className="text-xs text-gray-500">Bắt đầu từ</p>
                <p className="text-2xl font-bold">€ 462</p>
            </div>
        </div>
    </div>
  )
}

export default CardSearchMore