import { useDispatch } from "react-redux";
import { setClickValue } from "@/slice/ClickValueSlice";

export default function useClickValue(){
    const dispatch = useDispatch()
    function setClickValueChange(Value: string){
        dispatch(setClickValue({value: Value}))
    }
    return {setClickValueChange}
}