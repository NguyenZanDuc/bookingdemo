import React from 'react'
import DivClick from '../ui/DivClick/DivClick'
import Select from 'react-select';

type Props = {}

const FormA = (props: Props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
  return (
    <DivClick id={"#formAFacilities"} className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
        <div>
            <p className="py-2 text-sm">Phòng giường đôi</p>
            <Select className="w-[370px]" value={options[2]}
                            options={options}/>
        </div>
        <div className="flex justify-between gap-5">
            <div>
                <p className="py-2 text-sm">Phòng giường đôi</p>
                <Select className="w-[370px]" value={options[2]}
                                options={options}/>
                <p className='py-1 text-xs text-gray-500'>Đây là tên mà khách sẽ thấy trên trang web Booking.com.</p>
            </div>
            <div>
                <p className="py-2 text-sm">Tên tùy chọn (không bắt buộc)</p>
                <input type="text" placeholder="" className="placeholder:text-xs placeholder:text-gray-400 w-[370px] h-[37px] p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
                <p className='py-1 text-xs text-gray-500'>Tạo tên tùy chọn cho riêng Quý vị tham khảo (không bắt buộc).</p>
             </div>
        </div>
        <div>
            <p className="py-2 text-sm">Chính sách về hút thuốc</p>
                <Select className="w-[370px]" value={options[2]}
                                options={options}/>
            <p className='py-1 text-xs text-gray-500'>Đây là tên mà khách sẽ thấy trên trang web Booking.com.</p>
        </div>
        <div>
            <p  className="py-2 text-sm">Số phòng (loại này)</p>
            <input type="text"  className="w-[60px] h-[40px] border-[0.4px] border-gray-400 rounded-sm"/>
        </div>
    </DivClick>  
    )
}

export default FormA