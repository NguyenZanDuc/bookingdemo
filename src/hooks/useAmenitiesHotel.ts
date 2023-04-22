import { useDispatch, useSelector } from "react-redux";
import {updateIsExtraOption, updateFavourite, updateBathRoom, updateOutSide, updateDisabilitiesService, updateFamilyService, updateFoot, updateMediaAndTech} from "../slice/Hotel/amenities" 
export interface AmenitiesHotel{
  isExtraBedOption: boolean,
  favourite: string[],
  bathRoom: string[],
  mediaAndTech: string[],
  foot: string[],
  outSide: string[],
  disabilitiesService: string[],
  familyService: string[],
}
export default function useAmenitiesHotel(){
    const dispatch = useDispatch();
    const amenitiesHotel = useSelector((state: any)=>state.amenities.value)

    function setIsExtraOption (value: boolean){
        dispatch(updateIsExtraOption({value: value}))
      }
     function setFavourite(value: string[]){
        dispatch(updateFavourite({value: value}))
      }
     function setBathRoom (value: string[]){
        dispatch(updateBathRoom({value: value}))

      }
     function setMediaAndTech (value: string[]){
        dispatch(updateMediaAndTech({value: value}))

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
        setBathRoom,
        setMediaAndTech,
        setFoot,
        setOutSide,
        setDisabilitiesService,
        setFamilyService
      }
}