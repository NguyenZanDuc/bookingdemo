import { useDispatch, useSelector } from "react-redux";
import {updateDayCanCancel, updatePriceAll, updateIsInsurance, updateCheckIn, updateCheckOut, updateIsChildren, updateIsPet} from "../slice/Hotel/policies"

export interface Policies{
  dayCanCancel: number,
  priceAll: boolean,
  isInsurance: boolean,
  checkIn: string,
  checkOut: string,
  isChildren: boolean,
  isPet: boolean
}

export default function usePoliciesHotel(){
    const policiesHotel:Policies = useSelector((state: any)=>state.policiesHotel.value)
    const dispatch = useDispatch()

    function setDayCanCancel (value: number){
        dispatch(updateDayCanCancel({value: value}))
      }
      function setPriceAll (value: boolean){
        dispatch(updatePriceAll({value: value}))
      }
      function setIsInsurance (value: boolean){
        dispatch(updateIsInsurance({value: value}))
      }
      function setCheckIn (value: string){
        dispatch(updateCheckIn({value: value}))
      }
      function setCheckOut (value: string){
        dispatch(updateCheckOut({value: value}))
      }
      function setIsChildren (value: boolean){
        dispatch(updateIsChildren({value: value}))
      }
      function setIsPet (value: boolean){
        dispatch(updateIsPet({value: value}))
      }
    return{
        policiesHotel,
        setDayCanCancel,
        setPriceAll,
        setIsInsurance,
        setCheckIn,
        setCheckOut,
        setIsChildren,
        setIsPet
    }
 }