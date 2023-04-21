import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select';

type Props = {}

const FormC = (props: Props) => {
    const options = [
        { value: 'choco', label: 'Choco' },
        { value: 'straw', label: 'Straw' },
        { value: 'van', label: 'Van' },
      ];
  return (
    <FormInput >
        <p className="text-xl">Kính thước phòng (không bắt buộc)</p>
        <div className="w-[290px] h-[38px] flex">
            <input type="number" className="flex-1  border-[0.4px] border-gray-400 " name="" id="" />
            <Select className="flex-1 text-xs rounded-none" value={options[2]}
                            options={options}/>
        </div>
    </FormInput>
  )
}

export default FormC