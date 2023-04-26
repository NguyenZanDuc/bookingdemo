import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'

type Props = {}

const index = (props: Props) => {
  return (
    <div className="relative z-0 w-full ">
        <img src='/heroImage.jpeg' alt='hero' className="object-contain lg:object-fill brightness-50"/>
        <div className="absolute flex flex-col justify-center gap-5 text-white top-1/2 left-20">
            <p className="text-5xl font-medium">Vi vu theo cách của bạn</p>
            <p className="text-lg font-light">Tiết kiệm ít nhất 15% cho lưu trú toàn cầu, từ nghỉ dưỡng đến phiêu lưu hoang dã</p>
            <div>
                <Button variant="contained" color="primary"   ><p className="text-xs lg:text-lg">Tìm Ưu Đãi Mùa Du Lịch</p></Button>
            </div>
        </div>
        <div className="absolute flex justify-center w-full -translate-y-5 top-full">
            <SearchBar />
        </div>
    </div>
  )
}

export default index