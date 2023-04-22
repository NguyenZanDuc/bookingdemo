import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select';
import useRoomHotel from '@/hooks/useRoomHotel';

type Props = {}

const FormC = (props: Props) => {
    const {roomHotel, setRoomSize} = useRoomHotel()
    const options = [
        { value: 'mét vuông', label: 'mét vuông' },
        { value: 'feet vuông', label: 'feet vuông' }
      ];
  return (
    <FormInput >
        <p className="text-xl">Kính thước phòng (không bắt buộc)</p>
        <div className="w-1/2 h-[38px] flex z-10 ">
            <input type="number" value={roomHotel.roomSize} onChange={(e)=>setRoomSize(Number(e.target.value))} className="flex-1 p-2  border-[0.4px] border-gray-400 " name="" id="" />
            <Select className="text-xs rounded-none" value={options[2]} 
                            options={options}/>
        </div>
    </FormInput>
  )
}

export default FormC