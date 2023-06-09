import { useDispatch, useSelector } from "react-redux";
import {updateImage} from "../slice/Hotel/image"
export default function useImage(){
    const images:any = useSelector((state:any)=>state.imageHotel.value)
    const dispatch = useDispatch()
    function setImage(value: string[]){
        dispatch(updateImage({value: value}))
    }
    return {
        images,
        setImage
    }
}