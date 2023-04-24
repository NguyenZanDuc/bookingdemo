import { Button } from '@mui/material'
import React from 'react'
import { IoBedOutline } from 'react-icons/io5'
import Schedule from '../svg/Schedule'
import { AiOutlineUser } from 'react-icons/ai'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className="text-black  lg:w-[80%] w-full  hidden lg:flex justify-center bg-[#c79300] gap-1 p-1 ">
        <div className="flex-1 px-2 py-3 bg-white">
            <div className="flex justify-center gap-2 items-center border-[3px] border-transparent hover:border-[#003A62] p-1 text-white rounded-sm">
                <IoBedOutline className="w-6 h-6 text-black "/>
                <input type="text" placeholder="Bạn muốn đến đâu" className="w-full text-sm font-medium text-black bg-white outline-none"/>
            </div>
        </div>
        <div className="flex-1 px-2 py-3 bg-white">
            <div className="flex justify-center gap-2 items-center border-[3px] border-transparent hover:border-[#003A62] p-1 text-white rounded-sm">
                <Schedule/>
                <input type="text" placeholder={"T4, 26 tháng 4 - T5, 27 tháng 4"} className="w-full text-sm font-medium text-black bg-white outline-none"/>
            </div>
        </div>
        <div className="flex-1 px-2 py-3 bg-white">
            <div className="flex justify-center gap-2 items-center border-[3px] border-transparent hover:border-[#003A62] p-1 text-white rounded-sm">
                <AiOutlineUser className="w-6 h-6 text-black " />
                <input type="text" placeholder="2 người lớn - 0 trẻ em - 1 phòng" className="w-full text-sm font-medium text-black bg-white outline-none"/>
            </div>
        </div>
        <div>
            <Button className="w-full h-full " variant="contained">
                Tìm
            </Button>
        </div>
    </div>
  )
}

export default SearchBar