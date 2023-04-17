import { Checkbox } from '@mui/material'
import React from 'react'

type Props = {
    isChecked:boolean,
    value: string,
    quanlity: number
    setValue?: Function
}

const FilterOption = ({isChecked, value, quanlity, setValue}: Props) => {
  return (
    <div className="flex items-center justify-start gap-2 text-xs text-gray-800 ">
        <Checkbox checked={isChecked} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{ if(setValue)setValue(event.target.checked)}}/>
        <p >{value}</p>
        <p className="ml-auto">{quanlity}</p>
    </div>
  )
}

export default FilterOption