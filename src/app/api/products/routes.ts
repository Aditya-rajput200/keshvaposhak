import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {

    const products = await prisma.product.findMany();
    res.status(200).json(products);
 
} 
