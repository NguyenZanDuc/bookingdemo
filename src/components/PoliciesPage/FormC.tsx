import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'

type Props = {}

const FormC = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'có, có trả phí', label: 'có, có trả phí' },
        { value: 'khác', label: 'khác' },
      ];
  return (
    <FormInput>
        <p className="text-xl">Nhận phòng</p>
        <p>từ:</p>
        <div className="flex gap-1">
            <div className="w-[86px] h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                <p>12:00</p>
            </div>
            <div className="w-[86px] h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                <p>14:00</p>
            </div>
            <div className="w-[86px] h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                <p>16:00</p>
            </div>
            <Select className="text-xs w-[86px] h-[38px] " value={options[2]}
                            options={options}/>
        </div>
        <p>đến:</p>
        <div className="flex gap-1">
            <div className="w-[86px] h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                <p>12:00</p>
            </div>
            <div className="w-[86px] h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                <p>22:00</p>
            </div>
            <div className="w-[86px] h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                <p>00:00</p>
            </div>
            <Select className="text-xs w-[86px] h-[38px] " value={options[2]}
                            options={options}/>
        </div>
    </FormInput>
  )
}

export default FormC