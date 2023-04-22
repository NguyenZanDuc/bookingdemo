import { useDispatch, useSelector } from "react-redux";
import {updateIsCreaditCard, updateCreditCards, updateInvoiceRecipient, updateIsGenericAddress, updateAddress, updateIsAvailability} from "../slice/Hotel/settings"

export interface Settings{
    isCreaditCard: boolean,
    creditCards: string[],
    invoiceRecipient: string,
    isGenericAddress: boolean,
    address: string,
    isAvailability: boolean
}

export default function useSettings(){
    const settingsHotel = useSelector((state:any)=> state.settingsHotel.value)
    const dispatch = useDispatch()
   function setIsCreaditCard( value: string){
        updateIsCreaditCard({value: value})
      }
     function setCreditCards( value: []){
        updateCreditCards({value: value})
      }
     function setInvoiceRecipient( value: string){
        updateInvoiceRecipient({value: value})
      }
     function setIsGenericAddress( value: boolean){
        updateIsGenericAddress({value: value})
      }
     function setAddress( value: string){
        updateAddress({value: value})
      }
     function setIsAvailability( value: boolean){
        updateIsAvailability({value: value})
      }
    return{
        settingsHotel,
        setIsCreaditCard,
        setCreditCards,
        setInvoiceRecipient,
        setIsGenericAddress,
        setAddress,
        setIsAvailability
    }
}