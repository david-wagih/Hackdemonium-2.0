import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// http://localhost:3000/api/createTag

const createTag = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const name = req.body.name ? req.body.name : null;
    const tag = await prisma.tag.create({
      data: {
        title: name,
      },
    });
    res.json(tag);
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export default createTag;
