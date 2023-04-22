import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select';
import NAMEROOM from '@/CONST/NameRoom';
import useRoomHotel from '@/hooks/useRoomHotel';
import TYPEROOM from '@/CONST/TypeRoom';

type Props = {}

const FormA = (props: Props) => {
    const typeRoomOptions = TYPEROOM.map((nameroom)=>{
        return {
            value: nameroom,
            label: nameroom
        }})
    const nameRoomOptions = NAMEROOM.map((nameroom)=>{
        return {
            value: nameroom,
            label: nameroom
        }
    }) 
    const {roomHotel, setTypeRoom, setNameOption, setNameRoom, setSmoking, setNumberRoom} = useRoomHotel();
    const smokingOption = [{value: "Không hút thuốc", label: "Không hút thuốc"},{value: "Hút thuốc", label: "Hút thuốc"},{value: "Chúng tôi có tuỳ chọn cho hút thuốc", label: "Chúng tôi có tuỳ chọn cho hút thuốc"}]
  return (
    <FormInput >
        <p className='text-2xl'>{roomHotel.typeRoom}</p>
        <p className="py-2 text-sm">Loại phòng</p>
        <Select className="w-[370px] z-40 text-sm" value={{value: roomHotel.typeRoom, label: roomHotel.typeRoom}} onChange={(e:any)=>{setTypeRoom(e.value)}}
                                options={typeRoomOptions}/>
        <p className='py-1 text-xs text-gray-500'>Đây là tên mà khách sẽ thấy trên trang web Booking.com.</p>
        <div className="z-30 flex justify-between gap-5">
            <div>
                <p className="py-2 text-sm">Tên phòng</p>
                <Select className="w-[370px] text-sm" value={{label: roomHotel.nameRoom, value: roomHotel.nameRoom}} onChange={(e:any)=>setNameRoom(e.value)}
                                options={nameRoomOptions}/>
                <p className='py-1 text-xs text-gray-500'>Đây là tên mà khách sẽ thấy trên trang web Booking.com.</p>
            </div>
            <div className="">
                <p className="py-2 text-sm">Tên tùy chọn (không bắt buộc)</p>
                <input type="text" placeholder="" value={roomHotel.nameOption} onChange={(e)=>setNameOption(e.target.value)} className="placeholder:text-xs placeholder:text-gray-400 w-[370px] h-[37px] p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px]"/>
                <p className='py-1 text-xs text-gray-500'>Tạo tên tùy chọn cho riêng Quý vị tham khảo (không bắt buộc).</p>
             </div>
        </div>
        <div className="z-20">
            <p className="py-2 text-sm">Chính sách về hút thuốc</p>
                <Select className="w-[370px] z-10 text-sm" value={{value: roomHotel.smoking, label: roomHotel.smoking}} onChange={(e:any)=>setSmoking(e.label)}
                                options={smokingOption}/>
            <p className='py-1 text-xs text-gray-500'>Đây là tên mà khách sẽ thấy trên trang web Booking.com.</p>
        </div>
        <div className='z-10'>
            <p  className="py-2 text-sm">Số phòng (loại này)</p>
            <input type="text" value={roomHotel.numberRoom} onChange={(e)=>setNumberRoom(Number(e.target.value))} className="w-[60px] h-[40px] border-[0.4px] border-gray-400 rounded-sm"/>
        </div>
    </FormInput>  
    )
}

export default FormA