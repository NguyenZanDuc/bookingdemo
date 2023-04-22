import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import useRoomHotel from '@/hooks/useRoomHotel'

type Props = {}

const FormD = (props: Props) => {
  const {roomHotel, setPrice} = useRoomHotel();
  return (
    <FormInput >
        <p className="text-xl">Giá cơ bản mỗi đêm</p>
        <p className='text-xs text-gray-600 p-[3px] bg-[#E6E6E6]'>Đây là giá thấp nhất mà chúng tôi tự động áp dụng đối với phòng này cho tất cả các ngày. Trước khi chỗ nghỉ online, Quý vị có thể cài đặt giá theo mùa trong trang dashboard của chỗ nghỉ.</p>
        <p className="text-sm">Giá cho 1 người</p>
        <div className="w-1/2 h-[37px] z-10 flex border-[0.4px] items-center border-gray-400">
            <div className="bg-[#EEEEEE] border-r-[0.4px] border-gray-400 h-full px-3 flex items-center justify-center">
                <p className="text-sm text-center ">VND/ đêm</p>
            </div>
            <input type="number" className="flex-1 px-2 outline-none" value={roomHotel.price} onChange={(e)=>{setPrice(Number(e.target.value))}} placeholder='0' />
        </div>
        
    </FormInput>
  )
}

export default FormD