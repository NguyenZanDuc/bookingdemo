import { Checkbox } from '@mui/material'
import React, { useState } from 'react'

type Props = {
    isChecked:boolean,
    value: string
    setValue: Function
}

const FacilityOption = ({isChecked, value, setValue}: Props) => {
 
  return (

    <div className="flex items-center justify-start text-sm border-b-[0.4px] border-gray-400 border-dashed w-full">
        <Checkbox checked={isChecked} value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setValue(event.target.value, isChecked) }}/>
        <p >{value}</p>
    </div>
  )
}

export default FacilityOption