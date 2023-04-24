import React, { useEffect, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

type Props = {
    selection: string,
    onChange: Function,
    className?: string,
    title: string,
    description: string
}

const CardPropertyOption = ({selection,  onChange, className, title, description}: Props) => {
    const [isSlected, setIsSelected] = useState(false);
    useEffect(()=>{
        if(selection==title){
            setIsSelected(true)
            return
        }
        setIsSelected(false)
    },[selection])
    function HandleClick(){
        onChange(title);
    }
    let result = isSlected?(
    <div className={`border-[3px] ${className}  border-[#0171C2] `}>
        <div onClick={HandleClick} className="relative w-full h-full z-0 flex flex-col gap-5 border-[0.5px] border-transparent p-4  ">
            <p className="text-base font-semibold ">{title}</p>
            <p className="text-xs">{description}</p>
            <BsFillCheckCircleFill className="absolute top-0 right-0 z-10 w-5 h-5 translate-x-1/2 -translate-y-1/2 text-[#0171C2] bg-white"/>
        </div>
    </div>
    ):(
        <div className={`"border-[3px] border-transparent ${className} `}>
            <div onClick={HandleClick}  className=" w-full h-full relative z-0  flex flex-col gap-5  p-4 border-[0.5px] border-gray-300">
                <p className="text-base font-semibold ">{title}</p>
                <p className="text-xs">{description}</p>
                <BsFillCheckCircleFill className="hidden top-0 right-0 z-10 w-5 h-5 translate-x-1/2 -translate-y-1/2 text-[#0171C2] bg-white"/>
            </div>
        </div>
    )
  return (
    <>
        {result}
    </>
    
  )
}

export default CardPropertyOption