import { styled } from '@mui/material'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const Roomdiv = (props: Props) => {
    const { scrollY } = useScroll()
    const ref:any = useRef(null);
        const [isFiexd, setIsFiexd] = useState(false)
        useMotionValueEvent(scrollY, "change", (latest) => {
            const tableHeight =  ref.current?.offsetHeight
            const endTable = 1733 + tableHeight-74
            console.log(tableHeight)
        if(latest>1733&&latest<endTable){
           setIsFiexd(true)
        }else{
            setIsFiexd(false)
        }
        })
        const TheadFiexd = styled('div')(()=>{
            if(isFiexd){
                    return {
                        position: "fixed",
                        top:0,
                        left:0,
                        width:"100vw",
                        display: "flex",
                        justifyContent: "center",
                        transform: "translateX(-7px)"
                    }
                }
            return {
                position: "relative"
            }
            }
        )
  return (
    <div className="top-0 left-0 z-50 flex flex-col items-center justify-center w-[100vh] " ref={ref}>
            <TheadFiexd className="w-100vw[]">
                <div className="flex justify-center w-[1100] overflow-hidden h-[74px] text-sm text-start ">
                    <div className='border-[0.4px] w-[280px]  text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Loại chỗ ở</div>
                    <div className='border-[0.4px] w-[104px] text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Phù hợp cho</div>
                    <div className='border-[0.4px] w-[172px] text-white p-2 bg-[#01357F] border-[#5BBAFF]'>Giá hôm nay</div>
                    <div className='border-[0.4px] w-[262px] text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Các lựa chọn</div>
                    <div className='border-[0.4px] w-[60px] text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Chọn số lượng</div>
                    <div className="w-[218px] h-full  bg-[#4B76B1] border-[#5BBAFF]"></div>
                </div>
            </TheadFiexd>
            <div className="flex justify-center w-[100vw]">
                <div className=" h-[4000px] bg-slate-600 w-[1100px] ">
                        <div>l</div>
                </div>
            </div>
    </div>
  )
}

export default Roomdiv