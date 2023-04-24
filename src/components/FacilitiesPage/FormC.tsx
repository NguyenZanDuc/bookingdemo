import React, { useEffect, useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import Select, { SingleValue } from 'react-select'
import { AiFillPlusCircle } from 'react-icons/ai'
import LANGUARE from '@/CONST/Language'
import useFacilitiesHotel from '@/hooks/useFacilities'

import { MdDeleteForever } from 'react-icons/md'

type Props = {}

const FormC = (props: Props) => {
  const {facilitiesHotel, setLanguage} = useFacilitiesHotel()
  const [languages, setLanguages ] = useState<string[]>(facilitiesHotel.language)
    const languageOptions = LANGUARE.map((element)=>{
      return {
        value: element,
        label: element
      }
    })
    function HandleDeleteLangueFeild(index: number){
        setLanguages((langs)=>{
          return langs.filter((ele, index1)=>index1!= index)
        })
    }
    function HandleSelectChange(e :SingleValue<{value: string;label: string;}>|any, index: number){
      const newlanguages = languages.map((value, index1)=>{
        if(index1==index){
          return e.value
        }
        return value
      })
          setLanguages(newlanguages)
    }
    useEffect(()=>{
      console.log(facilitiesHotel)
      setLanguage(["Tiếng Việt"])
    },[])
    useEffect(()=>{
       if(languages)setLanguage(languages)
    },[languages])
  return (
    <FormInput >
        <p className="py-2 text-xl font-light">Ngôn ngữ được sử dụng</p>
        <p className='text-xs text-gray-500 bg-[#E6E6E6] p-2'>Ngôn ngữ Quý vị hoặc nhân viên sử dụng?</p>
        {(languages)&&(languages.map((language, index)=>{
          return(
            <div className="flex items-center gap-3">
                <Select className="text-sm min-w-[360px] w-1/2" value={{value: language, label: language}} onChange={(e)=>HandleSelectChange(e,index)}
                                options={languageOptions}/>
                {index!=0&&(<MdDeleteForever className="z-10 w-5 h-5 text-red-500 cursor-pointer" onClick={()=>{HandleDeleteLangueFeild(index)}}/>)}
            </div>
          )
        }))}
        <button className="z-0 flex items-center text-xs " onClick={()=>{setLanguages(languages=>[...languages, "Vui lòng chọn"])}}>
                <AiFillPlusCircle className="text-[#2A6496]"/>
                <p className="text-[#2A6496] hover:underline">Thêm ngôn ngữ</p>
        </button>
    </FormInput>
  )
}

export default FormC