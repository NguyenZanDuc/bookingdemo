import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { FcPrevious } from 'react-icons/fc'

type Props = {}

const owner = (props: Props) => {
  return (
    <div className="min-h-screen px-32 py-10 bg-[#F9F9FA]">
        <div className="w-[500px] flex flex-col gap-5">
            <p>Quý vị định đăng bao nhiêu khách sạn?</p>
            <div className="flex flex-col w-full gap-5 p-4 bg-white">
                <div className="relative flex items-start gap-5 p-5 border-[3px]   border-[#0171C2]">
                    <Image src={'/host/nha.png'} alt={''}  width={50} height={50}/>
                    <p className="text-sm">Một hotel với 1 hay nhiều phòng mà khách có thể đặt</p>
                    <BsFillCheckCircleFill className="absolute top-0 right-0 z-10 w-5 h-5 translate-x-1/2 -translate-y-1/2 text-[#0171C2] bg-white"/>
                </div>
                <div className=" flex items-start gap-5 p-5 border-[0.4px]  border-gray-300">
                    <Image src={'/host/nha.png'} alt={''}  width={50} height={50}/>
                    <p className="text-sm">Một hotel với 1 hay nhiều phòng mà khách có thể đặt</p>
                </div>
            </div>
            <div className="flex gap-4 py-5">
                    <button className="flex justify-center items-center basis-1/6 py-4 border-[1px] border-[#1375C4] rounded-sm">
                        <a href="">
                            <FcPrevious />
                        </a>
                    </button>
                    <button className="text-sm font-bold flex justify-center items-center text-white flex-1 bg-[#1375C4] rounded-sm">
                        <a href="/become-a-host/feedback">
                            Tiếp tục
                        </a>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default owner