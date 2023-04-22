import { useDispatch, useSelector } from "react-redux";
import  { updateTypeRoom,updateNameOption, updateNameRoom, updateSmoking, updateNumberPeople, updateNumberRoom,updateBedOption, updateRoomSize, updatePrice} from "../slice/Hotel/room"

export interface RoomHotel{
  typeRoom: string,
  nameRoom: string,
  nameOption: string,
  smoking: string,
  numberRoom: number,
  bedOption: BedOption[],
  numberPeople: number,
  roomSize: number,
  price: number
}
export interface BedOption{
  typeBed: string,
  number: number
}
export default function useRoomHotel(){
    const roomHotel: RoomHotel = useSelector((state: any)=>state.roomHotel.value)
    const dispatch = useDispatch()
      function setTypeRoom (value: string){
        dispatch(updateTypeRoom({value: value}))
      }
      function setNameRoom (value: string){
        dispatch(updateNameRoom({value: value}))
      }
      function setNameOption (value: string){
        dispatch(updateNameOption({value: value}))
      }
      function setSmoking (value: string){
        dispatch(updateSmoking({value: value}))
      }
      function setNumberRoom (value: number){
        dispatch(updateNumberRoom({value: value}))
      }
      function setBedOption (value: {typeBed:string, number: number}[]){
        dispatch(updateBedOption({value: value}))
      }
      function setNumberPeople (value: number){
        if(value>=1)dispatch(updateNumberPeople({value: value}))
      }
      function setRoomSize (value: number){
        dispatch(updateRoomSize({value: value}))
      }
      function setPrice (value: number){
        dispatch(updatePrice({value: value}))
      }
    return{
        roomHotel,
        setTypeRoom,
        setNameRoom,
        setNameOption,
        setSmoking,
        setNumberRoom,
        setBedOption,
        setNumberPeople,
        setRoomSize,
        setPrice
    }
    }