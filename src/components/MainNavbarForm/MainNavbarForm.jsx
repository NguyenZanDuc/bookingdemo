import React from 'react'

const MainNavbarForm = ({children}) => {
  return (
    <div className="px-32 w-screen bg-[#F5F5F5]">
        <div className="flex gap-2 ">
            <a className="text-[13px] font-light py-4 border-b-[3px] text-center border-gray-600 flex-1 bg-[#EFEFEF] hover:text-blue-600 " href="/about">Thông tin cơ bản</a>           
            <a className="text-[13px] font-light py-4 border-b-[3px] text-center border-gray-600 flex-1 bg-[#EFEFEF] hover:text-blue-600 "  href="/createroom">Bố cục và giá</a>
            <a className="text-[13px] font-light py-4 border-b-[3px] text-center border-gray-600 flex-1 bg-[#EFEFEF] hover:text-blue-600 "  href="/facilities">Tiện nghi và phục vụ</a>
            <a className="text-[13px] font-light py-4 border-b-[3px] text-center border-gray-600 flex-1 bg-[#EFEFEF] hover:text-blue-600 "  href="#">Tiện nghi</a>
            <a className="text-[13px] font-light py-4 border-b-[3px] text-center border-gray-600 flex-1 bg-[#EFEFEF] hover:text-blue-600 "  href="/photos">Hình ảnh</a>
            <a className="text-[13px] font-light py-4 border-b-[3px] text-center border-gray-600 flex-1 bg-[#EFEFEF] hover:text-blue-600 "  href="/policies">Chính sách</a>
            <a className="text-[13px] font-light py-4 border-b-[3px] text-center border-gray-600 flex-1 bg-[#EFEFEF] hover:text-blue-600 "  href="/settings">Thanh toán</a>
        </div>
        {children}
      
    </div>
  )
}

export default MainNavbarForm