import NextButton from '@/components/ui/Button/NextButton'
import CardSearchMore from '@/components/ui/Card/CardSearchMore'
import HotelSearchCard from '@/components/ui/Card/HotelSearchCard'
import React from 'react'
import { MdUnfoldMore } from 'react-icons/md'

type Props = {}

const index = (props: Props) => {
  return (
    <div className="flex flex-col flex-1 gap-4 px-3">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">Đà Nẵng: 16 chỗ nghỉ</p>
          <p className="text-base font-normal text-gray-600">+ 10 chỗ nghỉ quanh Đà Nẵng</p>
          <p className="text-base font-normal"><span className="font-medium">Những bãi biển gần đó:</span><span className="px-2 underline">Bãi biển Mỹ An</span>•<span className="px-2 underline">My Khe Beach</span>•<span className="px-2 underline">Bãi biển Non Nước</span></p>
          <div>
            <button className="rounded-3xl border-[0.5px] border-[#0171C2] hover:bg-[#F2F7FB] text-[#0171C2] p-2 text-sm font-medium flex items-center gap-2">
                <a href="#">Sắp xếp theo: Lựa chọn hàng đầu của chúng tôi </a>
                <MdUnfoldMore />
            </button>
          </div>
        </div>
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <HotelSearchCard />
        <div className="p-4 flex flex-col gap-4 border-[0.5px] border-gray-400">
            <div className="flex justify-between">
              <p className="text-sm font-semibold">Các chỗ nghỉ này cũng sẽ khiến bạn cảm thấy như ở nhà</p>
              <a href="#" className="text-sm font-medium text-[#0171C2]">Hiển thị thêm</a>
            </div>
            <div className="relative flex justify-between">
              <CardSearchMore />
              <CardSearchMore />
              <CardSearchMore />
              <CardSearchMore />
              <div className="absolute right-0 translate-x-5 top-1/2">
                <NextButton />
              </div>
            </div>
        </div>
    </div>
  )
}

export default index