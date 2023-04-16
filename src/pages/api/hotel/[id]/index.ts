// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type Data = {
  name: string
}|any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {id} = req.query;
    const prisma = new PrismaClient()
    if(req.method=="GET"){
        try {
          let result =  await prisma.hotel.findFirstOrThrow({where:{id: String(id)}})
          res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({mesagge: error.mesagge})
        }
    }
    else{
        res.status(400).json({message: "method not allow"})
    }
}
