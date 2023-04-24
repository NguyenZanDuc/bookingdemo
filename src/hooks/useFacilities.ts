import { useDispatch, useSelector } from "react-redux";
import {updatePark, updateIsPrivate, updateIsInside, updateIsReservation, updateHaveBreakFast, updateType, updateLanguage, updateBestFacility} from "../slice/Hotel/facilities"
import { object, string, InferType, boolean, array } from 'yup';


const FacilitiesSchema = object({
  park: string().required(),
  isPrivate: boolean().required(),
  isInside: boolean().required(),
  isReservation: boolean().required(),
  haveBreakFast: string().required(),
  type: string().required(),
  language: array().required().of(string().required()),
  bestFacility: array().required().of(string().required())
})
type FacilitiesHotel = InferType<typeof FacilitiesSchema>
export default function useFacilitiesHotel(){
    const facilitiesHotel:FacilitiesHotel = useSelector((state: any)=>state.facilitiesHotel.value)
    const dispatch = useDispatch()
     function setPark (value: string){
            dispatch(updatePark({value: value}))
      }
      function setIsPrivate (value: boolean){
        dispatch(updateIsPrivate({value: value}))
    }
      function setIsInside (value: boolean){
        dispatch(updateIsInside({value: value}))
    }
      function setIsReservation (value: boolean){
        dispatch(updateIsReservation({value: value}))
    }
      function setHaveBreakFast (value: string){
        dispatch(updateHaveBreakFast({value: value}))
    }
      function setType (value: string){
        dispatch(updateType({value: value}))
    }
      function setLanguage (value: string[]){
        dispatch(updateLanguage({value: value}))
    }
      function setBestFacility (value: string[]){
        dispatch(updateBestFacility({value: value}))
    }
      
    return{
        facilitiesHotel,
        FacilitiesSchema,
        setPark,
        setIsPrivate,
        setIsInside,
        setIsReservation,
        setHaveBreakFast,
        setType,
        setLanguage,
        setBestFacility
    }
    }