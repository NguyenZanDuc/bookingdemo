import React, { useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select, { SingleValue } from 'react-select'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import TYPEBED from '@/CONST/TypeBed'
import NUMBERBED from '@/CONST/Numberbed'
import { MdDeleteForever } from 'react-icons/md'
import { Guid } from 'guid-typescript'
import useRoomHotel from '@/hooks/useRoomHotel'

type Props = {}



const FormB = (props: Props) => {
    const {roomHotel,setBedOption, setNumberPeople} = useRoomHotel();
    const [beds, setBeds] = useState([{typeBed:"Giường đơn   /  Rộng 90-130 cm",number:1}])
    const typeBedOptions = TYPEBED.map((typeBed)=>{
        return {
            value: typeBed,
            label: typeBed
        }})
    const numberBedOptions = NUMBERBED.map((numberBed)=>{
        return {
            value: numberBed,
            label: numberBed
        }})
        function HandleTypeBedChange(e :SingleValue<{value: string;label: string;}>|any, index: number){
               beds[index] = {typeBed: e.value , number:beds[index].number }
                 setBeds([...beds])
                 setBedOption(beds)

        }
        function HandleNumberBedChange(e :SingleValue<{value: string;label: string;}>|any, index: number){
            beds[index] ={typeBed:beds[index].typeBed, number: e.value}
            setBeds([...beds])
            setBedOption(beds)
   }
        function HandleDeleteBedOption(index: number){
            setBeds(bedsPrev=>bedsPrev.filter((bed,index1)=>index1!=index))
            setBedOption(beds)
        }
  return (
    <FormInput >
        <p className="text-xl">Tùy chọn giường</p>
        <p className="text-xs text-gray-500 bg-[#E6E6E6] p-2">Hãy cho chúng tôi biết về giường có sẵn trong phòng. Không bao gồm giường phụ.</p>
       
        <div className="flex flex-col gap-4">
           {beds.map((bed, index)=>{
            return (
                <div key={index} >
                    <p className="text-sm">Phòng này có loại giường nào? </p>
                    <div className='flex items-center gap-4 '>
                        <Select className="w-[350px] text-sm" value={{value:bed.typeBed, label: bed.typeBed}} onChange={(e)=>HandleTypeBedChange(e, index)}                                     
                                    options={typeBedOptions}/>
                        <p>x</p>
                        <Select className="w-[230px]" value={{label:bed.number, value: bed.number}}    onChange={(e)=>{HandleNumberBedChange(e, index)}}
                                    options={numberBedOptions} />
                    {(index!=0)&&<button className="z-50 p-2 cursor-pointer" onClick={()=>{HandleDeleteBedOption(index)}}><MdDeleteForever /></button>}
                    </div>
                </div>
            )})}
        </div>
        <button className="z-0 flex items-center text-xs " onClick={()=>{setBeds(beds=> [...beds, {typeBed:"Giường đơn   /  Rộng 90-130 cm", number: 1}])}}>
                        <AiFillPlusCircle  className="text-[#2A6496]"/>
                        <p className="text-[#2A6496] hover:underline">Thêm giường khác</p>
        </button>
        <div className="z-0">
                <p className="py-2 text-sm">Bao nhiêu khách có thể nghỉ trong phòng này?</p>
                <div className="flex items-center gap-2 ">
                    <input type="number" value={roomHotel.numberPeople} onChange={(e)=>setNumberPeople(Number(e.target.value))}  className='w-[90px] h-[40px] border-[0.4px] border-gray-400 rounded-sm' name="" id="" />
                    <FaUser />
                </div>
        </div>
    </FormInput>
  )
}

export default FormB