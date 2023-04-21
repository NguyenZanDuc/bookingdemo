import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'

type Props = {}

const FormE = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'có, có trả phí', label: 'có, có trả phí' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ];
  return (
    <FormInput>
        <p className="py-2 text-xl font-light">Vật nuôi</p>
        <p className='text-xs text-gray-500 bg-[#E6E6E6] p-2'>Một số khách thích đi du lịch cùng vật nuôi của họ. Xin cho biết Quý vị có cho phép vật nuôi vào chỗ nghỉ không và có tính phí gì không.</p>
        <div>
            <p className="py-2 text-sm">Quý vị có cho phép vật nuôi vào không?</p>
            <Select className="text-xs w-[360px]" value={options[0]}
                            options={options}/>
        </div>
    </FormInput>
  )
}

export default FormE