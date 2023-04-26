import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {BsCheckLg} from 'react-icons/bs'
const MainNavbarForm = ({children}) => {
  const stateNavbar = useSelector((state)=>state.stateNavbar.value)
 const  {about, amenities,facilities, image,policies,room,settings} = stateNavbar
  return (
    <div className="xl:px-32 lg:px-12 md:px-8 px-2 w-screen bg-[#F5F5F5]">
        <div className="flex flex-wrap gap-2">
            <a style={{borderColor: about?"#0171C2":"#4B5563"}} className="text-[13px] font-light min-w-[120px] py-4 border-b-[4px] text-center flex-1 bg-[#EFEFEF] hover:text-blue-600 flex items-center justify-center gap-2" href="/about">{(about)&&(<BsCheckLg className="w-7 h-7 text-[#00800A]"/>)}Thông tin cơ bản</a>           
            <a style={{borderColor: room?"#0171C2":"#4B5563"}} className="text-[13px] font-light min-w-[120px] py-4 border-b-[4px] text-center flex-1 bg-[#EFEFEF] hover:text-blue-600 flex items-center justify-center gap-2"  href="/createroom">{(room)&&(<BsCheckLg className="w-7 h-7 text-[#00800A]"/>)}Bố cục và giá</a>
            <a style={{borderColor: facilities?"#0171C2":"#4B5563"}} className="text-[13px] font-light min-w-[120px] py-4 border-b-[4px] text-center flex-1 bg-[#EFEFEF] hover:text-blue-600 flex items-center justify-center gap-2"  href="/facilities">{(facilities)&&(<BsCheckLg className="w-7 h-7 text-[#00800A]"/>)}Tiện nghi và phục vụ</a>
            <a style={{borderColor: amenities?"#0171C2":"#4B5563"}} className="text-[13px] font-light min-w-[120px] py-4 border-b-[4px] text-center flex-1 bg-[#EFEFEF] hover:text-blue-600 flex items-center justify-center gap-2"  href="/amenities">{(amenities)&&(<BsCheckLg className="w-7 h-7 text-[#00800A]"/>)}Tiện nghi</a>
            <a style={{borderColor: image?"#0171C2":"#4B5563"}} className="text-[13px] font-light min-w-[120px] py-4 border-b-[4px] text-center flex-1 bg-[#EFEFEF] hover:text-blue-600 flex items-center justify-center gap-2"  href="/photos">{(image)&&(<BsCheckLg className="w-7 h-7 text-[#00800A]"/>)}Hình ảnh</a>
            <a style={{borderColor: policies?"#0171C2":"#4B5563"}} className="text-[13px] font-light min-w-[120px] py-4 border-b-[4px] text-center flex-1 bg-[#EFEFEF] hover:text-blue-600 flex items-center justify-center gap-2"  href="/policies">{(policies)&&(<BsCheckLg className="w-7 h-7 text-[#00800A]"/>)}Chính sách</a>
            <a style={{borderColor: settings?"#0171C2":"#4B5563"}} className="text-[13px] font-light min-w-[120px] py-4 border-b-[4px] text-center flex-1 bg-[#EFEFEF] hover:text-blue-600 flex items-center justify-center gap-2"  href="/settings">{(settings)&&(<BsCheckLg className="w-7 h-7 text-[#00800A]"/>)}Thanh toán</a>
        </div>
        {children}
    </div>
  )
}

export default MainNavbarForm