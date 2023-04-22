import { useState } from "react";
import useFacilitiesHotel from "./useFacilities";
export interface SelectedProp{
    value: string,
    isChecked: boolean
}
export default function useCheckboxGroup(defaultValue: string[]){
    const [selected, setSelected] = useState<string[]>([])
    function CheckIsChecked(selected: string[], value: string):boolean{
        var check = false 
            selected.forEach(elemet=>{
                if(elemet==value){
                    check = true
                }
            })
            return check
      }
      function SetValueChecked(value: string,isChecked?: boolean){
        if(!isChecked){
            setSelected(slec=> [...slec, value])
            console.log(selected)
            return
        }
            setSelected(slec => slec.filter(item=>item!=value))
            console.log(selected)
      }
      
    return {selected, CheckIsChecked, SetValueChecked}
}