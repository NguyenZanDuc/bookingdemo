import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'

type Props = {}

const FormB = (props: Props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
  return (
    <FormInput >
        <p className="text-xl">Tùy chọn giường</p>
        <p className="text-xs text-gray-500 bg-[#E6E6E6] p-2">Hãy cho chúng tôi biết về giường có sẵn trong phòng. Không bao gồm giường phụ.</p>
        <div className="flex flex-col gap-4">
            <p className="text-sm">Phòng này có loại giường nào?</p>
            <div className='flex gap-4'>
                <Select className="w-[350px]" value={options[2]}
                            options={options}/>
                <p>x</p>
                <Select className="w-[230px]" value={options[2]}
                            options={options}/>
            </div>
            <button className="flex items-center text-xs ">
                <AiFillPlusCircle  className="text-[#2A6496]"/>
                <p className="text-[#2A6496] hover:underline">Thêm giường khác</p>
            </button>
            <div >
                <p className="px-4 text-xs">Bao nhiêu khách có thể nghỉ trong phòng này?</p>
                <div className="flex items-center gap-2 ">
                    <input type="number" className='w-[90px] h-[40px] border-[0.4px] border-gray-400 rounded-sm' name="" id="" />
                    <FaUser />
                </div>
            </div>
        </div>
    </FormInput>
  )
}

export default FormB