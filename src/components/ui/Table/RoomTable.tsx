import { MenuItem, Select, styled } from '@mui/material'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { GiCoffeeCup } from 'react-icons/gi'
import {AiOutlineCheck} from 'react-icons/ai'

type Props = {}

const Roomdiv = (props: Props) => {
    const { scrollY } = useScroll()
    const ref:any = useRef(null);
        const [isFiexd, setIsFiexd] = useState(false)
        useMotionValueEvent(scrollY, "change", (latest) => {
            const tableHeight =  ref.current?.offsetHeight
            const startTable = ref.current?.offsetTop-4
            const endTable = startTable + tableHeight-74
            console.log(startTable)
        if(latest>startTable&&latest<endTable){
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
                        transform: "translateX(-10px)",
                        zIndex: 1
                    }
                }
            return {
                position: "relative"
            }
            }
        )
  return (
    <div className="top-0 left-0 z-50 flex flex-col items-center justify-center w-[100vh] " ref={ref}>
            <TheadFiexd className="">
                <div className=" relative flex justify-center   font-bold h-[74px] text-sm text-start ">
                    <div className='border-[0.4px] w-[280px]  text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Loại chỗ ở</div>
                    <div className='border-[0.4px] w-[104px] text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Phù hợp cho</div>
                    <div className='border-[0.4px] w-[172px] text-white p-2 bg-[#01357F] border-[#5BBAFF]'>Giá hôm nay</div>
                    <div className='border-[0.4px] w-[262px] text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Các lựa chọn</div>
                    <div className='border-[0.4px] w-[60px] text-white p-2 bg-[#4B76B1] border-[#5BBAFF]'>Chọn số lượng</div>
                    <div className="w-[218px] h-full  bg-[#4B76B1] border-[#5BBAFF]"></div>
                    <div className="absolute top-20 right-0 flex flex-col gap-2 w-[218px] p-2">
                        <button className="text-sm font-medium text-white px-5 py-2 bg-[#015ECC] rounded-md">
                            Tôi sẽ  đặt
                        </button>
                        <p className="text-sm">Không mất phí đặt phòng hay phí thẻ tín dụng!</p>
                    </div>
                </div>
            </TheadFiexd>
            <div className="flex justify-center w-[100vw]">
                <div className=" h-auto w-[1100px] flex flex-col">
                    {/* row 1*/}
                    <div className="flex justify-start w-full h-auto">
                        {/* col-1 */}
                        <div className=" w-[280px] border-[0.4px] border-[#5BBAFF] text-sm p-2 flex flex-col gap-2">
                            <a href='#' className="text-lg hover:text-[#BC5A02] hover:underline font-medium text-[#0171C2]">Phòng Đôi Superior nhìn ra 1 góc Biển</a>
                            <p>1 giường đôi cực lớn </p>
                            <p>Nhìn ra biển</p>
                            <p>Nhìn ra thành phố</p>
                            <p>Hồ bơi có tầm nhìn</p>
                            <p>Hồ bơi trên sân thượng</p>
                            <p>Điều hòa không khí</p>
                            <p>Phòng tắm riêng trong phòng</p>
                            <p>TV màn hình phẳng</p>
                            <p>Hệ thống cách âm</p>
                            <p>WiFi miễn phí</p>
                        </div>
                        {/* col center */}
                        <div className="flex flex-col">
                            <div className="flex justify-start flex-1">
                                <div className=" w-[104px]  border-[0.4px] border-[#5BBAFF] p-2 flex gap-1">
                                    <FaUser />
                                    <FaUser />
                                </div>
                                <div className=" w-[172px] border-[0.4px] border-[#5BBAFF] text-xs p-2 flex flex-col">
                                    <p className="text-lg font-semibold">€ 61</p>
                                    <p className="text-gray-500">Đã bao gồm thuế và phí</p>
                                </div>
                                <div className=" w-[262px] border-[0.4px] border-[#5BBAFF] p-2 flex flex-col gap-2">
                                    <p className="text-[#00800A] flex text-sm gap-2 items-center">
                                        <GiCoffeeCup className="w-5 h-5"/>
                                        Bao bữa sáng - Rất tốt
                                    </p>
                                    <p className='text-[#00800A] flex text-sm gap-2 items-center'>
                                        <AiOutlineCheck className="w-5 h-5"/>
                                        Miễn phí hủy đến 23:59 20 tháng 4, 2023
                                    </p>
                                </div>
                                <div className=" w-[60px] bg-[#FFEBEA] border-[0.4px] border-[#5BBAFF] flex justify-center">
                                    <div className="">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={0}
                                            label="Age"
                                            size='small'
                                            className="bg-white z-0 w-[50px] h-[20px] text-xs border-[#015ECC] border-[1px]"
                                        
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1 <span className="px-2">(€ 61)</span></MenuItem>
                                            <MenuItem value={2}>2 <span className="px-2">(€ 110)</span></MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="flex justify-start w-full h-auto">
                        {/* col-1 */}
                        <div className=" w-[280px] border-[0.4px] border-[#5BBAFF] text-sm p-2 flex flex-col gap-2">
                            <a href='#' className="text-lg hover:text-[#BC5A02] hover:underline font-medium text-[#0171C2]">Phòng Đôi Superior nhìn ra 1 góc Biển</a>
                            <p>1 giường đôi cực lớn </p>
                            <p>Nhìn ra biển</p>
                            <p>Nhìn ra thành phố</p>
                            <p>Hồ bơi có tầm nhìn</p>
                            <p>Hồ bơi trên sân thượng</p>
                            <p>Điều hòa không khí</p>
                            <p>Phòng tắm riêng trong phòng</p>
                            <p>TV màn hình phẳng</p>
                            <p>Hệ thống cách âm</p>
                            <p>WiFi miễn phí</p>
                        </div>
                        {/* col center */}
                        <div className="flex flex-col">
                            <div className="flex justify-start flex-1">
                                <div className=" w-[104px]  border-[0.4px] border-[#5BBAFF] p-2 flex gap-1">
                                    <FaUser />
                                    <FaUser />
                                </div>
                                <div className=" w-[172px] border-[0.4px] border-[#5BBAFF] text-xs p-2 flex flex-col">
                                    <p className="text-lg font-semibold">€ 61</p>
                                    <p className="text-gray-500">Đã bao gồm thuế và phí</p>
                                </div>
                                <div className=" w-[262px] border-[0.4px] border-[#5BBAFF] p-2 flex flex-col gap-2">
                                    <p className="text-[#00800A] flex text-sm gap-2 items-center">
                                        <GiCoffeeCup className="w-5 h-5"/>
                                        Bao bữa sáng - Rất tốt
                                    </p>
                                    <p className='text-[#00800A] flex text-sm gap-2 items-center'>
                                        <AiOutlineCheck className="w-5 h-5"/>
                                        Miễn phí hủy đến 23:59 20 tháng 4, 2023
                                    </p>
                                </div>
                                <div className=" w-[60px] bg-[#FFEBEA] border-[0.4px] border-[#5BBAFF] flex justify-center">
                                    <div className="">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={0}
                                            label="Age"
                                            size='small'
                                            className="bg-white z-0 w-[50px] h-[20px] text-xs border-[#015ECC] border-[1px]"
                                        
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1 <span className="px-2">(€ 61)</span></MenuItem>
                                            <MenuItem value={2}>2 <span className="px-2">(€ 110)</span></MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start flex-1">
                                <div className=" w-[104px]  border-[0.4px] border-[#5BBAFF] p-2 flex gap-1">
                                    <FaUser />
                                    <FaUser />
                                </div>
                                <div className=" w-[172px] border-[0.4px] border-[#5BBAFF] text-xs p-2 flex flex-col">
                                    <p className="text-lg font-semibold">€ 61</p>
                                    <p className="text-gray-500">Đã bao gồm thuế và phí</p>
                                </div>
                                <div className=" w-[262px] border-[0.4px] border-[#5BBAFF] p-2 flex flex-col gap-2">
                                    <p className="text-[#00800A] flex text-sm gap-2 items-center">
                                        <GiCoffeeCup className="w-5 h-5"/>
                                        Bao bữa sáng - Rất tốt
                                    </p>
                                    <p className='text-[#00800A] flex text-sm gap-2 items-center'>
                                        <AiOutlineCheck className="w-5 h-5"/>
                                        Miễn phí hủy đến 23:59 20 tháng 4, 2023
                                    </p>
                                </div>
                                <div className=" w-[60px] bg-[#FFEBEA] border-[0.4px] border-[#5BBAFF] flex justify-center">
                                    <div className="">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={0}
                                            label="Age"
                                            size='small'
                                            className="bg-white z-0 w-[50px] h-[20px] text-xs border-[#015ECC] border-[1px]"
                                        
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1 <span className="px-2">(€ 61)</span></MenuItem>
                                            <MenuItem value={2}>2 <span className="px-2">(€ 110)</span></MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
    </div>
  )
}

export default Roomdiv