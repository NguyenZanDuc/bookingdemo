
import { Skeleton, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { BsCheckLg } from 'react-icons/bs'
import { RiDeleteBin5Line  } from 'react-icons/ri'
const BaseUrl = "https://xvxcgatezndxyaprjjvg.supabase.co/storage/v1/object/public/hotelImage/"


type Props = {
    urlImage: string,
    onDelete: Function,
    onSelect: Function,
    onDisSelect: Function,
    isSelected: boolean
}

const CardImageUpload = ({urlImage, onDelete, onSelect, onDisSelect, isSelected}: Props) => {
    const [isSelect, setIsSelect] = useState(false);
    const [loaded, setloaded] = useState(false);
    const DivSelect = styled('div')(()=>{
            let borderWidth = isSelect?"3px":"0.4px"
            let borderColor = isSelect?"#0171C2":"#999999"
        return {
           borderWidth: borderWidth,
           borderColor: borderColor
        }
    })
   function HandleSelect(){
         setIsSelect(o=>!o)
         onSelect(urlImage);
   }
   function HandleDisSelect(){
          setIsSelect(o=>!o)
          onDisSelect(urlImage)
   }
   useEffect(()=>{
    setIsSelect(isSelected)
   },[isSelected])
  return (
    <DivSelect className="relative w-[235px]  flex flex-col ">
       {isSelect?(
            <button onClick={HandleDisSelect} 
                className="absolute top-2 left-2 w-[30px] h-[30px] bg-[#0171C2] text-white rounded-full flex justify-center items-center" >
                <BsCheckLg className="w-6 h-6"/>
            </button>
       ):(
        <button onClick={HandleSelect}
                    className="absolute top-2 left-2 w-[30px] h-[30px] border-[2px] border-white shadow-sm rounded-full hover:text-white text-transparent duration-300 flex justify-center items-center">
                <BsCheckLg className="w-6 h-6"/>
        </button>
       )}
       {!loaded&&(<Skeleton variant="rectangular" width={235} height={155} />)}
        <div className="">
            <img onLoad={()=>{setloaded(true)}}  style={{ opacity: loaded ? "1" : "0" ,height: loaded?"155px":"0px"}} src={`${BaseUrl}${urlImage}`} alt='image' className="object-contain w-[235px] h-full"/>
        </div>
       {/* ):(<Skeleton variant="rectangular" width={235} height={155} />)} */}
        <div className="flex items-center justify-center gap-4 py-2">
            <button className="text-sm text-[#3175B1] hover:opacity-50 flex gap-2 items-center">
                <BiPencil />
                Sửa
            </button>
            <button className="text-sm text-[#3175B1] hover:opacity-50 flex gap-2 items-center" onClick={()=>{onDelete(urlImage)}}>
                <RiDeleteBin5Line />
                Xoá
            </button>
        </div>
    </DivSelect>
  )
}

export default CardImageUpload