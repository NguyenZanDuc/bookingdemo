import {updateNameHotel, updateStarHotel, updateNameManagerHotel, updateOtherPhoneNumber, updatePhoneNumberHotel, updateNameCompanyHotel, updateNameToolManagerHotel, updateStreetHotel, updatePortalCodeHotel, updateCityHotel} from '../slice/Hotel/about'
import { useDispatch, useSelector } from "react-redux";
export interface AboutHotel{
    nameHotel: string,
    star: string,
    nameManager: string,
    phoneNumber:string,
    nameCompany: string,
    nameToolManager: string,
    street: string,
    city:string,
    portalCode: number
}
export default function useAboutHotelForm(){
    const dispath = useDispatch()
    const aboutHotel:AboutHotel = useSelector((state: any)=>state.aboutHotel.value)
    
    function setNameHotel(value: string){
        dispath(updateNameHotel({value: value}))
    }
    function setStarHotel(value: string){
        dispath(updateStarHotel({value: value}))
    }
    function setNameManagerHotel(value: string){
        dispath(updateNameManagerHotel({value: value}))
    }
    function setPhoneNumberHotel(value: string){
        dispath(updatePhoneNumberHotel({value: value}))
    }
    function setOtherPhoneNumberHotel(value: string){
        dispath(updateOtherPhoneNumber({value: value}))
    }
    function setNameCompanyHotel(value: string){
        dispath(updateNameCompanyHotel({value: value}))
    }
    function setNameToolManagerHotel(value: string){
        dispath(updateNameToolManagerHotel({value: value}))
    }
    function setStreetHotel(value: string){
        dispath(updateStreetHotel({value: value}))
    }
    function setPortalCodeHotel(value: string){
        dispath(updatePortalCodeHotel({value: value}))
    }
    function setCityHotel(value: string){
        dispath(updateCityHotel({value: value}))
    }

    return {
        aboutHotel,
        setNameHotel,
        setStarHotel,
        setNameManagerHotel,
        setPhoneNumberHotel,
        setOtherPhoneNumberHotel,
        setNameCompanyHotel,
        setNameToolManagerHotel,
        setStreetHotel,
        setPortalCodeHotel,
        setCityHotel
    }
}