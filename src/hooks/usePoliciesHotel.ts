import { useDispatch, useSelector } from "react-redux";
import {updateDayCanCancel, updatePriceAll, updateIsInsurance, updateCheckIn, updateCheckOut, updateIsChildren, updateIsPet} from "../slice/Hotel/policies"
import { object, string, number, InferType, boolean } from 'yup';

const PoliciesHotelSchema = object({
  dayCanCancel: number().required(),
  priceAll: boolean().required(),
  isInsurance: boolean().required(),
  checkIn: string().required(),
  checkOut: string().required(),
  isChildren: boolean().required(),
  isPet: string().required()
})
type PoliciesHotel = InferType<typeof PoliciesHotelSchema>
export default function usePoliciesHotel(){
    const policiesHotel:PoliciesHotel = useSelector((state: any)=>state.policiesHotel.value)
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
      function setIsPet (value: string){
        dispatch(updateIsPet({value: value}))
      }
    return{
        policiesHotel,
        PoliciesHotelSchema,
        setDayCanCancel,
        setPriceAll,
        setIsInsurance,
        setCheckIn,
        setCheckOut,
        setIsChildren,
        setIsPet
    }
 }