import React, { useState } from 'react'

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import FormInput from '../ui/FormInput/FormInput'
import useAboutHotelForm from '@/hooks/useAboutHotelForm'

type Props = {}

const FormC = (props: Props) => {
  const [isOpen, setIsOpen] = useState(0);
  const {aboutHotel, setNameToolManagerHotel} = useAboutHotelForm();
  function HandleRadioGroupChange(e: any){
      setIsOpen(e.target.value);
  }
  return (
    <FormInput >
        <p className="text-lg">Quý vị có sử dụng công cụ quản lý kênh không?</p>
        <p>Công cụ quản lý kênh là công cụ cho phép Quý vị chọn bán những gì mình muốn trên tất cả các trang web khác nhau mà Quý vị đã đăng ký. Sau đó, Quý vị có thể định giá và mở hoặc đóng các ngày trong lịch trên tất cả các trang web đó, tất cả ở cùng 1 nơi.</p>
        <p>Nếu Quý vị dùng công cụ quản lý kênh, hãy cho chúng tôi biết dưới đây. Chúng tôi sẽ dùng thông tin này để giúp Quý vị kết nối công cụ đó với Booking.com trong tương lai. Nếu được, Quý vị hãy cho chúng tôi biết tên công cụ quản lý kênh mà Quý vị đang dùng.</p>
        <FormControl>
          <RadioGroup row name="radio" value={isOpen} onChange={HandleRadioGroupChange} className="flex w-full gap-4">
            <FormControlLabel value={1} className="border-[0.4px] border-gray-400 rounded-md p-2" control={<Radio />} label={"Tôi có dùng công cụ quản lý kênh"} />
            <FormControlLabel value={0} className="border-[0.4px] border-gray-400 rounded-md p-2" control={<Radio />} label={"Tôi không dùng công cụ quản lý kênh"} />
          </RadioGroup>
        </FormControl>
        {(isOpen==1)&&(
          <div className="z-10">
          <p className='py-2 text-sm'>Nhập tên (không bắt buộc)</p>
          <input type="text" value={aboutHotel.nameToolManager} onChange={(e)=>{setNameToolManagerHotel(e.target.value)}} placeholder='Tên công cụ quản lý kênh' className="placeholder:text-xs z-20 placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
        </div>
        )}
    </FormInput>
  )
}

export default FormC