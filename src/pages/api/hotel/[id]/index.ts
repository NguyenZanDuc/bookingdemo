// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
const BaseUrl = "https://xvxcgatezndxyaprjjvg.supabase.co/storage/v1/object/public/hotelImage/"
type Data = {
  name: string
}|any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {id} = req.query;
    const supabaseClient = useSupabaseClient();
    const prisma = new PrismaClient()
    if(req.method=="GET"){
        try {
          let result =  await prisma.hotel.findFirstOrThrow({where:{id: String(id)}})
          res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({mesagge: error.mesagge})
        }
    }
    else if(req.method=="DELETE"){
        try {
          let result =  await prisma.hotel.delete({where:{id: String(id)}})
          await supabaseClient.storage.from('hotelImage').remove(result.images);
          res.status(200).json({mesagge: "deleted"});
        } catch (error: any) {  
          res.status(500).json({mesagge: error.mesagge})
        }
    }
    else{

        res.status(400).json({message: "method not allow"})
    }
}