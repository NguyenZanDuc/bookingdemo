import React from 'react'
import DivClick from '../ui/DivClick/DivClick'
import Select from 'react-select'


type Props = {}

const FormB = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'có, có trả phí', label: 'có, có trả phí' },
        { value: 'có, miễn phí', label: 'có, miễn phí' },
      ];
  return (
    <DivClick id={"#formBFacilities"} className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
        <p  className="py-2 text-xl font-light">Bữa sáng</p>
        <div>
            <p className="py-2 text-sm">Qúy vị có phục vụ bữa sáng cho khách không?</p>
            <Select className="min-w-1/2 tex-xs" value={options[2]}
                            options={options}/>
        </div>
    </DivClick>
  )
}

export default FormB