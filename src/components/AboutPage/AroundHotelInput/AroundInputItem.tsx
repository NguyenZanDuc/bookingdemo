import { DeleteForever } from '@mui/icons-material';
import React, { useEffect } from 'react'

type Props = {
    onChange?: Function,
    onDelete: Function,
    index: number,
    value?: string
}

const AroundInputItem = ({onChange, onDelete, index,value}: Props) => {
    const [address, setAddress] = React.useState(value?value.split('-')[0]:'');
    const [long, setLong] = React.useState(value?value.split('-')[1]:'');
    useEffect(()=>{
        if(onChange)onChange(`${address}-${long}`)
    },[address, long])
  return (
        <div className="flex items-end gap-3">
            <div className='flex-1'>
                <label htmlFor="address" className='text-sm'>Tên địa điểm</label>
                <input value={address} 
                        onChange={(e)=>setAddress(e.target.value)}
                        type="text" id='address' placeholder='Ví dụ: 123 Điện Biên Phủ' className="placeholder:text-xs placeholder:text-gray-400 w-full p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px] z-10"/>

            </div>
            <div>
                <label htmlFor="long" className='text-sm'>Khoảng cách</label>
                <div className='flex items-center gap-2'>
                    <input value={long}
                            onChange={(e)=>setLong(e.target.value)}
                    id='long' type="text" placeholder='' className="placeholder:text-xs placeholder:text-gray-400 w-1/2 p-2 border-[0.3px] border-gray-500 rounded-sm outline-[0.6px] z-10"/>
                    <p className='text-sm'>m</p>
                    <div onClick={()=>{onDelete(index)}} className="flex items-center justify-center h-full ml-5 cursor-pointer">
                        <DeleteForever />
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default AroundInputItem