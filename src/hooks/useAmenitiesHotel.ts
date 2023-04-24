import { useDispatch, useSelector } from "react-redux";
import {updateIsExtraOption, updateFavourite, updateInside, updateService, updateBathRoom, updateOutSide, updateDisabilitiesService, updateFamilyService, updateFoot, updateMediaAndTech} from "../slice/Hotel/amenities" 
export interface AmenitiesHotel{
  isExtraBedOption: boolean,
  favourite: string[],
  inside: string[],
  bathRoom: string[],
  mediaAndTech: string[],
  service: string[],
  foot: string[],
  outSide: string[],
  disabilitiesService: string[],
  familyService: string[],
}
export default function useAmenitiesHotel(){
    const dispatch = useDispatch();
    const amenitiesHotel:AmenitiesHotel = useSelector((state: any)=>state.amenitiesHotel.value)

    function setIsExtraOption (value: boolean){
        dispatch(updateIsExtraOption({value: value}))
      }
     function setFavourite(value: string[]){
        dispatch(updateFavourite({value: value}))
      }
      function setInside(value: string[]){
        dispatch(updateInside({value: value}))
      }
     function setBathRoom (value: string[]){
        dispatch(updateBathRoom({value: value}))

      }
     function setMediaAndTech (value: string[]){
        dispatch(updateMediaAndTech({value: value}))

      }     
      function setService (value: string[]){
        dispatch(updateService({value: value}))

      }    
      function setFoot(value: string[]){
        dispatch(updateFoot({value: value}))

      }     
       function setOutSide(value: string[]){
        dispatch(updateOutSide({value: value}))

      }
     function setDisabilitiesService(value: string[]){
        dispatch(updateDisabilitiesService({value: value}))

      }
     function setFamilyService(value: string[]){
        dispatch(updateFamilyService({value: value}))

      }
      return {
        amenitiesHotel,
        setIsExtraOption,
        setFavourite,
        setInside,
        setBathRoom,
        setMediaAndTech,
        setService,
        setFoot,
        setOutSide,
        setDisabilitiesService,
        setFamilyService
      }
}