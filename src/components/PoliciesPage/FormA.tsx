import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import { IoMdNotifications } from 'react-icons/io'

type Props = {}

const FormA = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'có, có trả phí', label: 'có, có trả phí' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ]
  return (
    <FormInput >
        <p className="text-xl font-light">Hủy đặt phòng</p>
        <p className="text-sm">Khách có thể hủy đặt phòng trước bao nhiêu ngày để được miễn phí?</p>
        <Select className="text-xs min-w-1/2 max-w-[2/3]" value={options[2]}
                            options={options}/>
        <p className="text-sm">nếu không khách sẽ phải trả 100%</p>
         <Select className="text-xs min-w-1/2 max-w-[2/3]" value={options[2]}
                            options={options}/>
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