import React from 'react'
import DivClick from '../ui/DivClick/DivClick'
import Select from 'react-select'

type Props = {}

const FormA = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'có, có trả phí', label: 'có, có trả phí' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ];
  return (
    <DivClick id={"#formACreateRoom"} className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
        <p className="py-2 text-xl font-light">Chỗ đậu xe</p>
        <p className='text-xs text-gray-500 bg-[#E6E6E6] p-2'>Thông tin này đặc biệt quan trọng đối với những khách đến chỗ nghỉ của Quý vị bằng ô tô.</p>
        <div>
            <p className="py-2 text-sm">Qúy vị có chỗ đậu xe cho khách không?</p>
            <Select className="text-xs min-w-1/2" value={options[2]}
                            options={options}/>
        </div>
    </DivClick>
  )
}

export default FormA