import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import { Switch } from '@mui/material'

type Props = {}

const FormB = (props: Props) => {
  return (
    <FormInput>
        <div className="flex items-center justify-between">
            <p className="text-2xl">Bảo hiểm đối với những đặt phòng do nhầm lẫn</p>
            <div className="flex items-center gap-2">
                <Switch color="success"/>
                <p className="textsm">Có</p>
            </div>
        </div>
        <p className="text-xs text-gray-500">Để giúp Quý vị tiết kiệm thời gian xử lý những đặt phòng do nhầm lẫn, chúng tôi tự động miễn phí hủy cho những khách hủy trong vòng 24 giờ đầu tiên sau khi họ đặt. Quý vị có thể thay đổi khoảng thời gian này trong kênh quản lý chỗ nghỉ của mình trong tương lai.</p>
    </FormInput>
  )
}

export default FormB