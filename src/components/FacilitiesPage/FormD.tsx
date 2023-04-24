import React, { useEffect, useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import FacilityOption from '../ui/Option/FacilityOption'

import { slideAnimationDuration } from '@mui/x-date-pickers/DateCalendar/PickersSlideTransition'
import useFacilitiesHotel from '@/hooks/useFacilities'
import useCheckboxGroup from '@/hooks/useCheckboxGroup'



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
    const {facilitiesHotel, setBestFacility} = useFacilitiesHotel()
    const {selected, CheckIsChecked, SetValueChecked} = useCheckboxGroup(facilitiesHotel.bestFacility)
      useEffect(()=>{
        setBestFacility(selected)
      },[selected])
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