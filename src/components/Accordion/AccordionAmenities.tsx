import { AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import React, { useEffect, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { INSIDEROOM } from '@/CONST/Amenities';
type Props = {
    title: string,
    options: string[],
    onChange?: Function
}

const AccordionAmenities = ({title, options, onChange}: Props) => {
    const [list, setList] = useState<string[]>();
    function HandleCheckbox(e:any, value: string){
        if(e.target.checked){
            setList(pre=>{
                if(pre)return[...pre, value]
                return [value]
            })
        }else{
            setList(pre=>{
               let newPre = pre?.filter(item=>item!=value);
               return newPre
            })
        }
    }
    useEffect(()=>{
        if(onChange)(onChange(list))
    },[list])
  return (
    <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} > 
            <div className="flex justify-between w-full px-2">
                <Typography sx={{ width: '50%', flexShrink: 0 }}>
                   {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{list?.length??0}/{options.length} được chọn</Typography>
            </div>
        </AccordionSummary>
        <AccordionDetails className="max-h-[400px] overflow-scroll">
            {options.map((element, index)=>{
                    return (<label key={index} className="flex gap-3 p-2 bg-gray-200 border-b-[0.5px] border-gray-400">
                                <input type="checkbox" onChange={(e)=>{HandleCheckbox(e, element)}}/>
                                <span className='text-sm'>{element}</span>
                            </label>)}
            )}
        </AccordionDetails>
  </Accordion>


  )
}

export default AccordionAmenities