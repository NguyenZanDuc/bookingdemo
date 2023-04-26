import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import CardImageUpload from '@/components/ui/Card/CardImageUpload'
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
import {ImageChecking, ImageSucess} from '../slice/Navbar/stateNavbar'
import { useDispatch } from 'react-redux'

type Props = {}
const photos = (props: Props) => {
    const {images,setImage} = useImage()
    const route = useRouter()
    const supaBase = useSupabaseClient();
    const dispatch = useDispatch()
   
     const [files, setFiles] = useState<File[]>()
     const [urls, setUrls] = useState(images)
     const [imageSelected, setImageSelected] = useState<string[]>([])
     function HandleContinue(){
        dispatch(ImageSucess())
        route.replace("/policies")
     }
     function HandleChangeFile(e:any){
        if(e.target.files&&e.target.files[0]){
                    setFiles(e.target.files)
                }
     }
      async function removeUrl(item: string){
        var newUrl = urls.filter((i:any)=>i!=item)
        setUrls(newUrl)
        await supaBase.storage.from("hotelImage").remove([item])

     }
      async function SaveImage(image:File){
            if(image){
            const imageNameRandom = Guid.create().toString();
            const {data, error} = await supaBase.storage.from("hotelImage").upload(`${imageNameRandom}.png`,image)
            setUrls((urls:any)=>[...urls,`${imageNameRandom}.png` ])
            return
            }
     }
        useEffect(()=>{
            console.log(urls)
            setImage(urls)
        },[urls])
        useEffect(()=>{
                if(files){
                    for(var i = 0; i<files.length; i++){
                        SaveImage(files[i])
                        console.log({files: files})
                    }
                }
        },[files])
    function selectAllImage(){
        setImageSelected(urls)
    }
    function removeAllImage(){
        setImageSelected([])
    }
    function AddSelectImage(url: string){
        setImageSelected(pres=>[...pres,url])
    }
    function RemoveSelectImage(url: string){
        let newImageSelects = imageSelected.filter(i=>i!=url)
        setImageSelected( newImageSelects)
    }
    function deleteImage(){
        imageSelected.forEach(async url=>{
           await removeUrl(url)
        })
        let newUrls = urls.filter((url:string)=>{
            let isSelect = true
            imageSelected.forEach((imageSelect:string)=>{
                if(imageSelect==url){
                    isSelect =false
                }
            })
            return isSelect
        })
        setUrls(newUrls)
        setImageSelected([])
    }
    useEffect(()=>{
        dispatch(ImageChecking())
       },[])
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
                    {(imageSelected.length>0)&&(
                         <div className="flex items-center justify-end gap-5 text-xs font-bold">
                         <p>{imageSelected.length}/{urls.length} ảnh được chọn</p>
                         <button className="text-[#0171c2]" onClick={selectAllImage}>
                             Chọn tất cả
                         </button >
                         <button className="text-[#0171c2]" onClick={removeAllImage}>
                             Bỏ chọn tất cả
                         </button>
                         <button className="text-[#A50905]" onClick={deleteImage}>
                             Xoá ảnh
                         </button>
                     </div>
                    )}
                    <div className="grid grid-cols-3 gap-4">
                        {(urls.length!=0)&&urls.map((item:string, index:number)=>{
                            let isSelect = false
                            imageSelected.forEach(imageSelect=>{
                                if(imageSelect==item){
                                    isSelect = true
                                }
                            })
                            return ( <CardImageUpload isSelected ={isSelect}  key={index} urlImage={item} onDelete={removeUrl} onSelect={AddSelectImage} onDisSelect={RemoveSelectImage}/>)
                        })}
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
              <div className="max-w-[260px] hidden xl:block">
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

