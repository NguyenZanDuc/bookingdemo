import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { create } from 'domain';
type Data = {
  name: string
}|any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const prisma = new PrismaClient();
  if(req.method=="POST"){
    try {
        const {aboutHotel,amenitiesHotel,imageHotel, roomHotel, facilitiesHotel, policiesHotel, settingsHotel} = req.body;
       let result =  await prisma.hotel.create({
          data:{
            nameHotel: aboutHotel.value.nameHotel,
            star: aboutHotel.value.star,
            avatar: imageHotel.value[0],
            images: imageHotel.value,
            property: aboutHotel.value.property,
            nameManager: aboutHotel.value.nameManager,
            phoneNumber: aboutHotel.value.phoneNumber,
            otherPhoneNumber: aboutHotel.value.otherPhoneNumber,
            nameCompany: aboutHotel.value.nameCompany,
            nameToolManager: aboutHotel.value.nameToolManager,
            street: aboutHotel.value.street,
            moreAddress: aboutHotel.value.moreAddress,
            country: aboutHotel.value.country,
            city: aboutHotel.value.city,
            rooms:{
              set: {
              nameRoom: roomHotel.value.nameRoom,
              typeRoom:roomHotel.value.typeRoom,
              nameOptions: roomHotel.value.nameOptions,
              smoking: roomHotel.value.smoking,
              numberRoom: roomHotel.value.numberRoom,
              numberPeople: roomHotel.value.numberPeople,
              bedsOption: roomHotel.value.bedsOption,
              roomSize: roomHotel.value.roomSize,
              price: roomHotel.value.price
            }},
            potalCode: aboutHotel.value.portalCode,
            amenitiesHotel: amenitiesHotel.value,
            facilitiesHotel: facilitiesHotel.value,
            policiesHotel: policiesHotel.value,
            settingsHotel: settingsHotel.value
          }
        })
        res.status(201).json(result)
    } catch (error:any) {
        res.status(500).json({message: error.message})
    }
  }else if(req.method == "GET"){
    try {
        
    } catch (error: any) {
        res.status(500).json({message: error.message}) 
    }
  }else{
    res.status(400).json({mesagge: "method not allow"})
  }
 
}

