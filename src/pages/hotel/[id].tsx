
import Covid19Help from '@/components/General/Covid19Help';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link'
import React, { useEffect, useRef, useState } from 'react'
import { GrNext } from 'react-icons/gr';
import { IoAddOutline, IoBedOutline, IoPricetagOutline } from 'react-icons/io5';
import SearchAround from '@/components/SearchAround/index'
import { Rating, styled } from '@mui/material';
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
import { BsAlarm } from 'react-icons/bs';
import RateProgess from '@/components/ui/RateProgess/RateProgess';
import CardComment from '@/components/ui/Card/CardComment';
import CardAskAndQuestion from '@/components/ui/Card/CardAskAndQuestion';
import WifiFreeSvg from '@/components/svg/Utility/WifiFreeSvg';
import BathRoomSvg from '@/components/svg/BathRoomSvg';
import { BiCheck } from 'react-icons/bi';
import GetRoomSvg from '@/components/svg/GetRoomSvg';
import TimeBar from '@/components/ui/Bar/TimeBar';
import ChidrenSvg from '@/components/svg/ChidrenSvg';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import LimitAgeSvg from '@/components/svg/LimitAgeSvg';
import CardSvg from '@/components/svg/CardSvg';
import SmokingSvg from '@/components/svg/SmokingSvg';
import SodaSvg from '@/components/svg/SodaSvg';
import PetSvg from '@/components/svg/PetSvg';
import CardSearchMore from '@/components/ui/Card/CardSearchMore';
import NextButton from '@/components/ui/Button/NextButton';
import ListCardByCategory from '@/components/ui/Card/ListCardByCategory';

