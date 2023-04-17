import React from 'react'
import {GrAdd} from 'react-icons/gr'
import {HiOutlineMinus} from 'react-icons/hi'
import {useNumber} from 'react-hanger'


type Props = {
    onChange?: Function
}

const SelectNumber = ({onChange}: Props) => {
    const rotatingNumber = useNumber(0, {
        lowerLimit: 0,
        upperLimit: 6,
        loop: false,
      });
  return (
    <div className="flex justify-around items-center border-[0.4px] p-2 gap-8 border-gray-400">
        <HiOutlineMinus onClick={()=>{
                                rotatingNumber.decrease();
                                if(onChange)onChange(rotatingNumber);
                                        }}/>
        <p>{rotatingNumber.value}</p>
        <GrAdd onClick={()=>{
                                rotatingNumber.increase()
                                if(onChange)onChange(rotatingNumber);
                                        }}/>
    </div>
  )
}

export default SelectNumber