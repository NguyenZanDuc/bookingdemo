import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import { Radio } from '@mui/material';
import Select from 'react-select';


type Props = {}

const FormB = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'Tieng Viet', label: 'Tieng Viet' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ];
  return (
    <FormInput >
        <p className="py-2 text-lg">Thanh toán hoa hồng</p>
        <div className="flex justify-between">
            <p className='text-sm w-[60%]'>Vào đầu mỗi tháng, chúng tôi sẽ gửi cho Quý vị hóa đơn của tất cả các đặt phòng đã hoàn tất trong tháng trước.</p>
            <div className="flex flex-col items-end gap-2">
                <p className="text-sm font-bold">Phần trăm hoa hồng:</p>
                <p className="text-2xl text-[#00800A] font-light">15 %</p>
            </div>
        </div>
        <div className="flex flex-col w-1/2 gap-2 py-8">
            <p className="text-sm">Chúng tôi nên viết tên nào trên hóa đơn (ví dụ: tên công ty/pháp lý)?</p>
            <div>
                <Select className="w-full text-xs" value={options[1]}
                                options={options}/>
            </div>
        </div>
        <p className="w-1/2 text-sm">Người nhận này có cùng địa chỉ với chỗ nghỉ của Quý vị không?</p>
        <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 px-4  text-sm border-[0.6px] rounded-md border-gray-400">
                <Radio name="1"/>
                <p>Có</p>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 text-sm border-[0.6px] rounded-md border-gray-400">
                <Radio name="1"/>
                <p>Không</p>
            </button>
        </div>
    </FormInput>
  )
}

export default FormB