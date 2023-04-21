import React from 'react'
import DivClick from '../ui/DivClick/DivClick'
import Select from 'react-select'
import { AiFillPlusCircle } from 'react-icons/ai'

type Props = {}

const FormC = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'Tieng Viet', label: 'Tieng Viet' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ];
  return (
    <DivClick id={"#formCCreateRoom"} className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
        <p className="py-2 text-xl font-light">Ngôn ngữ được sử dụng</p>
        <p className='text-xs text-gray-500 bg-[#E6E6E6] p-2'>Ngôn ngữ Quý vị hoặc nhân viên sử dụng?</p>
        <div>
            <Select className="text-xs min-w-[360px]" value={options[1]}
                            options={options}/>
        </div>
        <button className="flex items-center text-xs ">
                <AiFillPlusCircle  className="text-[#2A6496]"/>
                <p className="text-[#2A6496] hover:underline">Thêm ngôn ngữ</p>
        </button>
    </DivClick>
  )
}

export default FormC