import React, {  } from 'react'
import DivClick from '../ui/DivClick/DivClick'
import Select from 'react-select'
type Props = {}

const FormD = (props: Props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
  return (
    <DivClick id={"#FormD"}  className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white text-sm">
        <p>Chỗ nghỉ tọa lạc ở đâu?</p>
        <div className="flex gap-6">
            <div className='flex-1 min-w-[360px]'>
                <div>
                    <p className='py-2 text-sm'>Địa chỉ phố</p>
                    <input type="text" placeholder='Ví dụ: 123 Điện Biên Phủ' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Dòng địa chỉ 2</p>
                    <input type="text" placeholder="Số nhà, tầng, toà nhà, v.v..." className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Vùng/quốc gia</p>
                    <Select className="w-1/2" value={options[2]}
                        options={options}/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Thành phố</p>
                    <input type="text" placeholder='Ví dụ: 123 Điện Biên Phủ' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Mã bưu chính</p>
                    <input type="text" placeholder='' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
                </div>
            </div>
            <div className='gap-2 p-2 lg:flex   border-[0.3px] border-gray-500 h-[200px] w-[360px] hidden'>
                <div className=" w-[60px] h-[60px]" >
                    <img src="https://q.bstatic.com/static/img/join/letter-verification-icon.png" className="object-contain w-full h-full " alt="" />
                </div>
                <div className="w-[60%]">
                    <p className='text-lg font-normal'>Địa chỉ của Quý vị quan trọng</p>
                    <p className="text-xs text-gray-500">Vui lòng cung cấp đầy đủ thông tin về địa chỉ của chỗ nghỉ, bao gồm tên và số tòa nhà v.v. Dựa trên thông tin Quý vị cung cấp, có thể chúng tôi sẽ gửi thư qua đường bưu điện để xác minh địa chỉ.</p>
                </div>
            </div>
        </div>
    </DivClick>
  )
}

export default FormD