import React, { useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select from 'react-select'
import { ENDCHECKIN, STARTCHECKIN } from '@/CONST/Time'

type Props = {
    onChange?: Function
}
type DivStarProp={
    timeValue: string
}
type DivEndProp={
    timeValue: string
}
const FormCI = ({onChange}: Props) => {
    const [startTime, setStartTime] = useState("12:00")
    const [endTime, setEndTime] = useState("12:00")
    const optionsStartTime = STARTCHECKIN.map((element)=>{
        return {
            value: element,
            label: element
        }
    })
    const optionsEndTime = ENDCHECKIN.map((element)=>{
        return {
            value: element,
            label: element
        }
    })
    function HandleSetStartTime(timeValue: string){
        setStartTime(timeValue)
        console.log(startTime)
       if(onChange)onChange(`${timeValue}-${endTime}`)
    }
    function HandleSetEndTime(timeValue: string){
        setEndTime(timeValue)

        if(onChange)onChange(`${startTime}-${timeValue}`)
    }
      const DivStartRadio = ({timeValue}:DivStarProp)=>{
        if(startTime==timeValue){
            return  (<div className="cursor-pointer w-[86px] bg-[#EAF3FF] h-[38px] border-[0.4px] border-[#0171C2] rounded-sm flex justify-center items-center">
                    <p>{timeValue}</p>
                </div>)
        }
        return  (<div onClick={()=>{HandleSetStartTime(timeValue)}} className="w-[86px] cursor-pointer h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                    <p>{timeValue}</p>
                </div>)
      }
      const DivEndRadio =  ({timeValue}:DivEndProp)=>{
        if(endTime==timeValue){
            return  (<div  className="cursor-pointer w-[86px] bg-[#EAF3FF] h-[38px] border-[0.4px] border-[#0171C2] rounded-sm flex justify-center items-center">
                        <p>{timeValue}</p>
                    </div>)
                    }
            return  (<div onClick={()=>{HandleSetEndTime(timeValue)}} className="w-[86px] cursor-pointer h-[38px] border-[0.4px] border-gray-400 rounded-sm flex justify-center items-center">
                                <p>{timeValue}</p>
                            </div>)
      }
  return (
    <FormInput>
        <p className="text-xl">Nhận phòng</p>
        <p>từ:</p>
        <div className="z-20 flex gap-1">
            <DivStartRadio timeValue="12:00" />
            <DivStartRadio timeValue="14:00"/>
            <DivStartRadio timeValue="16:00"/>
            {(startTime=="12:00"||startTime=="14:00"||startTime=="16:00")?(
                <select id="" className="outline-none border-[0.4px] border-gray-500 rounded-sm w-[86px]" onChange={(e)=>{HandleSetStartTime(e.target.value)}}>
                    {optionsStartTime.map((value, index)=>{
                        return <option key={index} value={value.value}>{value.value}</option>
                    })}
                 </select>
            ):(
                <select id="" className="outline-none border-[0.4px]  bg-[#EAF3FF] border-[#0171C2]  rounded-sm w-[86px]" onChange={(e)=>{HandleSetStartTime(e.target.value)}}>
                    {optionsStartTime.map((value, index)=>{
                        return <option key={index} value={value.value}>{value.value}</option>
                    })}
                 </select>
            )}
        </div>
        <p>đến:</p>
        <div className="z-20 flex gap-1">
            <DivEndRadio timeValue="12:00" />
            <DivEndRadio timeValue="22:00"/>
            <DivEndRadio timeValue="00:00"/>
            {(endTime=="12:00"||endTime=="22:00"||endTime=="00:00")?(
                <select id="" className="outline-none border-[0.4px] border-gray-500 rounded-sm w-[86px]" onChange={(e)=>{HandleSetEndTime(e.target.value)}}>
                    {optionsEndTime.map((value, index)=>{
                        return <option key={index} value={value.value}>{value.value}</option>
                    })}
                 </select>
            ):(
                <select id="" className="outline-none border-[0.4px]  bg-[#EAF3FF] border-[#0171C2]  rounded-sm w-[86px]" onChange={(e)=>{HandleSetEndTime(e.target.value)}}>
                    {optionsEndTime.map((value, index)=>{
                        return <option key={index} value={value.value}>{value.value}</option>
                    })}
                 </select>
            )}
        </div>
    </FormInput>
  )
}

export default FormCI