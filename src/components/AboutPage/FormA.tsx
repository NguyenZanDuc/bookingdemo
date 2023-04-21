import useClickValue from '@/hooks/useClickValue'
import { MenuItem, Rating, Select, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import DivClick from '../ui/DivClick/DivClick'

type Props = {}
const FormA = (props: Props) => {

  return (
    <DivClick id={"#formA"} className="w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
            <p className="text-xl">Tên của chỗ nghỉ là gì?</p>
            <input type="text" className="border-[0.4px] border-gray-300 rounded-sm w-[40%] text-base py-2 px-2"/>
            <p className="text-xs">Tên này sẽ được hiển thị tới khách khi họ tìm kiếm chỗ nghỉ.</p>
            <p className="text-sm">Xếp hạng sao</p>
            <Select
                className="w-[300px]"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"0"}
                label=""
                defaultValue='Không áp dụng'
            >
                <MenuItem value={"Không áp dụng"}>Không áp dụng</MenuItem>
                <MenuItem value={"1 ✯"}>1<Rating className="px-2"
                                        name="customized-color"
                                        defaultValue={1}
                                        disabled ={true}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<AiFillStar className="text-black " fontSize="inherit" />}
                                        emptyIcon={<AiFillStar className="text-transparent bg-transparent" fontSize="inherit" />}/>
                </MenuItem>
                <MenuItem value={"2 ✯✯"}>2<Rating className="px-2"
                                        name="customized-color"
                                        defaultValue={2}
                                        disabled ={true}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<AiFillStar className="text-black " fontSize="inherit" />}
                                        emptyIcon={<AiFillStar className="text-transparent bg-transparent" fontSize="inherit" />}/>
                </MenuItem>
                <MenuItem value={"3 ✯✯✯<"}>3<Rating className="px-2"
                                        name="customized-color"
                                        defaultValue={3}
                                        disabled ={true}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<AiFillStar className="text-black " fontSize="inherit" />}
                                        emptyIcon={<AiFillStar className="text-transparent bg-transparent" fontSize="inherit" />}/>
                </MenuItem>
                <MenuItem value={"4 ✯✯✯✯"}>4<Rating className="px-2"
                                        name="customized-color"
                                        defaultValue={4}
                                        disabled ={true}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<AiFillStar className="text-black " fontSize="inherit" />}
                                        emptyIcon={<AiFillStar className="text-transparent bg-transparent" fontSize="inherit" />}/>
                </MenuItem>
                <MenuItem value={"5 ✯✯✯✯✯"}>5<Rating className="px-2"
                                        name="customized-color"
                                        defaultValue={5}
                                        disabled ={true}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<AiFillStar className="text-black " fontSize="inherit" />}
                                        emptyIcon={<AiFillStar className="text-transparent bg-transparent" fontSize="inherit" />}/>
                </MenuItem>
            </Select>
        </DivClick>
  )
}

export default FormA