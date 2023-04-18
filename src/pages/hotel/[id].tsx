
import Covid19Help from '@/components/General/Covid19Help';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link'
import React, { useEffect, useRef, useState } from 'react'
import { GrNext } from 'react-icons/gr';
import { IoBedOutline, IoPricetagOutline } from 'react-icons/io5';
import SearchAround from '@/components/SearchAround/index'
import { Rating } from '@mui/material';
import ListImage from '@/components/ui/Image/ListImage/Index'
import { AiFillLike } from 'react-icons/ai';
import Beach from '@/components/svg/Beach';
import LeafSvg from '@/components/svg/LeafSvg';
import UtilityChip from '@/components/ui/Chip/UtilityChip';
import SwimmingPool from '@/components/svg/Utility/SwimmingPool';
import Image from 'next/image';
import { CiLocationOn, CiParking1 } from 'react-icons/ci';
import RoomTable from '@/components/ui/Table/RoomTable';

import { useScroll } from "framer-motion"

type Props = {}

const Index = (props: Props) => {
    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Trang chủ
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Việt Nam
        </Link>,<Link
            underline="hover"
            key="2"
            color="inherit"
            href="/search?category=Thành%20Phố%20Đà%20Nẵng"
            onClick={handleClick}
        >
            Thành phố Đà Nẵng
        </Link>,<Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Đà Nẵng
        </Link>
    ]
   
  return (
    <div  className='flex flex-col w-[1150px] items-center justify-start  px-4 py-4  mx-auto'>
         <div className="self-start">
                <Breadcrumbs
                separator={<GrNext />}
                aria-label="breadcrumb"
                className="text-xs text-blue-500"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </div>
        <Covid19Help />
        <div className="flex w-full gap-2 py-6">
            <div className="flex flex-col w-auto gap-2">
                <button className="text-sm c font-medium text-[#0171C2] cursor-pointer px-4 py-2 text-center bg-[#EAF3FF] flex justify-center gap-2"><IoPricetagOutline className="w-4 h-4"/>Chúng Tôi Luôn Khớp Giá!</button>
                <SearchAround />
            </div>
            <div className="flex flex-col flex-1 gap-3">
                <div className="flex gap-2">
                    <button className="text-sm font-medium text-[#0171C2]  cursor-pointer px-4 py-2 text-center bg-[#EAF3FF] flex justify-center gap-2">Thông tin & giá</button>
                    <button className="text-sm font-medium text-[#0171C2]  cursor-pointer px-4 py-2 text-center bg-[#EAF3FF] flex justify-center gap-2">Tiện nghi</button>
                    <button className="text-sm font-medium text-[#0171C2]  cursor-pointer px-4 py-2 text-center bg-[#EAF3FF] flex justify-center gap-2">Quy tắc chung</button>
                    <button className="text-sm font-medium text-[#0171C2]  cursor-pointer px-4 py-2 text-center bg-[#EAF3FF] flex justify-center gap-2">Ghi chú</button>
                    <button className="text-sm font-medium text-[#0171C2]  cursor-pointer px-4 py-2 text-center bg-[#EAF3FF] flex justify-center gap-2">Đánh giá của khách (1.239)</button>
                </div>
                <div className="flex items-center justify-start gap-1">
                    <span className="text-xs p-1 rounded-sm text-white font-medium bg-[#7F7F7F]">Khách sạn</span>
                    <Rating value={4} size='small' />
                    <AiFillLike className="bg-[#FEBB00] text-white w-6 h-6 p-[2px] rounded-sm"/>
                    <div className="flex text-xs bg-[#E4F3FF] p-1 font-light">
                        <Beach />
                        <p>Giáp biển</p>
                    </div>
                    <span className="text-xs font-light p-1 rounded-sm text-black  bg-[#F2F2F2]">Xe đưa đón sân bay</span>
                </div>
                <button className="bg-[#E7FCE8] text-[#00800A] w-[180px] p-1 flex text-xs gap-1">
                    <LeafSvg />
                    <p>Chỗ nghỉ Du lịch Bền vững</p>
                </button>             
                <p className="text-2xl font-bold ">Sala Danang Beach Hotel</p>
                <div>
                    <p className="text-sm "> 36-38 Lam Hoanh Street, Phuoc My, Son Tra, Đà Nẵng, Việt Nam – Vị trí xuất sắc - hiển thị bản đồ</p>
                </div>
                <div>
                    <ListImage/>
                </div>
            </div>

        </div>
        <div className="flex gap-10 border-b-[0.4px] border-gray-300 pb-10">
            {/*  */}
            <div className="flex flex-col items-start flex-1 gap-3 text-sm ">
                <p className="font-bold">Bạn đủ điều kiện nhận giảm giá Genius tại Sala Danang Beach Hotel! Để tiết kiệm tại chỗ nghỉ này, bạn chỉ cần đăng nhập.</p>
                <p>Tọa lạc tại thành phố Đà Nẵng, cách Bãi biển Mỹ Khê 1,6 km, Sala Danang Beach Hotel cung cấp chỗ nghỉ với xe đạp cho khách sử dụng miễn phí, chỗ đỗ xe riêng miễn phí, hồ bơi ngoài trời và trung tâm thể dục. Trong số các tiện nghi của chỗ nghỉ này có nhà hàng, CLB trẻ em, dịch vụ đưa đón miễn phí và WiFi miễn phí trong toàn bộ khuôn viên. Tại đây cũng có sân hiên, quầy bar trong khuôn viên và sảnh khách chung.</p>
                <p>Mỗi phòng nghỉ tại Sala Danang Beach Hotel đều có máy điều hòa, khu vực ghế ngồi, TV truyền hình cáp màn hình phẳng, két an toàn, ấm đun nước và phòng tắm riêng đi kèm vòi xịt/chậu rửa vệ sinh, đồ vệ sinh cá nhân miễn phí cùng máy sấy tóc. Một số phòng được bố trí khu vực bếp ăn với tủ lạnh, lò vi sóng và bếp nấu. Các phòng được trang bị ga trải giường và khăn tắm.</p>
                <p>Chỗ nghỉ phục vụ bữa sáng buffet, bữa sáng kiểu lục địa hoặc bữa sáng kiểu Mỹ.</p>
                <p>Đội ngũ nhân viên lễ tân giao tiếp bằng cả tiếng Anh và tiếng Việt có thể hỗ trợ du khách suốt 24/24.</p>
                <p>Chỗ nghỉ nằm cách Bãi biển Bắc Mỹ An 2,1 km và Cầu khóa Tình yêu 2 km. Sân bay gần nhất là sân bay quốc tế Đà Nẵng, nằm trong bán kính 5 km từ Sala Danang Beach Hotel.</p>
                <p>Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,3 cho kỳ nghỉ dành cho 2 người.</p>
                <p>Sala Danang Beach Hotel đã chào đón khách Booking.com từ 23 tháng 4 2019.</p>
                <p className="font-bold">Các tiện nghi được ưa chuộng nhất</p>
                <div className="flex flex-wrap gap-5">
                    <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                    <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                     <UtilityChip >
                        <SwimmingPool color='#00800A' className="w-5 h-5"/>
                        <p className="text-[13px]">5 hồ bơi</p>
                    </UtilityChip>
                </div>
                
            </div>
            <div className='w-[315px] '>
                <div className="flex items-center justify-center w-full py-3 mb-6 bg-white border-[0.4px]  border-gray-400">
                    <Image src={'/hyatt.png'} alt={''} width={60} height={60}/> 
                </div>
                <div className="p-4 bg-[#E4F3FF] text-[13px] flex flex-col gap-3">
                    <p className="text-base font-semibold ">Điểm nổi bật của chỗ nghỉ</p>
                    <p className="text-sm font-semibold">Hoàn hảo cho kỳ nghỉ 1 đêm!</p>
                    <div>
                        <div className="flex items-start gap-3">
                            <CiLocationOn className="w-10 h-10"/>
                            <p>Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,4 điểm)</p>
                        </div>
                        <div className="flex items-start justify-start gap-3 ">
                            <IoBedOutline className="w-10 h-10"/>
                            <p>Bạn muốn có một giấc ngủ thật ngon? Chỗ nghỉ này được đánh giá cao nhờ những chiếc giường thoải mái.</p>
                        </div>
                    </div>
                    <p className="text-sm font-semibold">Thông tin về bữa sáng</p>
                    <p>Kiểu lục địa, Kiểu Mỹ, Tự chọn</p>
                    <p className="text-sm font-semibold">Các lựa chọn với:</p>
                    <div>
                        <div className="flex gap-3">
                            <SwimmingPool color='#000' className="w-4 h-4"/>
                            <p>Nhìn ra biển</p>
                        </div>
                        <div className="flex gap-3">
                            <SwimmingPool color='#000' className="w-4 h-4"/>
                            <p>Nhìn ra biển</p>
                        </div>
                        <div className="flex gap-3">
                            <SwimmingPool color='#000' className="w-4 h-4"/>
                            <p>Nhìn ra biển</p>
                        </div>
                        <div className="flex gap-3">
                            <SwimmingPool color='#000' className="w-4 h-4"/>
                            <p>Nhìn ra biển</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                            <CiParking1 color='#000' className="w-6 h-6"/>
                            <p>Có chỗ đậu xe riêng miễn phí trong khuôn viên</p>
                    </div>
                    <p className="text-sm font-semibold">Hoạt động:</p>
                    <div>
                        <p>Sân tennis</p>
                        <p>Trung tâm thể dục</p>
                        <p>Sân gôn (trong vòng 3km)</p>
                    </div>
                    <button className="text-sm font-semibold text-white py-2 bg-[#00487A] rounded-sm">
                        Đặt ngay
                    </button>
                </div>
            </div>
        </div>
        <div>
            <RoomTable />
        </div>
        
    </div>
  )
}

export default Index