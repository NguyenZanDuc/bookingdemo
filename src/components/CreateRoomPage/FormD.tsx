import React from 'react'
import FormInput from '../ui/FormInput/FormInput'

type Props = {}

const FormD = (props: Props) => {
  return (
    <FormInput >
        <p className="text-xl">Giá cơ bản mỗi đêm</p>
        <p className='text-xs text-gray-600 p-[3px] bg-[#E6E6E6]'>Đây là giá thấp nhất mà chúng tôi tự động áp dụng đối với phòng này cho tất cả các ngày. Trước khi chỗ nghỉ online, Quý vị có thể cài đặt giá theo mùa trong trang dashboard của chỗ nghỉ.</p>
        <p className="text-sm">Giá cho 1 người</p>
        <div className="w-[180px] h-[37px] flex border-[0.4px] items-center border-gray-400">
            <div className="bg-[#EEEEEE] border-r-[0.4px] border-gray-400 h-full flex items-center flex-1 justify-center">
                <p className="text-sm text-center ">VND/ đêm</p>
            </div>
            <input type="text" className="w-1/2 px-2" placeholder='0' />
        </div>
        
    </FormInput>
  )
}

export default FormD