import { useDispatch, useSelector } from "react-redux";
import {updateImage} from "../slice/Hotel/image"
export default function useImage(){
    const image = useSelector((state:any)=>state.imageHotel.value)
    const dispatch = useDispatch()
    function setImage(value: string[]){
        dispatch(updateImage({value: value}))
    }
    return {
        image,
        setImage
    }
}