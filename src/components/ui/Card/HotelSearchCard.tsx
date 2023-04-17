import Beach from '@/components/svg/Beach'
import LeafSvg from '@/components/svg/LeafSvg'
import LoveSvg from '@/components/svg/LoveSvg'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { GrFormNext } from 'react-icons/gr'

type Props = {}

const HotelSearchCard = (props: Props) => {
    const [save, setSave] = useState(false);
    const ToggleSave =()=>{
        setSave(save=>!save)
    }
  return (
    <div className="flex gap-3 p-3  border-[0.3px] border-gray-500 w-[815px] overflow-hidden">
        <div className="relative">
            <Image src={'/Camcamsuite.webp'} alt={''} height={200} width={200}/>
            <div className="absolute top-3 right-3">
                {save?(<AiTwotoneHeart className="w-6 h-6 text-pink-500 cursor-pointer" onClick={ToggleSave}/>):(<AiOutlineHeart className="w-6 h-6 cursor-pointer" onClick={ToggleSave}/>)}
            </div>
        </div>
        <div className="flex-1 ">
            <div className="flex items-start pb-2">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl text-[#00487A] hover:text-black font-bold px-2">Cam Cam Suite</p>
                    <div className="text-xs ">
                        <span><a href="" className="underline text-[#0171C2] px-2">Bãi biển Mỹ Khê, Đà Nẵng</a></span>
                        <span><a href="" className="underline text-[#0171C2] px-2">Xem trên bản đồ</a></span>
                        <span className="px-2">Cách trung tâm 1,9km</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Beach />
                        <p className="text-xs font-normal">Giáp biển</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LeafSvg />
                        <p className="text-xs font-normal">Chỗ nghỉ Du lịch Bền vững</p>
                    </div>
                    <div>
                        <a href="" className="text-xs font-normal p-1 bg-[#00800A] rounded-sm cursor-pointer text-white ">Ưu Đãi Mùa Du Lịch</a>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1 gap-2">
                    <div className="flex flex-col gap-1">
                        <p className="text-lg font-semibold">Rất tốt</p>
                        <p className="text-xs text-gray-500">5 đánh giá</p>
                    </div>
                    <div className="p-2 bg-[#01357F] rounded-r-md rounded-tl-md">
                        <p className="text-base font-medium text-white">8,4</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-start px-2 gap-4 border-l-[2px] border-gray-300">
                <div className="flex flex-col flex-1 gap-1 text-xs font-normal">
                    <p className="font-semibold">Biệt Thự 4 Phòng Ngủ Có Hồ Bơi Nhìn Ra Biển</p>
                    <p>1 biệt thự nguyên căn • 4 phòng ngủ • 4 phòng khách • 4 phòng tắm • 365m²</p>
                    <p>8 giường (4 giường đôi rất lớn, 4 giường sofa)</p>
                    <p className="font-semibold text-[#00800A]">Miễn Phí hủy phòng • Không cần thanh toán trước</p>
                    <p className="font-normal text-[#00800A]">Bạn có thể hủy sau, nên hãy đặt ngay hôm nay để có giá tốt.</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <p className="text-xs font-normal text-gray-600">1 đêm, 2 người lớn</p>
                    <p className="text-2xl font-medium">€ 5.851</p>
                    <p  className="text-xs font-normal text-gray-600">Đã bao gồm thuế và phí</p>
                    <div className="cursor-pointer p-2 bg-[#00487A] flex justify-center gap-2 items-center rounded-sm text-white text-sm">
                        <button >Xem chỗ trống</button>
                        <GrFormNext />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelSearchCard