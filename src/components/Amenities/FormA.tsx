import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import useSettings from '@/hooks/useSettings'
import useAmenitiesHotel from '@/hooks/useAmenitiesHotel'

type Props = {}

const FormA = (props: Props) => {
    const {amenitiesHotel, setIsExtraOption} = useAmenitiesHotel()
  return (
    <FormInput >
        <p className="text-xl">Tùy chọn giường phụ</p>
        <p className="text-xs text-gray-500 bg-[#E6E6E6] p-2">Đây là những tùy chọn giường có thể thêm theo yêu cầu</p>
        <div className="z-10">
            <p className="py-4 text-sm">Quý vị có cung cấp giường phụ không?</p>
            <div className="z-10 flex gap-3">
                <label className="border-[0.6px] border-gray-400 cursor-pointer  rounded-md p-2 w-[100px] h-[35px] text-sm flex gap-2 items-center">
                    <input id="12" type="radio"  name="one" onClick={()=>{setIsExtraOption(true)}}/>
                    <p>Có</p>
                </label>
                <label className="border-[0.6px] border-gray-400 cursor-pointer  rounded-md p-2 w-[100px] h-[35px] text-sm flex gap-2 items-center">
                    <input type="radio" name="one" onClick={()=>{setIsExtraOption(false)}}/>
                    <p>Không</p>
                </label>
            </div>
        </div>
    </FormInput>
  )
}

export default FormA