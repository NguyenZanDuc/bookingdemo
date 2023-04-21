import React from 'react'
import DivClick from '../ui/DivClick/DivClick'
import Select from 'react-select';

type Props = {}

const FormC = (props: Props) => {
    const options = [
        { value: 'choco', label: 'Choco' },
        { value: 'straw', label: 'Straw' },
        { value: 'van', label: 'Van' },
      ];
  return (
    <DivClick id={"#formCCreateRoom"} className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
        <p className="text-xl">Kính thước phòng (không bắt buộc)</p>
        <div className="w-[290px] h-[38px] flex">
            <input type="number" className="flex-1  border-[0.4px] border-gray-400 " name="" id="" />
            <Select className="flex-1 text-xs rounded-none" value={options[2]}
                            options={options}/>
        </div>
    </DivClick>
  )
}

export default FormC