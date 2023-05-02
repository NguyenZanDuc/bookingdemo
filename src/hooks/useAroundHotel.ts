import { useDispatch, useSelector } from "react-redux";
import {updateAroundHotel, updateAirportHotel, updateBeachesInTheAreaHotel, updateCoffeeAndRestaurentHotel, updateNaturalBeautyHotel, updatePublicTranportHotel, updateVisitLocationHotel} from "../slice/Hotel/aroundHotel";
import { InferType, array, object, string } from "yup";
export const aroundHotelSchema = object({
        around: array().required().of(string().required()),
        coffeeAndRestaurent: array().required().of(string().required()),
        visitLocation: array().required().of(string().required()),
        naturalBeauty: array().required().of(string().required()),
        beachesInTheArea: array().required().of(string().required()),
        publicTranport: array().required().of(string().required()),
        airport: array().required().of(string().required())
})
type AroundHotel = InferType<typeof aroundHotelSchema>;
export default function useAroundHotel(){
    const dispatch = useDispatch()
    const aroundHotel:AroundHotel = useSelector((state: any)=>state.aroundHotel.value)
    function setAroundHotel (value: string[]){
        dispatch(updateAroundHotel({value: value}))
    }  
    function setCoffeeAndRestaurentHotel (value: string[]){
        dispatch(updateCoffeeAndRestaurentHotel({value: value}))
    }
    function setVisitLocationHotel (value: string[]){
        dispatch(updateVisitLocationHotel({value: value}))
    }
    function setNaturalBeautyHotel (value: string[]){
        dispatch(updateNaturalBeautyHotel({value: value}))
    }
    function setBeachesInTheAreaHotel (value: string[]){
        dispatch(updateBeachesInTheAreaHotel({value: value}))
    }
    function setPublicTranportHotel (value: string[]){
        dispatch(updatePublicTranportHotel({value: value}))
    }
    function setAirportHotel (value: string[]){
        dispatch(updateAirportHotel({value: value}))
    }

    return {
        aroundHotel,
        setAroundHotel,
        setCoffeeAndRestaurentHotel,
        setVisitLocationHotel,
        setNaturalBeautyHotel,
        setBeachesInTheAreaHotel,
        setPublicTranportHotel,
        setAirportHotel    
    }
}