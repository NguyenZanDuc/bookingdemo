import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import useImage from '@/hooks/useImage'
import { Input } from '@mui/material'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Guid } from 'guid-typescript'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillImageFill } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { GrFormNext } from 'react-icons/gr'
import { MdPhotoCamera } from 'react-icons/md'

type Props = {}

const photos = (props: Props) => {
    const {setImage} = useImage()
    const [list, setList] = useState<string[]>()
    const route = useRouter()
    const supaBase = useSupabaseClient();
    function HandleContinue(){
        route.replace("/settings")
     }
     const [files, setFiles] = useState<File[]>();
     function HandleChangeFile(e:any){
        if(e.target.files&&e.target.files[0]){
                    setFiles(e.target.files)
                }
        console.log(files)
     }
     function addList(item: string){
        setList((ls:any)=>{
            if(!ls)return[item]
            return [...ls, item]
        })
     }
     function removeList(item: string){
        setList((ls)=>{
            let newList = ls?.filter(i=>i!=item)
             return newList
        })
     }
     async function SaveImage(image:File){
          //save supabse and save redux
          if(image){
            const imageNameRandom = Guid.create().toString();
             const imageUrl = `https://xvxcgatezndxyaprjjvg.supabase.co/storage/v1/object/public/hotelImage/${imageNameRandom}.png`
            const {data, error} = await supaBase.storage.from("hotelImage").upload(`${imageNameRandom}.png`,image)
            addList(imageUrl)
            return
          }
     }
     useEffect(()=>{
        if(files){
            for(var i = 0; i<files.length; i++)
            SaveImage(files[i])
        }
     },[files])
     useEffect(()=>{
        if(list)setImage(list)
        console.log(list)
     },[list])
  return (
   <MainNavbarForm>
        <div className="flex flex-col gap-6 py-6">
          <p className="text-xl font-bold">Hình ảnh chỗ nghỉ</p>
          <p className="text-sm font-light">Hình ảnh đẹp giống như lời mời gọi hấp dẫn về một trải nghiệm trọn vẹn tại chỗ nghỉ, hãy đăng tải những hình có độ phân giải cao và thể hiện chính xác những gì chỗ nghỉ Quý vị có. Chúng tôi sẽ hiển thị những hình này trong trang chỗ nghỉ của Quý vị trên trang web Booking.com.</p>
          <div className="flex w-full gap-4">
              <div className="w-[800px] flex flex-col gap-5">
                <div className="flex flex-col gap-5 p-2 bg-white rounded-sm">
                    <p className='text-xl'>Thư viện ảnh</p>
                    <div className="relative z-0 w-[765px] h-[200px] border-dashed border-[1px] border-gray-400">
                        <div className="flex flex-col items-center w-full gap-2 p-2">
                            <p className="text-xl">Tải ít nhất 1 hình ảnh lên</p>
                            <p className='text-sm'>Quý vị có thể tải lên thêm sau khi đăng ký</p>
                            <p className="text-xl font-medium">Kéo và thả hình ảnh tại đây</p>
                            <p className="text-sm text-gray-300">hoặc</p>
                            <button className="flex items-center justify-center gap-2 p-2 bg-[#3175B1] rounded-sm text-white text-base font-light"><BsFillImageFill /> Thêm ảnh</button>
                        </div>
                        <input type="file" multiple onChange={HandleChangeFile} className="absolute top-0 left-0 z-20 w-full h-full text-white opacity-0 cursor-pointer"/>
                    </div>
                    <div className="bg-[#FCF4D8] p-4 text-sm font-light">
                        <p className="py-3 text-xl font-normal">Không có hình ảnh chuyên nghiệp? Không sao!</p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-1">
                                <GrFormNext className="w-5 h-5"/>
                                <p>Quý vị có thể sử dụng: </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <GiSmartphone className="w-5 h-5"/>
                                <p>Điện thoại thông minh </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <MdPhotoCamera className="w-5 h-5"/>
                                <p>Máy ảnh kỹ thuật số</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                                <GrFormNext className="w-5 h-5"/>
                                <p>Mẹo hay! Khách rất thích hình ảnh! Dưới đây là một số mẹo khi chụp ảnh chỗ nghỉ Quý vị</p>
                        </div>
                        <div className="flex items-center gap-1">
                                <GrFormNext className="w-5 h-5"/>
                                <p>Nếu không biết ai là chủ sở hữu của bức ảnh, tốt nhất Quý vị không nên sử dụng. Quý vị chỉ nên sử dụng ảnh mình có bản quyền hoặc của một người khác nhưng đã có sự chấp thuận để sử dụng.</p>
                        </div>
                    </div>
                    <button onClick={HandleContinue} className="w-full text-white text-lg bg-[#3175B1] rounded-sm py-2">Tiếp tục</button>
                </div>
              </div>
              <div className="w-[260px]">
                    <div className="p-3 text-xs bg-white ">
                        <p className='text-xs'>Sau khi hoàn tất đăng ký, Quý vị vẫn sẽ có thể thực hiện thay đổi cho đăng ký trước khi chỗ nghỉ online.</p>
                    </div>
                </div>
            </div>
         </div>
   </MainNavbarForm>
      

  )
}

export default photos

// onChange={(e)=>{ 
//     
//     }}