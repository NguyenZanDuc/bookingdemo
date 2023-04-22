import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import { IoMdNotifications } from 'react-icons/io'
import usePoliciesHotel from '@/hooks/usePoliciesHotel'

type Props = {}

const FormA = (props: Props) => {
    const {policiesHotel, setDayCanCancel, setPriceAll} = usePoliciesHotel()
    const cancelOptions = [
        { value: 0, label: 'Cùng ngày nhận phòng (18:00)' },
        { value: 1, label: '1 ngày' },
        { value: 2 , label: '2 ngày' },
        { value: 3 , label: '3 ngày' },
        { value: 4 , label: '7 ngày' },
        { value: 5 , label: '14 ngày' }
      ]
    const priceOptions =[{value: true, label: "của tổng đợt lưu trú" },{value: false, label:"của đêm đầu tiên"}]
  return (
    <FormInput >
        <p className="text-xl font-light">Hủy đặt phòng</p>
        <p className="text-sm">Khách có thể hủy đặt phòng trước bao nhiêu ngày để được miễn phí?</p>
        <Select className="w-1/2 text-sm" value={{value: policiesHotel.dayCanCancel, label: cancelOptions[Number(policiesHotel.dayCanCancel??0)].label}}
                        onChange={(e:any)=>{setDayCanCancel(e.value)}}
                            options={cancelOptions}/>
        <p className="text-sm">nếu không khách sẽ phải trả 100%</p>
         <Select className="w-1/2 text-sm" value={{value: policiesHotel.priceAll, label: priceOptions[Number(!policiesHotel.priceAll)].label}}
                        onChange={(e:any)=>{setPriceAll(e.value)}}
                            options={priceOptions}/>
        <div className="flex flex-col gap-2 p-2 bg-[#F8FBFD]">
            <div className="flex gap-2 text-sm">
                <IoMdNotifications className="w-4 h-4"/>
                <p>Khách phải hủy trước 18:00 vào ngày nhận phòng hoặc thanh toán 100% giá phòng toàn bộ kỳ nghỉ.</p>
            </div>
            <p className="text-xs text-gray-400">Xin lưu ý: Quý vị sẽ có thể thay đổi các chính sách của mình sau. Phần này chỉ giúp Quý vị bắt đầu.</p>
        </div>
    </FormInput>
  )
}

export default FormA