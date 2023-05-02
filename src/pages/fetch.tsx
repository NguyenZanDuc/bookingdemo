import React, { useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'
type Props = {}
const hotelApi = axios.create({baseURL:"http://localhost:3000/api/hotel"})
const fetch = (props: Props) => {
    const getData  = async ()=>{
        
        let data = await hotelApi.get("",{params:{perPage:3, page: 5}});
        return data.data; 
    }
    const {data, isLoading} = useSWR("http://localhost:3000/api/hotel", getData);
    useEffect(()=>{
        if(!isLoading){
            console.log(data);
        }
    },[data])
  return (
    <div>fetch</div>
  )
}

export default fetch