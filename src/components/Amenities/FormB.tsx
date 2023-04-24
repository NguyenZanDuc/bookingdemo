import React, { useEffect, useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import { BATHROOM, BESTAMENITIES, DISABILITIES, FAMILYSERVICE, FOOT, INSIDEROOM, MEDIAANDTECH, OUTSIDE, SERVICE } from '@/CONST/Amenities'
import useAmenitiesHotel from '@/hooks/useAmenitiesHotel'
import { GrFormNext } from 'react-icons/gr'
import AccordionAmenities from '../Accordion/AccordionAmenities'

type Props = {}

const FormB = (props: Props) => {
    const amennitiesBestOption = BESTAMENITIES
    const {amenitiesHotel,setFavourite,setInside, setBathRoom, setMediaAndTech, setFoot, setService, setDisabilitiesService, setFamilyService, setOutSide} = useAmenitiesHotel();
     const [bestAmen, setBestAmen] = useState<string[]>(amenitiesHotel.favourite);
     const [isOpenMore, setIsOpenMore] = useState(false)

    const InsideOptions = INSIDEROOM;
    const BathRoomOptions = BATHROOM
    const MediaAndTechOptions = MEDIAANDTECH 
    const FootOptions = FOOT
    const ServiceOptions = SERVICE
    const OutsideOptions = OUTSIDE
    const Disabiltiesptions = DISABILITIES
    const FamilyOptions = FAMILYSERVICE

    function HandleCheckbox(e:any, value: string){
        if(e.target.checked){
            setBestAmen(pre=>{
                if(pre)return[...pre, value]
                return [value]
            })
        }else{
            setBestAmen(pre=>{
               let newPre = pre?.filter(item=>item!=value);
               return newPre
            })
        }
    }
    useEffect(()=>{
        if(bestAmen)setFavourite(bestAmen)
        console.log(bestAmen)
        console.log(amenitiesHotel.favourite)

    },[bestAmen])
  return (
    <FormInput>
        <p className="text-xl">Tiện nghi</p>
        <p className="text-sm">Cho chúng tôi biết về các tiện nghi tại chỗ nghỉ</p>
        <div className="p-2 border-[0.3px] border-gray-400 z-10">
            <p className="py-2 text-base font-medium">Được khách yêu cầu nhiều nhất</p>
            <div className="flex flex-col gap-3 px-3">
                {amennitiesBestOption.map((element, index)=>{
                    let isChecked= false
                    bestAmen.forEach(best=>{
                        if(best==element){
                            isChecked=true
                        }
                    })
                    return (<label key={index} className="flex gap-3">
                                <input type="checkbox" checked={isChecked} onChange={(e)=>{HandleCheckbox(e, element)}}/>
                                <span className='text-sm'>{element}</span>
                            </label>)
                })}
            </div>
        </div>
        <div className='z-10'>
            <button className="p-2 cursor-pointer bg-[#E6E6E6] border-[0.4px] border-black flex items-center gap-2" onClick={()=>{setIsOpenMore(o=>!o)}}>
                <GrFormNext />
                <p className='text-sm'>Xem tất cả các tiện nghi</p>
            </button>
        </div>
        {isOpenMore&&(
        <div>
            <p className="text-sm font-medium">Tất cả các tiện nghi theo phân loại</p>
            <div>
                <AccordionAmenities onChange={setInside} title={'Tiện ích trong phòng'} options={InsideOptions} acoordionInit={amenitiesHotel.inside} />
                <AccordionAmenities onChange={setBathRoom} title={'Phòng tắm'} options={BathRoomOptions} acoordionInit={amenitiesHotel.bathRoom} />
                <AccordionAmenities onChange={setMediaAndTech} title={'Truyền thông & Công nghệ'} options={MediaAndTechOptions} acoordionInit={amenitiesHotel.mediaAndTech} />
                <AccordionAmenities onChange={setFoot} title={'Đồ ăn & thức uống'} options={FootOptions} acoordionInit={amenitiesHotel.foot} />
                <AccordionAmenities onChange={setService} title={'Dịch vụ & Khoản phụ'} options={ServiceOptions} acoordionInit={amenitiesHotel.service} />
                <AccordionAmenities onChange={setOutSide} title={'Ngoài trời & Tầm nhìn'} options={OutsideOptions} acoordionInit={amenitiesHotel.outSide} />
                <AccordionAmenities onChange={setDisabilitiesService} title={'Lối vào dành cho người khuyết tật'} options={Disabiltiesptions} acoordionInit={amenitiesHotel.disabilitiesService} />
                <AccordionAmenities onChange={setFamilyService} title={'Dịch vụ giải trí và gia đình'} options={FamilyOptions} acoordionInit={amenitiesHotel.familyService} />
            </div>
        </div>
        )}
    </FormInput>
  )
}

export default FormB