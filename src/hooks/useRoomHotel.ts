import { useDispatch, useSelector } from "react-redux";
import  { updateTypeRoom,updateNameOption, updateNameRoom, updateSmoking, updateNumberPeople, updateNumberRoom,updateBedOption, updateRoomSize, updatePrice} from "../slice/Hotel/room"
import { object, string, number, InferType, boolean, array } from 'yup';


const RoomHotelSchema = object({
  typeRoom: string().required(),
  nameRoom: string().required(),
  nameOption: string().required(),
  smoking: string().required(),
  numberRoom: number().required(),
  bedsOption: array().of(object().required().shape({
                            typeBed: string().required(),
                            number: number().required()
                          })),
  numberPeople: number().required(),
  roomSize: number().required(),
  price: number().required()
})
type RoomHotel = {
  typeRoom: string,
  nameRoom: string,
  nameOption: string,
  smoking: string,
  numberRoom: number,
  bedsOption: BedOption[]
  numberPeople: number,
  roomSize: number,
  price: number
}
type BedOption = {
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
        RoomHotelSchema,
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