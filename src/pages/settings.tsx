import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import FormA from '@/components/SettingsPage/FormA'
import FormB from '@/components/SettingsPage/FormB'
import FormC from '@/components/SettingsPage/FormC'
import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import useResetState from '@/hooks/useResetSate'
import { useRouter } from 'next/navigation'
import {resetNavbar, SettingsSucess} from '../slice/Navbar/stateNavbar'
import useSettings from '@/hooks/useSettings'
import { Alert, Snackbar } from '@mui/material'

type Props = {}

const settings = (props: Props) => {
    const [error, setError] = useState<string>();
    const [open, setOpen] = useState(false);
    const state = useSelector((state:any)=>state)
    const route = useRouter()
    const dispatch = useDispatch()
    const {settingsHotel, SettingsHotelSchema} = useSettings()
    const testApi = axios.create({baseURL:"http://localhost:3000"})
    const {resetSate} = useResetState()
   async function HandleSubmit(){
    try {
        await SettingsHotelSchema.validate(settings);
        const data = await testApi.post("/api/hotel",state)
        if(data){
           resetSate()
            dispatch(resetNavbar())
          route.replace("/")
        }
      } catch (err:any) {
          if(err&&err.errors)setError(err.errors[0])
          setOpen(true)
          console.log(err.response.data) // => 'ValidationError'
          
      }
     
     }
     const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      }
      
  return (
    <MainNavbarForm>
          <div className="flex flex-col gap-6 py-6">
                <p className="text-xl font-bold">Thanh toán</p>
                <p className="text-sm font-light">Vui lòng nêu phương thức thanh toán Quý vị chấp nhận, các chi tiết về thuế cùng với những lựa chọn khác như các loại phụ phí.</p>
                {error&&(
                        <div className="text-sm font-bold text-[#A30100] border-[1px] w-1/2 border-[#CC0100] p-3 rounded-md" >
                            <p>{error}</p>
                        </div>
                    )}
                <Snackbar open={open} autoHideDuration={4000}  onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    {error}
                                </Alert>
                </Snackbar>
        </div>
        <div className="flex w-full gap-4 pb-8">
          <div className="w-[800px] flex flex-col gap-5">
            <FormA />
            <FormB />
            <FormC />
            <button onClick={()=>{HandleSubmit()}} className="w-full text-white text-lg bg-[#3175B1] rounded-sm py-2">Hoàn tất đăng ký và mở phòng cho khách đặt</button>
          </div>
          <div className="w-[260px] flex flex-col gap-5">
                <div className="p-3 text-xs bg-[#F8FBFD] ">
                    <p >Khách đặt phòng thế nào và họ thanh toán ra sao?</p>
                    <p>Để đảm bảo trước 1 đặt phòng, chúng tôi cho phép khách sử dụng tất cả các phương thức thanh toán bằng thẻ thông dụng. Tuy nhiên, khi thu tiền, Quý vị có thể nêu rõ phương thức thanh toán mà Quý vị chấp nhận tại chỗ nghỉ.</p>
                </div>
                <div className="flex flex-col gap-3 p-3 text-xs bg-[#F8FBFD]">
                    <p className="">Phí hoa hồng mang đến cho Quý vị những gì?</p>
                    <div className="flex items-start gap-3">
                        <AiFillCheckCircle className="w-5 h-5 text-[#00800A] "/>
                        <p className="w-[80%]">Không có ẩn phí - mức hoa hồng minh bạch</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <AiFillCheckCircle className="w-5 h-5 text-[#00800A] "/>
                        <p className="w-[80%]">Chỉ phải trả cho những đặt phòng đã lưu trú</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <AiFillCheckCircle className="w-5 h-5 text-[#00800A] "/>
                        <p className="w-[80%]">Hỗ trợ từ nhân viên 24/7 bằng điện thoại hay email</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <AiFillCheckCircle className="w-5 h-5 text-[#00800A] "/>
                        <p className="w-[80%]">Hiện diện mạnh mẽ trên các công cụ tìm kiếm để thu hút nhiều đặt phòng hơn</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <AiFillCheckCircle className="w-5 h-5 text-[#00800A] "/>
                        <p className="w-[80%]">Phân tích dữ liệu và lời khuyên hữu ích để tăng hiệu suất hoạt động chỗ nghỉ</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <AiFillCheckCircle className="w-5 h-5 text-[#00800A] "/>
                        <p className="w-[80%]">Xác nhận tức thì để tiết kiệm thời gian cho Quý vị</p>
                    </div>
                </div>
            </div>
        </div>
    </MainNavbarForm>
  )
}

export default settings