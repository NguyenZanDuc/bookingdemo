import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AroundInputItem from './AroundInputItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { AccordionDetails } from '@mui/material';
type Props = {
    title: string,
    onChange: Function,
    aroundInit: string[]
}

const AroundHotelInput = ({title, onChange, aroundInit}: Props) => {
    const [list, setList] = useState<string[]>(aroundInit.length?aroundInit:[""]);
    useEffect(()=>{
        console.log(onChange)
        if(list){
            onChange(list);
        }
    },[list,onChange])
    function AddItem(){
        setList(pre=>[...pre, ""])
    }
    function RemoveItem(index: number){
        setList(pre=>{
            let newList = [...pre];
            newList.splice(index, 1);
            return newList;
        })
    }
  return (
        <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} > 
            <p className='text-base font-normal'>{title}</p>
        </AccordionSummary>
        <AccordionDetails className="max-h-[400px] overflow-scroll">
        <div className=' flex-1 z-10 min-w-[360px]'>
                     {list.map((item, index)=>(
                        <AroundInputItem key={index} index={index} onChange={(value: string)=>{
                            const newList = [...list];
                            newList[index] = value;
                            setList(newList);
                        }} 
                        onDelete={RemoveItem}
                        value={item}
                        />
                    ))}
                <button onClick={AddItem} className='text-sm text-blue-500'>Thêm điểm tham quan</button>
            </div>
        </AccordionDetails>
  </Accordion>
  )
}

export default AroundHotelInput