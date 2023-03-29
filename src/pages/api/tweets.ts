// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { tweets } from './data/tweets'

type Tweets = {
  id: number,
  owner: {
    name: string,
    username: string,
    profilePicture: string,
  },
  commentsCount: number,
  tweet: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweets[]>
) {
  res.status(200).json(tweets)
}
