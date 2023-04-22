import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import useFacilitiesHotel from '@/hooks/useFacilities'


type Props = {}

const FormB = (props: Props) => {
    const {facilitiesHotel, setHaveBreakFast} = useFacilitiesHotel()
    const options = [
        { value: 'Không', label: 'Không' },
        { value: 'Có, đã bao gồm trong giá phòng ', label: 'Có, đã bao gồm trong giá phòng' },
        { value: 'Có, tuỳ chọn', label: 'Có, tuỳ chọn' },
      ];
  return (
    <FormInput >
        <p  className="py-2 text-xl font-light">Bữa sáng</p>
        <div>
            <p className="py-2 text-sm">Qúy vị có phục vụ bữa sáng cho khách không?</p>
            <Select className="w-1/2 tex-sm " value={{value:facilitiesHotel.haveBreakFast, label: facilitiesHotel.haveBreakFast}} onChange={(e:any)=>{setHaveBreakFast(e.value)}}
                            options={options}/>
        </div>
    </FormInput>
  )
}

export default FormB