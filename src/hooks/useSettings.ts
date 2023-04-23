import { useDispatch, useSelector } from "react-redux";
import {updateIsCreditCard, updateCreditCards, updateInvoiceRecipient, updateIsGenericAddress, updateAddress, updateIsAvailability} from "../slice/Hotel/settings"

export interface Settings{
    isCreditCard: boolean,
    creditCards: string[],
    invoiceRecipient: string,
    isGenericAddress: boolean,
    address: string,
    isAvailability: boolean
}

export default function useSettings(){
    const settingsHotel:Settings = useSelector((state:any)=> state.settingsHotel.value)
    const dispatch = useDispatch()
   function setIsCreditCard( value: boolean){
        dispatch(updateIsCreditCard({value: value}))
      }
     function setCreditCards( value: []){
      dispatch(updateCreditCards({value: value}))
      }
     function setInvoiceRecipient( value: string){
      dispatch(updateInvoiceRecipient({value: value}))
      }
     function setIsGenericAddress( value: boolean){
      dispatch(updateIsGenericAddress({value: value}))
      }
     function setAddress( value: string){
      dispatch(updateAddress({value: value}))
      }
     function setIsAvailability( value: boolean){
      dispatch(updateIsAvailability({value: value}))
      }
    return{
        settingsHotel,
        setIsCreditCard,
        setCreditCards,
        setInvoiceRecipient,
        setIsGenericAddress,
        setAddress,
        setIsAvailability
    }
}