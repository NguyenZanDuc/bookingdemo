import React from 'react'
import Logo from './Logo'
import Flag from './Flag'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineBars} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import Auth from './Auth'
import Tooltip from '@mui/material/Tooltip'
import { Button, Zoom } from '@mui/material'
import {IoBedOutline} from 'react-icons/io5'
import {GiAirplaneDeparture} from 'react-icons/gi'
import FlightsAndhotels from '../svg/FlightsAndhotels'
import CarRental from '../svg/CarRental'
import Location from '../svg/Location'
import AirportTaxi from '../svg/AirportTaxi'
import {MdOutlineUnfoldMore} from 'react-icons/md'
import { useRouter } from 'next/router'
import useAboutHotelForm from '@/hooks/useAboutHotelForm'




type Props = {}

const Header = (props: Props) => {
  const route = useRouter();
  const {aboutHotel}= useAboutHotelForm()
 function HandleClick(){
  if(aboutHotel.property==undefined||aboutHotel.property==""){
      route.replace("/become-a-host/category")
      return
  }
  route.replace("/about")
 }
  return (
    <div className="bg-[#01357F] z-10  w-full lg:px-20 px-3 py-3 text-white h-[100px] flex flex-col">
      <div className="flex items-center justify-between flex-1">
        <Logo />
        <div className="items-center justify-end hidden gap-6 lg:flex">
          <Tooltip TransitionComponent={Zoom} TransitionProps={{ timeout: 400 }} title="Chọn loại tiền tệ của bạn">
            <p className="cursor-pointer">VND</p>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} TransitionProps={{ timeout: 400 }} title="Chọn ngôn ngữ của bạn">
            <div className="cursor-pointer">
              <Flag />
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} TransitionProps={{ timeout: 400 }} title="Dịch vụ khách hàng">
            <div className="cursor-pointer">
              <AiOutlineQuestionCircle className="w-6 h-6" />
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} TransitionProps={{ timeout: 400 }} title="Xem các thông báo của bạn">
            <div className="cursor-pointer">
              <IoMdNotificationsOutline className="w-6 h-6" />
            </div>
          </Tooltip>
          <button onClick={HandleClick} className="p-2 text-xs font-medium rounded-xl hover:bg-white hover:bg-opacity-10">Đăng chỗ nghỉ của Quý vị</button>
          <Auth />
        </div>
        <div className="flex items-center justify-center gap-5 lg:hidden">
          <BiUserCircle className="w-6 h-6 " />
          <AiOutlineBars className="w-6 h-6 " />
        </div>
      </div>
      <div className="items-center justify-start flex-1 hidden gap-2 md:flex">
        <Button variant="text" startIcon={<IoBedOutline className="text-white" />} className="rounded-xl"><a className="font-sans text-xs text-white" href="">Lưu trú</a></Button>
        <Button variant="text" startIcon={<GiAirplaneDeparture className="text-white" />} className="rounded-xl"><a className="font-sans text-xs text-white" href="">Chuyến bay</a></Button>
        <Button variant="text" startIcon={<FlightsAndhotels />} className="rounded-xl"><a className="font-sans text-xs text-white" href="">Chuyến bay + Khách sạn</a></Button>
        <Button variant="text" startIcon={<CarRental />} className="hidden lg:flex rounded-xl"><a className="font-sans text-xs text-white" href="">Thuê xe</a></Button>
        <Button variant="text" startIcon={<Location />} className="hidden lg:flex rounded-xl"><a className="font-sans text-xs text-white" href="">Địa điểm tham quan</a></Button>
        <Button variant="text" startIcon={<AirportTaxi />} className="hidden lg:flex rounded-xl"><a className="font-sans text-xs text-white" href="">Taxi sân bay</a></Button>
        {/* <Button variant="text" endIcon={<MdOutlineUnfoldMore className='text-white' />} className="lg:hidden rounded-xl"><a className="font-sans text-xs text-white" href="">Khac</a></Button> */}
      </div>
    </div>
  )
}

export default Header