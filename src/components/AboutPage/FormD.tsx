import React, {  } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import useAboutHotelForm from '@/hooks/useAboutHotelForm'
import COUNTRY from '@/CONST/CoutryOption'
type Props = {}

const FormD = (props: Props) => {
    const {aboutHotel, setStreetHotel, setMoreAddressHotel, setCountrysHotel, setCityHotel, setPortalCodeHotel } = useAboutHotelForm();
    const options = COUNTRY.map((country)=>{
        return { value: country , label: country }
    })
  
  return (
    <FormInput >
        <p>Chỗ nghỉ tọa lạc ở đâu?</p>
        <div className="flex gap-6 ">
            <div className='flex-1 z-10 min-w-[360px]'>
                <div className="">
                    <p className='py-2 text-sm'>Địa chỉ phố</p>
                    <input type="text" value={aboutHotel.street} onChange={(e)=>{setStreetHotel(e.target.value)}} placeholder='Ví dụ: 123 Điện Biên Phủ' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px] z-10"/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Dòng địa chỉ 2</p>
                    <input type="text" value={aboutHotel.moreAddress} onChange={(e)=>{setMoreAddressHotel(e.target.value)}} placeholder="Số nhà, tầng, toà nhà, v.v..." className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px] z-10"/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Vùng/quốc gia</p>
                    <Select className="w-1/2" value={{value: aboutHotel.country, label: aboutHotel.country}} onChange={(e:any)=>{setCountrysHotel(e.value)}} 
                        options={options}/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Thành phố</p>
                    <input type="text" value={aboutHotel.city} onChange={(e)=>{setCityHotel(e.target.value)}} placeholder='Ví dụ: 123 Điện Biên Phủ' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px] z-10"/>
                </div>
                <div>
                    <p className='py-2 text-sm'>Mã bưu chính</p>
                    <input type="text" value={aboutHotel.portalCode} onChange={(e)=>{setPortalCodeHotel(e.target.value)}} placeholder='' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px] z-10"/>
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
    </FormInput>
  )
}

export default FormD