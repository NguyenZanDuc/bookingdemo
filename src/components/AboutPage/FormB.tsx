import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import DivClick from '../ui/DivClick/DivClick'
import ReactFlagsSelect from 'react-flags-select'

type Props = {}

const FormB = (props: Props) => {

    const [selected, setSelected] = useState("GB");
  return (
    <DivClick id={"#formB"}  className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
        <p className="text-xl">Chi tiết liên hệ của chỗ nghỉ là gì?</p>
        <p className="text-sm">Tên người liên hệ</p>
        <div >
            <TextField className="w-full" label="Tên người liên hệ" value="duc nguyen"/>
        </div>
        <div>
            <p className="text-sm">Số điện thoại liên lạc (để chúng tôi có thể hỗ trợ đăng ký của Quý vị khi cần)</p>
            <div className="flex justify-between gap-10 py-6">
                    <div className="flex-1">
                        <p className="text-sm" >Số điện thoại</p>
                        <div className="flex justify-start gap-2 border-[0.4px] border-gray-300 items-center  flex-1  p-2 rounded-sm">
                            <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    showSelectedLabel={false}
                                    showOptionLabel={false}
                                    placeholder=""
                                    optionsSize={26}
                        
                                />
                            <input type="text" className="w-full text-base outline-none"/>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm" >Số điện thoại khác (không bắt buộc)</p>
                        <div className="flex justify-start gap-2 border-[0.4px] border-gray-300 items-center  flex-1  p-2 rounded-sm">
                            <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    showSelectedLabel={false}
                                    showOptionLabel={false}
                                    placeholder=""
                                    optionsSize={26}
                        
                                />
                            <input type="text" className="w-full text-base outline-none"/>
                        </div>
                    </div>
                 
            </div>
        </div>
        <p className="w-[50%] text-sm leading-5">Quý vị có sở hữu nhiều khách sạn khác nhau, hoặc là thành viên của một chuỗi hay công ty quản lý bất động sản nào không?</p>
        <FormControl>
            <RadioGroup row name="radio" className="flex w-full gap-4">
              <FormControlLabel value={1} className="border-[0.4px] border-gray-400 rounded-md px-2 min-w-[100px]" control={<Radio />} label={"Có"} />
              <FormControlLabel value={2} className="border-[0.4px] border-gray-400 rounded-md px-2 min-w-[100px]" control={<Radio />} label={"Không"} />
            </RadioGroup>
          </FormControl>
         
    </DivClick>
  )
}

export default FormB