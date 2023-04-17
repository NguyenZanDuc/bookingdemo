import { Button, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="">
        <div className="flex flex-col items-center justify-center py-14 gap-4 bg-[#00224F] text-white">
            <p className="text-3xl text-white">Tiết kiệm thời gian và tiền bạc!</p>
            <p className="text-gray-400">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</p>
            <div className="flex items-center justify-center gap-4">
                <div className="bg-white w-[380px]  p-2 rounded-md">
                       <TextField id="outlined-basic" label="Email"  variant="outlined" color="info" className="w-full"/>
                </div>
                <Button variant="contained" className="bg-[#0171C2] py-3 px-6"> Đăng ký</Button>
            </div>
        </div>
        <div className="flex items-center justify-center py-3 bg-[#01357F] border-b-[1px] border-white">
            <p className="text-sm px-3 py-1 rounded-md border-[1px] border-white text-white ">Đăng chỗ nghỉ của Quý vị</p>
        </div>
        <div className="flex justify-around py-3 text-white bg-[#01357F] text-xs underline">
            <a href="#">Phiên bản di động</a>
            <a href="#">Quản lý các đặt phòng của bạn</a>
            <a href="#">Dịch vụ khách hàng</a>
            <a href="#">Trở thành đối tác phân phối</a>
            <a href="#">Booking.com dành cho Doanh Nghiệp</a>
        </div>
        <div className="flex justify-around p-4 text-[#01357F] text-xs">
            <div className="flex flex-col items-start gap-2">
                <a href='#' className="hover:text-[#D49163]">Các quốc gia</a>
                <a href='#' className="hover:text-[#D49163]">Khu vực</a>
                <a href='#' className="hover:text-[#D49163]">Thành phố</a>
                <a href='#' className="hover:text-[#D49163]">Quận</a>
                <a href='#' className="hover:text-[#D49163]">Sân bay</a>
                <a href='#' className="hover:text-[#D49163]">Khách sạn</a>
                <a href='#' className="hover:text-[#D49163]">Địa điểm được quan tâm</a>
            </div>
            <div className="flex flex-col items-start gap-2">
                <a href='#' className="hover:text-[#D49163]">Nhà</a>
                <a href='#' className="hover:text-[#D49163]">Căn hộ</a>
                <a href='#' className="hover:text-[#D49163]">Resort</a>
                <a href='#' className="hover:text-[#D49163]">Biệt thự</a>
                <a href='#' className="hover:text-[#D49163]">Nhà trọ</a>
                <a href='#' className="hover:text-[#D49163]">Nhà nghỉ B&B</a>
                <a href='#' className="hover:text-[#D49163]">Nhà khách</a>
            </div>
            <div className="flex flex-col items-start gap-2">
                <a href='#' className="hover:text-[#D49163]">Những chỗ nghỉ độc đáo</a>
                <a href='#' className="hover:text-[#D49163]">Tất cả các điểm đến</a>
                <a href='#' className="hover:text-[#D49163]">Tất cả các điểm đến có chuyến bay</a>
                <a href='#' className="hover:text-[#D49163]">Tất cả địa điểm cho thuê xe</a>
                <a href='#' className="hover:text-[#D49163]">Khám phá</a>
                <a href='#' className="hover:text-[#D49163]">Đánh giá của khách</a>
                <a href='#' className="hover:text-[#D49163]">Khám phá lưu trú theo tháng</a>
                <a href='#' className="hover:text-[#D49163]">Các bài viết</a>
                <a href='#' className="hover:text-[#D49163]">Ưu đãi theo mùa và dịp lễ</a>
                <a href='#' className="hover:text-[#D49163]">Traveller Review Awards</a>
            </div>
            <div className="flex flex-col items-start gap-2">
                <a href='#' className="hover:text-[#D49163]">Cho thuê xe hơi</a>
                <a href='#' className="hover:text-[#D49163]">Tìm chuyến bay</a>
                <a href='#' className="hover:text-[#D49163]">Đặt nhà hàng</a>
                <a href='#' className="hover:text-[#D49163]">Booking.com dành cho Đại Lý Du Lịch</a>
            </div>
            <div className="flex flex-col items-start gap-2">
                 <a href='#' className="hover:text-[#D49163]">Các câu hỏi thường gặp về virus corona (COVID-19)</a>
                <a href='#' className="hover:text-[#D49163]">Về Booking.com</a>
                <a href='#' className="hover:text-[#D49163]">Dịch vụ khách hàng</a>
                <a href='#' className="hover:text-[#D49163]">Trợ giúp đối tác</a>
                <a href='#' className="hover:text-[#D49163]">Careers</a>
                <a href='#' className="hover:text-[#D49163]">Du lịch bền vững</a>
                <a href='#' className="hover:text-[#D49163]">Truyền thông</a>
                <a href='#' className="hover:text-[#D49163]">Trung tâm thông tin bảo mật</a>
                <a href='#' className="hover:text-[#D49163]">Quan hệ cổ đông</a>
                <a href='#' className="hover:text-[#D49163]">Điều khoản và điều kiện</a>
                <a href='#' className="hover:text-[#D49163]">Tranh chấp đối tác</a>
                <a href='#' className="hover:text-[#D49163]">Chúng tôi hoạt động như thế nào</a>
                <a href='#' className="hover:text-[#D49163]">Thông báo về Bảo mật & Cookie</a>
                <a href='#' className="hover:text-[#D49163]">Chính sách MSA</a>
                <a href='#' className="hover:text-[#D49163]">Liên hệ công ty</a>
                <a href='#' className="hover:text-[#D49163]">Chúng Tôi Luôn Khớp Giá!</a>
            </div>
        </div>
        <div className="flex justify-center items-center text-[#01357F] ">
            <a href='#' className="hover:text-[#D49163]">Đăng nhập vào extranet</a>
        </div>
        <div>
            <p className="px-20 py-4 text-xs">Bản quyền © 1996–2023 Booking.com™. Bảo lưu mọi quyền.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600">Booking.com là một phần của Booking Holdings Inc., tập đoàn đứng đầu thế giới về du lịch trực tuyến và các dịch vụ liên quan.</p>
            <div className="flex justify-center gap-10 py-4">
                <a href="#">
                    <Image src={'/booking.png'} alt={''} height={36} width={100}/>
                </a>
                <a href="#">
                    <Image src={'/priceline.png'} alt={''} height={36} width={100}/>
                </a>
                <a href="#">
                    <Image src={'/kayak.png'} alt={''} height={36} width={100}/>
                </a>
                <a href="#">
                    <Image src={'/agoda.png'} alt={''} height={36} width={100}/>
                </a>
                <a href="#">
                    <Image src={'/rentalcars.png'} alt={''} height={36} width={100}/>
                </a>
                <a href="#">
                    <Image src={'/openTable.png'} alt={''} height={36} width={100}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer