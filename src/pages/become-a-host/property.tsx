import CardPropertyOption from '@/components/BecomeAHostPage/Property/CardPropertyOption'
import { Container } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'
import {FcPrevious} from 'react-icons/fc'

type Props = {}

const property = (props: Props) => {
    const [select, setSelect] = useState("");
  return ( 
        <div className=" bg-[#F9F9FA]">
            <Container className="min-h-screen pt-12">
                <p className="text-lg">Chỗ nghỉ nào trong danh sách dưới đây giống với chỗ nghỉ của Quý vị nhất?</p>
                <div className="grid grid-cols-3 gap-4 p-4 m-4 bg-white">
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'nha'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'cya'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'nass'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'naass'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'nasaaas'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'naasss'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'naseqw s'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'naddqss'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'naswqws'} onChange={setSelect} />
                    <CardPropertyOption selection={select} className="w-[300px] h-[150px]" option={'naadqwqss'} onChange={setSelect} />
                    <div className="h-[150px] w-[300px] border-[0.5px] border-gray-300 flex justify-center items-center gap-2 text-[#1375C4] hover:bg-[#F2F7FB]">
                        <MdExpandMore className="w-6 h-6"/>
                        <p>Thêm lựa chọn</p>
                    </div>
                </div>
                <div className="border-b-[0.3px] border-gray-300 py-4">
                    <button className="text-[#1375C4] flex gap-2 hover:bg-[#ECF1F6] items-center p-2">
                        <AiOutlineQuestionCircle className=""/>
                        <p>Tôi không thấy loại chỗ nghỉ của tôi trong danh sách</p>
                    </button>
                </div>
                <div className="flex gap-4 py-5">
                    <button className="flex justify-center items-center px-16 py-4 border-[1px] border-[#1375C4] rounded-sm">
                        <a href="">
                            <FcPrevious />
                        </a>
                    </button>
                    <button className="text-sm font-bold flex justify-center items-center text-white flex-1 bg-[#1375C4] rounded-sm">
                        <a href="">
                            Tiếp tục
                        </a>
                    </button>
                </div>
            </Container>
        </div>
  )
}

export default property