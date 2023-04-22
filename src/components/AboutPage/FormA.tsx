
import { MenuItem, Select } from '@mui/material'
import React, {  } from 'react'
import useAboutHotelForm from '@/hooks/useAboutHotelForm'
import FormInput from '../ui/FormInput/FormInput'
type Props = {}
const FormA = (props: Props) => {

  const {aboutHotel,setNameHotel, setStarHotel} = useAboutHotelForm();

  return (
    <FormInput >
            <p className="text-xl">Tên của chỗ nghỉ là gì? </p>
            <input type="text" value={aboutHotel.nameHotel} onChange={(e)=>{setNameHotel(e.target.value)}} className="border-[0.4px] z-10 px-2 border-gray-300 rounded-sm w-[40%] text-base py-2 "/>
            <p className="text-xs">Tên này sẽ được hiển thị tới khách khi họ tìm kiếm chỗ nghỉ.</p>
            <p className="text-sm">Xếp hạng sao</p>
            <Select
                className="w-[300px]"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={aboutHotel.star}
                onChange={(e)=>{setStarHotel(e.target.value)}}
                defaultValue='Không áp dụng'
            >
                <MenuItem value={"Không áp dụng"}>Không áp dụng</MenuItem>
                <MenuItem value={1}>1 ✯
                </MenuItem>
                <MenuItem value={2}>2 ✯✯
                </MenuItem>
                <MenuItem value={3}>3 ✯✯✯
                </MenuItem>
                <MenuItem value={4}>4 ✯✯✯✯
                </MenuItem>
                <MenuItem value={5}>5 ✯✯✯✯✯
                </MenuItem>
            </Select>
        </FormInput>
  )
}

export default FormA