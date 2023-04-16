import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
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
        const {name, address, images, description, star, avatar, rooms, aroundHotel, utilitiy, generalRule} = req.body;
       let result =  await prisma.hotel.create({
            data:{
                name: name,
                address: address,
                star:star,
                avatar: avatar,
                images: images,
                description: description,
                rooms:rooms,
                aroundHotel: aroundHotel,
                utility: utilitiy,
                generalrule: generalRule
            }
        })

        res.status(201).json(result)
    } catch (error:any) {
        res.status(500).json({message: error.message})
    }
  }else if(req.method == "GET"){
    try {
        let result = await prisma.hotel.findMany({select:{id:true, name:true, avatar: true, address:true, description:true, rate:{select:{totalRate:true}}}});
        res.status(200).json(result)
    } catch (error: any) {
        res.status(500).json({message: error.message}) 
    }
  }else{
    res.status(400).json({mesagge: "method not allow"})
  }
 
}
