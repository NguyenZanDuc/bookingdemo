import {updateNameHotel, updateStarHotel, updatePropertyHotel,updateNameManagerHotel, updateOtherPhoneNumber, updatePhoneNumberHotel, updateNameCompanyHotel, updateNameToolManagerHotel, updateStreetHotel, updateMoreAddressHotel, updatePortalCodeHotel, updateCountryHotel, updateCityHotel} from '../slice/Hotel/about'
import { useDispatch, useSelector } from "react-redux";
import { object, string, number, date, InferType } from 'yup';

const AboutHotelSchema = object({
    nameHotel: string().required().min(5, "leng"),
    star: string().required(),
    property: string().required(),
    nameManager: string().required(),
    phoneNumber:string().required(),
    otherPhoneNumber: string().required(),
    nameCompany: string().required(),
    nameToolManager: string().required(),
    street: string().required("vui lòng điền địa chỉ phố"),
    moreAddress: string().required(),
    country: string().required(),
    city:string().required(),
    portalCode: number()
})
type AboutHotel = InferType<typeof AboutHotelSchema>
export default function useAboutHotelForm(){
    const dispath = useDispatch()
    const aboutHotel:AboutHotel = useSelector((state: any)=>state.aboutHotel.value)
    
    function setNameHotel(value: string){
        dispath(updateNameHotel({value: value}))
    }
    function setStarHotel(value: string){
        dispath(updateStarHotel({value: value}))
    }
    function setPropertyHotel(value: string){
        dispath(updatePropertyHotel({value: value}))
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
    function setMoreAddressHotel(value: string){
        dispath(updateMoreAddressHotel({value: value}))
    }
    function setCountrysHotel(value: string){
        dispath(updateCountryHotel({value: value}))
    }
    function setPortalCodeHotel(value: string){
        dispath(updatePortalCodeHotel({value: value}))
    }
    function setCityHotel(value: string){
        dispath(updateCityHotel({value: value}))
    }

    return {
        aboutHotel,
        AboutHotelSchema,
        setNameHotel,
        setStarHotel,
        setPropertyHotel,
        setNameManagerHotel,
        setPhoneNumberHotel,
        setOtherPhoneNumberHotel,
        setNameCompanyHotel,
        setNameToolManagerHotel,
        setStreetHotel,
        setMoreAddressHotel,
        setCountrysHotel,
        setPortalCodeHotel,
        setCityHotel
    }
}