import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import useFacilitiesHotel from '@/hooks/useFacilities'

type Props = {}

const FormA = (props: Props) => {
  const {facilitiesHotel, setPark} = useFacilitiesHotel()
    const options = [
        { value: 'không', label: 'không' },
        { value: 'có, có trả phí', label: 'có, có trả phí' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ];
  return (
    <FormInput >
        <p className="py-2 text-xl font-light">Chỗ đậu xe</p>
        <p className='text-xs text-gray-500 bg-[#E6E6E6] p-2'>Thông tin này đặc biệt quan trọng đối với những khách đến chỗ nghỉ của Quý vị bằng ô tô.</p>
        <div>
            <p className="py-2 text-sm">Qúy vị có chỗ đậu xe cho khách không?</p>
            <Select className="w-1/2 text-xs " value={{value:facilitiesHotel.park ,label: facilitiesHotel.park}} onChange={(e:any)=>{setPark(e.value)}}
                            options={options}/>
        </div>
    </FormInput>
  )
}

export default FormA