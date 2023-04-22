import { useDispatch, useSelector } from "react-redux";
import {updatePark, updateIsPrivate, updateIsInside, updateIsReservation, updateHaveBreakFast, updateType, updateLanguare, updateBestFacility} from "../slice/Hotel/facilities"

export interface FacilitiesHotel{
  park: string,
  isPrivate: boolean,
  isInside: boolean,
  isReservation: boolean,
  haveBreakFast: string,
  type: string,
  languare: string[],
  bestFacility: string[]
}

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
      function setLanguare (value: []){
        dispatch(updateLanguare({value: value}))
    }
      function setBestFacility (value: []){
        dispatch(updateBestFacility({value: value}))
    }
      
    return{
        facilitiesHotel,
        setPark,
        setIsPrivate,
        setIsInside,
        setIsReservation,
        setHaveBreakFast,
        setType,
        setLanguare,
        setBestFacility
    }
    }