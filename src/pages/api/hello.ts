// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =|any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method=="POST"){
  res.status(200).json({ body: req.body})
  }
}
