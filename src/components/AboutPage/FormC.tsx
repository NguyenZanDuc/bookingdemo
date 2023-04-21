import React, {  } from 'react'
import DivClick from '../ui/DivClick/DivClick'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

type Props = {}

const FormC = (props: Props) => {

  return (
    <DivClick id={"#FormC"}  className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white text-sm">
        <p className="text-lg">Quý vị có sử dụng công cụ quản lý kênh không?</p>
        <p>Công cụ quản lý kênh là công cụ cho phép Quý vị chọn bán những gì mình muốn trên tất cả các trang web khác nhau mà Quý vị đã đăng ký. Sau đó, Quý vị có thể định giá và mở hoặc đóng các ngày trong lịch trên tất cả các trang web đó, tất cả ở cùng 1 nơi.</p>
        <p>Nếu Quý vị dùng công cụ quản lý kênh, hãy cho chúng tôi biết dưới đây. Chúng tôi sẽ dùng thông tin này để giúp Quý vị kết nối công cụ đó với Booking.com trong tương lai. Nếu được, Quý vị hãy cho chúng tôi biết tên công cụ quản lý kênh mà Quý vị đang dùng.</p>
        <FormControl>
          <RadioGroup row name="radio" className="flex w-full gap-4">
            <FormControlLabel value={1} className="border-[0.4px] border-gray-400 rounded-md p-2" control={<Radio />} label={"Tôi có dùng công cụ quản lý kênh"} />
            <FormControlLabel value={2} className="border-[0.4px] border-gray-400 rounded-md p-2" control={<Radio />} label={"Tôi không dùng công cụ quản lý kênh"} />
          </RadioGroup>
        </FormControl>
        <div>
          <p className='py-2 text-sm'>Nhập tên (không bắt buộc)</p>
          <input type="text" placeholder='Tên công cụ quản lý kênh' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
        </div>
    </DivClick>
  )
}

export default FormC