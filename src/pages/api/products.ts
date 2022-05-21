import type { NextApiRequest, NextApiResponse } from "next";
import db from '../../helpers/database/db.json'
import { getProductByQueryString } from '../../utils/api.utils'

type Data = {
  contents: Array<any>;
  total: number;
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  switch (req.method) {
    case 'GET':
      let { contents }: any = db;
      let data: Array<any> = getProductByQueryString(contents, query);

      res.status(200).json({
        contents: data,
        total: data.length
      });
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}
