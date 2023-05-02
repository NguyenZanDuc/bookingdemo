import React, {  } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import useAboutHotelForm from '@/hooks/useAboutHotelForm'
import COUNTRY from '@/CONST/CoutryOption'
import { TextField, TextareaAutosize } from '@mui/material'
type Props = {}

const FormE = (props: Props) => {
    const {aboutHotel, setDescriptionHotel} = useAboutHotelForm()
  return (
    <FormInput>
        <p>Mô tả chỗ nghỉ của bạn</p>
        <TextareaAutosize value={aboutHotel.description}
          onChange={(e)=>setDescriptionHotel(e.target.value)}
           className="min-h-[250px] w-full text-black z-0 p-2 border-[0.3px] border-gray-300" placeholder=''/>
    </FormInput>
  )
}

export default FormE