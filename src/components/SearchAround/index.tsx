import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Schedule from '../svg/Schedule'
import { MdExpandMore } from 'react-icons/md'
import { Checkbox } from '@mui/material'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import DatePicker from '@/components/ui/DatePicker/Index'

type Props = {}

const Index = (props: Props) => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="p-4 bg-[#FEBB00] flex flex-col gap-2 items-start justify-start rounded-sm">
            <p className="text-xl font-medium">Tìm</p>
            <div className="flex flex-col items-start gap-[2px] w-full">
                <p className="text-xs">Tên chỗ nghỉ / điểm đến:</p>
                <div className="flex items-center gap-2 bg-white w-[220px]">
                    <BsSearch className="ml-2"/>
                    <input type="text" className="w-full py-2 outline-none placeholder"   placeholder="Bạn muốn đến đâu "/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
                <p className="text-xs">Ngày nhận phòng</p>
                <div className="flex items-center gap-2 px-2 bg-white w-[220px]">
                    <Schedule />
                    <DatePicker/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
                <p className="text-xs">Ngày trả phòng</p>
                <div className="flex items-center gap-2 px-2 bg-white w-[220px]">
                    <Schedule />
                    <DatePicker/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
                <p className="text-xs">Nghỉ 1 đêm</p>
                <div className="flex items-center gap-2 px-2 py-3 bg-white w-[220px]">
                   <p className="text-xs">1 người lớn · 0 trẻ em · 1 phòng</p>
                   <MdExpandMore/>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-end justify-start w-[220px]">
                    <Checkbox />
                    <p className="text-xs ">Căn hộ và nhà nguyên căn</p>
                    <AiOutlineQuestionCircle className="self-center ml-auto"/>
                </div>
                <div className="flex items-end justify-start w-[220px]">
                    <Checkbox />
                    <p className="text-xs ">Tôi đi công tác</p>
                    <AiOutlineQuestionCircle className="self-center ml-auto"/>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="text-xl bg-[#00487A] text-white w-[220px] py-3 rounded-sm">
                    Tìm
                </button>
            </div>
        </div>
  )
}

export default Index