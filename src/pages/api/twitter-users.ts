// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from './data/users'

type Users = {
  id: number,
  name: string,
  username: string,
  profilePicture: string,
  backgroundPicture: string,
  tweetsId: number[],
  following: number,
  followers: number,
  bio: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Users[]>
) {
  res.status(200).json(users)
}
