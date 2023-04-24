import { resetRoomHotel } from "../slice/Hotel/room";
import { resetAboutHotel } from "@/slice/Hotel/about";
import { resetAmenitiesHotel } from "@/slice/Hotel/amenities";
import { resetFacilitiesHotel } from "@/slice/Hotel/facilities";
import { resetImageHotel } from "@/slice/Hotel/image";
import { resetPoliciesHotel } from "@/slice/Hotel/policies";
import { resetSettingsHotel } from "@/slice/Hotel/settings";
import { useDispatch } from "react-redux";

export default function useResetState(){
    const dispatch = useDispatch()
    function resetSate(){
        dispatch(resetAboutHotel())
        dispatch(resetAmenitiesHotel())
        dispatch(resetFacilitiesHotel())
        dispatch(resetImageHotel())
        dispatch(resetPoliciesHotel())
        dispatch(resetSettingsHotel())
        dispatch(resetRoomHotel())
    }
    return {resetSate}
}