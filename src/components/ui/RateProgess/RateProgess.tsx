import { styled } from '@mui/material'
import React from 'react'

type Props = {
title: string,
point: number,
color?: string
}

const RateProgess = ({title, point, color='#01357F'}: Props) => {
    const value = point*10;
    
    const DivProgess = styled('div')(()=>{
        return {
            width: `${value}%`,
            backgroundColor: color
        }
    })
  return (
    <div className="w-[300px]">
        <div className="flex justify-between py-2 text-sm font-normal">
            <p>{title}</p>
            <p>{point}</p>
        </div>
        <div className="relative bg-[#F2F2F2] w-full h-2 rounded-full">
            <DivProgess className="absolute top-0 left-0 h-2 rounded-full "></DivProgess>
        </div>
    </div>
  )
}

export default RateProgess