import React, { useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import FacilityOption from '../ui/Option/FacilityOption'
import useCheckboxGroup from '@/hooks/useCheckboxGroup'
import { slideAnimationDuration } from '@mui/x-date-pickers/DateCalendar/PickersSlideTransition'



type Props = {}
const facilities = ["Wi-Fi miễn phí",
                    "Nhà hàng",
                    "Dịch vụ phòng",
                    "Quầy bar",
                    "Lễ tân 24 giờ",
                    "Phòng xông hơi",
                    "Trung tâm thể dục",
                    "Sân vườn",
                    "Sân thượng/ hiên",
                    "Phòng không hút thuốc",
                    "Xe đưa đón sân bay",
                    "Phòng gia đình",
                    "Trung tâm Spa & chăm sóc sức khoẻ",
                    "Bồn tắm nóng/bể sục (Jacuzzi)",
                    "Điều hòa nhiệt độ",
                    "Công viên nước",
                    "Hồ bơi"
                    ]   
const FormD = (props: Props) => {
    const {selected, CheckIsChecked, SetValueChecked} = useCheckboxGroup([])
    const options = [
        { value: 'không', label: 'không' },
        { value: 'Tieng Viet', label: 'Tieng Viet' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ];
      
  return (
        <FormInput >
            <p className="py-2 text-xl font-light">Những tiện nghi được khách ưa chuộng</p>
            <p className='text-xs text-gray-500 bg-[#E6E6E6] p-2'>Khách để tâm đến những tiện nghi này nhất khi họ tìm kiếm chỗ nghỉ.</p>
            <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index)=>{
                        const isChecked = CheckIsChecked( selected, facility)
                    return <FacilityOption key={index} isChecked={isChecked} setValue={SetValueChecked} value={facility} />
                })}
            </div>
        </FormInput>
    )
  }

export default FormD