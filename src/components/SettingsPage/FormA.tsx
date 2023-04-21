import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import { Radio } from '@mui/material'

type Props = {}

const FormA = (props: Props) => {
  return (
    <FormInput >
        <p className="py-2 text-xl font-light">Lựa chọn thanh toán của khách</p>
        <p className='text-sm'>Quý vị có thể thu tiền qua thẻ tín dụng tại chỗ nghỉ không?</p>
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
        <p className="text-xs text-gray-400">Chúng tôi sẽ thông báo với khách rằng Quý vị chỉ chấp nhận thanh toán bằng tiền mặt.</p>
    </FormInput>
  )
}

export default FormA