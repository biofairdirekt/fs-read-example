// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let helloWorld = fs.readFileSync(path.join(process.cwd(), 'assets', 'helloworld.txt'), 'utf8');

  let file1 = fs.readFileSync(path.join(process.cwd(), 'assets', 'geschaeftskundenversand-api-3.2.2.wsdl'), 'utf8');
  let file2 = fs.readFileSync(path.join(process.cwd(), 'assets', 'geschaeftskundenversand-api-3.2.2-schema-cis_base.xsd'), 'utf8');
  let file3 = fs.readFileSync(path.join(process.cwd(), 'assets', 'geschaeftskundenversand-api-3.2.2-schema-bcs_base.xsd'), 'utf8');


  res.status(200).json({ name: helloWorld })
}
