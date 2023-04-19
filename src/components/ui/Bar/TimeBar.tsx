import { styled } from '@mui/material'
import React from 'react'

type Props = {
    startTime: string,
    endTime:string
}
function HourToPercentDay(hour:string){
    let time = hour.split(":")
    let timeValue = Number(time[0])+Number(time[1])/60
    let percent = timeValue/24
    return percent*100
}
const TimeBar = ({startTime, endTime}: Props) => {
    
    
    const leftOffset = HourToPercentDay(startTime)
    const spaceTime = HourToPercentDay(endTime)-leftOffset
    const DivSpaceTime = styled('div')({
        width: `${spaceTime}%`,
        left: `${leftOffset}%`,

    })
  return (
    <div className="w-auto h-[100px] flex justify-start items-center">
        <div className="w-[320px]  relative h-5 rounded-xl bg-[#EDEDED] border-[0.5px] border-gray-500">
            <DivSpaceTime className="absolute text-xs top-0 h-5 bg-[#00800A]">
                <p className="absolute -left-4 bottom-6">{startTime}</p>
                <p className="absolute -right-4 bottom-6">{endTime}</p>
                <div className="text-xs px-2 py-1 rounded-sm border-[0.5px] border-gray-500 absolute top-8 left-1/2 -translate-x-1/2 w-[100px] bg-white">
                    {startTime} - {endTime}
                    <div className="absolute w-3 h-3 rotate-45 border-t-[0.5px] border-l-[0.5px] border-gray-500 bg-white -top-[6px] left-1/2 -translate-x-1/2"></div>
                </div>
            </DivSpaceTime>
        </div>
    </div>
  )
}

export default TimeBar