type Props = {}
type HotelCity ={
    image:string,
    title:string,
    details: string[]
}
const Index = (props: Props) => {
    const cards3:HotelCity[] =[{
        image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
        title:"La Roulotte de Ciney",
        details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
      },{
        image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
        title:"La Roulotte de Ciney",
        details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
      },{
        image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
        title:"La Roulotte de Ciney",
        details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
      },{
        image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
        title:"La Roulotte de Ciney",
        details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
      }]

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
    <div  className='flex flex-col w-[1150px] items-center justify-start gap-4  px-4 py-4  mx-auto'>
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
                <div className="p-4 bg-[#E4F3FF] text-[13px] flex flex-col gap-3 basis-1/4">
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
        <div className="bg-[#F9FCFF] w-full p-2 my-3">
            <p className="text-sm">Sala Danang Beach Hotel có thể sẽ tính thêm những phụ phí chưa được thể hiện phía trên. Hãy xem phần <a className="text-[#5BBAFF] hover:text-[#CD8552] underline">Ghi chú</a>để biết thêm về chỗ nghỉ này.</p>
        </div>
        <div className="w-full flex gap-3 p-3 border-[0.5px] border-[#FBB4B4] bg-[#FFEBEA]">
            <BsAlarm className="text-[#CC0100]"/>
            <p className="text-xs">Nguồn cung giới hạn ở Đà Nẵng trong những ngày bạn chọn: 139 khách sạn 4 sao giống vậy đã không còn chỗ trên trang của chúng tôi</p>
        </div>
        <p className="py-3 text-sm font-bold">Bạn sẽ thanh toán cho khách sạn bằng đồng bản địa của khách sạn (VND). Số tiền hiển thị (theo EUR) chỉ mang tính tương đối và dựa trên tỷ giá hối đoái của ngày hôm nay.</p>
        <div className="w-full border-[0.3px] border-gray-300  px-3 py-5 flex gap-3 items-center">
            <img src="https://q-xx.bstatic.com/data/sustainability/travel_sustainable_badge.svg" alt="" className="w-10 h-10"/>
            <div className="text-sm">
                <p className="text-base font-bold">Chỗ nghỉ Du lịch Bền vững</p>
                <p>Chỗ nghỉ này thuộc chương trình Du lịch Bền vững, có nghĩa là chỗ nghỉ có áp dụng các bước rõ rệt để giúp kỳ lưu trú của bạn trở nên bền vững hơn.</p>
            </div>
            <a href="" className="text-sm text-[#5BBAFF]">Xem thêm</a>
        </div>
        <div className="w-full border-[0.3px] border-gray-300  px-3 py-5 flex gap-3 items-center">
            <img src="https://q-xx.bstatic.com/data/sustainability/travel_sustainable_badge.svg" alt="" className="w-10 h-10"/>
            <div className="text-sm">
                <p className="text-base font-bold">Chỗ nghỉ Du lịch Bền vững</p>
                <p>Chỗ nghỉ này thuộc chương trình Du lịch Bền vững, có nghĩa là chỗ nghỉ có áp dụng các bước rõ rệt để giúp kỳ lưu trú của bạn trở nên bền vững hơn.</p>
            </div>
            <a href="" className="text-sm text-[#5BBAFF]">Xem thêm</a>
        </div>
        <div className="flex flex-col w-full gap-6">
            <p className="text-xl font-bold">Các bãi biển gần nhất</p>
            <div className="flex gap-4">
                <div className="border-[0.4px] border-gray-300 w-[350px] h-[106px] p-4 flex justify-start items-center gap-3">
                    <img src="https://cf.bstatic.com/xdata/images/xphoto/300x200/117201429.jpg?k=efa8302a9afd80f8ef0e5783ef03bbb491b98ea09f441fe5f9df1c1e6d383570&o=" alt=""  className="w-[70px] h-[70px]"/>
                    <div className="flex flex-col">
                        <p className="font-semibold">My Khe Beach</p>
                        <p className="text-sm font-normal text-gray-400">9,0 Bãi biển tuyệt hảo</p>
                        <p className="text-xs">100m từ chỗ nghỉ</p>
                    </div>
                </div>
                <div className="border-[0.4px] border-gray-300 w-[350px] h-[106px] p-4 flex justify-start items-center gap-3">
                    <img src="https://cf.bstatic.com/xdata/images/xphoto/300x200/117201429.jpg?k=efa8302a9afd80f8ef0e5783ef03bbb491b98ea09f441fe5f9df1c1e6d383570&o=" alt=""  className="w-[70px] h-[70px]"/>
                    <div className="flex flex-col">
                        <p className="font-semibold">My Khe Beach</p>
                        <p className="text-sm font-normal text-gray-400">9,0 Bãi biển tuyệt hảo</p>
                        <p className="text-xs">100m từ chỗ nghỉ</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full gap-5">
            <div className="flex justify-between">
                 <p className="text-2xl font-bold">Đánh giá của khách</p>
                 <button className="text-xs rounded-sm p-2 font-bold text-white bg-[#00487A]">Xem phòng trống</button>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-lg p-1 text-white rounded-tl-lg rounded-r-lg bg-[#01357F]">9,0</div>
                <p className="text-base font-medium">Tuyệt hảo · <span className="text-gray-500">1.240 đánh giá</span><a className="text-sm font-normal text-[#0171C2] px-3 hover:underline">Đọc tất cả đánh giá</a></p>
            </div>
            <p className="text-base font-bold">Hạng mục:</p>
            <div className="flex flex-wrap gap-4" >
                <RateProgess title={'Nhân viên phục vụ'}  point={9.4} />
                <RateProgess title={'Nhân viên phục vụ'}  point={8.4} />
                <RateProgess title={'Nhân viên phục vụ'}  point={9.2} />
                <RateProgess title={'Nhân viên phục vụ'} color='#00800A' point={9.4} />
                <RateProgess title={'Nhân viên phục vụ'}  point={9.4} />
                <RateProgess title={'Nhân viên phục vụ'}  point={9.4} />
                <RateProgess title={'Nhân viên phục vụ'} color='#00800A' point={9.4} />
            </div>
        </div>
        <div className="w-full">
            <p className="font-bold ">Chọn chủ đề để đọc đánh giá:</p>
            <div className="flex items-center justify-start gap-2 py-3">
                <div className="p-2 text-sm font-medium flex justify-center gap-2 items-center border-[0.5px] border-black rounded-full">
                    <IoAddOutline />
                    <p>Bữa sáng</p>
                </div>
                <div className="p-2 text-sm font-medium flex justify-center gap-2 items-center border-[0.5px] border-black rounded-full">
                    <IoAddOutline />
                    <p>Tầm nhìn</p>
                </div>
                <div className="p-2 text-sm font-medium flex justify-center gap-2 items-center border-[0.5px] border-black rounded-full">
                    <IoAddOutline />
                    <p>Phòng</p>
                </div>
                <div className="p-2 text-sm font-medium flex justify-center gap-2 items-center border-[0.5px] border-black rounded-full">
                    <IoAddOutline />
                    <p>Hồ bơi</p>
                </div>
                <div className="p-2 text-sm font-medium flex justify-center gap-2 items-center border-[0.5px] border-black rounded-full">
                    <IoAddOutline />
                    <p>Vị trí</p>
                </div>
            </div>
        </div>
        <div className="w-full">
            <p className="py-4 text-sm font-bold">Đọc xem khách yêu thích điều gì nhất:</p>
            <div className="flex flex-wrap gap-4">
                <CardComment />
                <CardComment />
                <CardComment />
            </div>
            <button className="text-[#0171C2] my-6 text-sm font-medium border-[1px] border-[#0171C2] px-2 py-1">
                 Đọc tất cả đánh giá
            </button>
        </div>
        <div className="flex flex-col w-full gap-4">
            <p className="text-2xl font-bold">Hỏi đáp về chỗ nghỉ</p>
            <p className="text-sm text-gray-500">Nếu muốn biết thêm về chỗ nghỉ, bạn có thể xem các câu hỏi của khách</p>
            <p className="text-sm text-[#00800A]">Chỗ nghỉ thường trả lời trong vài ngày</p>
            <div className="flex flex-wrap gap-3">
                <CardAskAndQuestion />
                <CardAskAndQuestion />
                <CardAskAndQuestion />
            </div>
            <div className="flex gap-2">
                <button className="w-[220px] h-[32px] border-[1.5px] rounded-sm text-sm font-medium border-[#0171C2] text-[#0171C2] flex items-center justify-center">Đặt câu hỏi</button>
                <button className="w-[220px] h-[32px] border-[1.5px] rounded-sm text-sm font-medium border-[#0171C2] text-[#0171C2] flex items-center justify-center">Xem thêm câu hỏi (15)</button>
            </div>
        </div>
        <div className="w-full">
            <p className="text-2xl font-bold">Xung quanh khách sạn *</p>
            <div className="flex gap-2">
                <p className="text-xs bg-[#E4F3FF] text-[#345A99] rounded-md">Khách rất thích đi dạo quanh khu vực chỗ nghỉ!</p>
                <a href="" className="text-sm text-[#0171C2] hover:underline">Vị trí xuất sắc - hiển thị bản đồ</a>
            </div>
            <div className="gridtemplate">
                {/* arounfitem */}
                <div className="inline-flex w-[300px] py-2 flex-col gap-3 p-4 basis-1/4">
                    <p className="font-bold">Xung quanh có gì?</p>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-3 p-4 basis-1/4">
                    <p className="font-bold">Xung quanh có gì?</p>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-3 p-4 basis-1/4">
                    <p className="font-bold">Xung quanh có gì?</p>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                  
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-3 p-4 basis-1/4">
                    <p className="font-bold">Xung quanh có gì?</p>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-3 p-4 basis-1/4">
                    <p className="font-bold">Xung quanh có gì?</p>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Công viên Biển Đông</p>
                        <p>700 m</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>Beach Hotel Park</p>
                        <p>1,3 km</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                        <p>My Ke Beach Park</p>
                        <p>1,4km</p>
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-500">* Tất cả khoảng cách được đo theo đường thẳng. Khoảng cách di chuyển thực sự có thể khác.</p>
        </div>
        <div className="flex flex-col w-full gap-4">
            <p className="text-2xl font-bold">Nhà hàng</p>
            <p className="text-sm text-gray-500">1 nhà hàng trong khuôn viên</p>
            <div className="border-[0.4px] w-[600px] text-sm border-gray-300 p-4 flex flex-col gap-2">
                <p className="text-lg font-medium">SENA HOTEL</p>
                <p><span className="font-medium">Ẩm thực: </span>Món Mỹ, Món Việt, Món Châu Âu</p>
                <p><span className="font-medium">Mở cửa phục vụ: </span> Bữa sáng</p>
                <p><span className="font-medium">Thực đơn: </span> Tự chọn & gọi món</p>
            </div>
        </div>
        <div className="flex flex-col w-full gap-4">
            <p className="text-2xl font-bold">Các tiện nghi của Hanoi Sena Hotel - Former Symphony Hanoi Hotel</p>
            <p className="text-sm font-normal text-gray-500">Tiện nghi tuyệt vời! Điểm đánh giá: 10</p>
            <p className="text-sm font-semibold">Các tiện nghi được ưa chuộng nhất</p>
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <WifiFreeSvg className="w-5 h-5" color="#00800A"/>
                    <p className="text-sm">Wi-Fi miễn phí</p>
                </div>
            </div>
            <div className="gridtemplate">
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Quầy bar (đồ ăn nhẹ)</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Thiết bị báo carbon monoxide</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Hệ thống CCTV trong khu vực chung</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Hệ thống CCTV trong khu vực chung</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Quầy bar (đồ ăn nhẹ)</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Màn chống muỗi</p>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Thiết bị báo carbon monoxideh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Màn chống muỗi</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> GThiết bị báo carbon monoxide</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Thiết bị báo carbon monoxide</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Thiết bị báo carbon monoxideh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Màn chống muỗi</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Màn chống muỗi</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Quầy bar (đồ ăn nhẹ)</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Hệ thống CCTV trong khu vực chung</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Hệ thống CCTV trong khu vực chung</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                </div>
                <div className="inline-flex w-[300px] py-2 flex-col gap-2">
                    <p className="flex items-center justify-start gap-3 text-sm font-bold"><BathRoomSvg className="w-5 h-5" color="#000" />Phòng tắm</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Quầy bar (đồ ăn nhẹ)</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                    <p className="flex gap-4 text-sm"><BiCheck className="w-5 h-5"/> Giấy vệ sinh</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full gap-3">
             <p className="text-xl font-bold">Quy tắc chung</p>
             <p className="text-xs text-gray-500">Hanoi Sena Hotel - Former Symphony Hanoi Hotel nhận yêu cầu đặc biệt - gửi yêu cầu trong bước kế tiếp!</p>
             <div className="w-full bg-[#EAF3FF] flex flex-col gap-5 p-4">
                <div className="flex w-full">
                    <div className="flex items-center gap-2 basis-1/4">
                        <GetRoomSvg className="w-6 h-6" color="#000"/>
                        <p className="text-sm font-bold">Nhận phòng</p>
                    </div>
                    <div className="flex-1">
                        <TimeBar startTime={'14:00'} endTime={'23:30'} />
                        <p className="text-sm text-gray-500">Trước đó bạn sẽ cần cho chỗ nghỉ biết giờ bạn sẽ đến nơi.</p>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex items-center gap-2 basis-1/4">
                        <GetRoomSvg className="w-6 h-6" color="#000"/>
                        <p className="text-sm font-bold">Nhận phòng</p>
                    </div>
                    <div className="flex-1">
                        <TimeBar startTime={'01:00'} endTime={'11:30'} />
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex items-start gap-2 basis-1/4">
                            <HiOutlineInformationCircle className="w-6 h-6" color="#000"/>
                            <p className="text-sm font-bold">Hủy đặt phòng/Trả trước</p>
                    </div>
                    <div className="flex-1">
                         <p className="text-sm">Các loại căn hộ khác nhau có thể có chính sách hủy đặt phòng và chính sách thanh toán trước không giống nhau. Vui lòng nhập ngày tháng lưu trú và kiểm tra các điều kiện của phòng bạn chọn.</p>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex items-start gap-2 basis-1/4">
                            <ChidrenSvg className="w-6 h-6" color="#000"/>
                            <p className="text-sm font-bold">Trẻ em và giường</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 text-sm">
                         <p className="font-semibold">Chính sách trẻ em</p>
                         <p>Phù hợp cho tất cả trẻ em. </p>
                         <p>Để xem thông tin giá và tình trạng phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm.</p>
                         <p className="font-semibold">Chính sách nôi (cũi) và giường phụ</p>
                         <p>Chỗ nghỉ này không có nôi/cũi và giường phụ.</p>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex items-start gap-2 basis-1/4">
                            <LimitAgeSvg />
                            <p className="text-sm font-bold">Không giới hạn độ tuổi</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 text-sm">
                         <p>Không có yêu cầu về độ tuổi khi nhận phòng</p>
                    </div>
                </div>
                <div  className="flex w-full">
                    <div className="flex items-start gap-2 basis-1/4">
                            <SmokingSvg  />
                            <p className="text-sm font-bold"></p>
                    </div>
                    <div className="flex items-center flex-1 gap-3 text-sm">
                        <Image src={"/hyatt.png"} alt={''} width={45} height={25} />
                    </div>
                </div>
                <div  className="flex w-full">
                    <div className="flex items-start gap-2 basis-1/4">
                            <CardSvg  />
                            <p className="text-sm font-bold">Hút thuốc</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 text-sm">
                         <p>Không cho phép hút thuốc.</p>
                    </div>
                </div>
                <div  className="flex w-full">
                    <div className="flex items-start gap-2 basis-1/4">
                            <SodaSvg  />
                            <p className="text-sm font-bold">Tiệc tùng</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 text-sm">
                         <p>Không cho phép tiệc tùng/sự kiện.</p>
                    </div>
                </div>
                <div  className="flex w-full">
                    <div className="flex items-start gap-2 basis-1/4">
                            <PetSvg  />
                            <p className="text-sm font-bold">Vật nuôi</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 text-sm">
                         <p>Vật nuôi không được phép.</p>
                    </div>
                </div>
             </div>
        </div>
        <div className="flex flex-col w-full gap-4">
            <p className="text-2xl">Ghi chú</p>
            <div className="bg-[#EAF3FF] p-4 flex flex-col gap-3 text-sm">
                <p>Chỗ nghỉ này không nhận tổ chức tiệc chia tay cuộc đời độc thân hay các bữa tiệc tương tự như vậy.</p>
                <p>Chỗ nghỉ này nằm trong khu vực tấp nập và khách có thể cảm thấy ồn.</p>
                <p>Vui lòng thông báo trước cho WECOZY HANOI - Railway Side, The Old Quarter về thời gian đến dự kiến của quý khách. Khách có thể sử dụng ô Yêu cầu Đặc biệt khi đặt phòng hoặc liên lạc trực tiếp với chỗ nghỉ qua các thông tin liên hệ được ghi trong xác nhận đặt phòng.</p>
                <p>Khách cần phải xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng vào thời điểm nhận phòng. Vui lòng lưu ý tất cả các Yêu cầu Đặc biệt đều tùy thuộc vào tình trạng phòng trống và phụ phí có thể sẽ được tính thêm.</p>
            </div>
        </div>
        <div className="w-full border-[0.4px] p-4  border-gray-300">
            <div className="flex items-center justify-between py-4">
                <p className="text-sm font-bold">Khách từng xem WECOZY HANOI - Railway Side, The Old Quarter đã đặt các chỗ nghỉ này</p>
                <a href="" className="text-[#0171C2] hover:underline text-sm">Hiển thị thêm</a>
            </div>
            <ListCardByCategory category={''} description={''} cards={cards3} />
        </div>
        <div className="w-full p-4 bg-[#EAF3FF]">
            <p className="py-2 text-2xl">Những điểm hấp dẫn nhất của Hà Nội</p>
            <p className="text-sm">Nhấp vào đây để xem chỗ nghỉ gần các địa danh nổi tiếng tại Hà Nội</p>
        </div>
    </div>
  )
}

export default Index