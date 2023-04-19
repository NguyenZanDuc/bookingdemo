import ChatSvg from '@/components/svg/ChatSvg'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

type Props = {}

const CardAskAndQuestion = (props: Props) => {
  return (
    <div className="border-[0.3px] w-[600px] h-[200px] flex flex-col gap-2 border-gray-300 p-4">
        <div className="flex items-center justify-start gap-4">
            <BiUserCircle className="w-6 h-6"/>
            <p className="font-medium">HELLO - HOTEL CAN RENT MOTORBIKES? HOW MUCH IF SO ?</p>
        </div>
        <div className="flex items-start gap-4 ">
            <ChatSvg/>
            <p className="text-sm">Hello, Thank you for your inquiries. There is a motor rental shop nearby our hotel so you can ask the staff for more detailed information. Best Regards</p>
        </div>
        <p className="mt-auto text-xs text-gray-500">Đã trả lời vào ngày 25 tháng 11 năm 2019</p>
    </div>
  )
}

export default CardAskAndQuestion