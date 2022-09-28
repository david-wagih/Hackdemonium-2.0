import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// http://localhost:3000/api/createGoal

const createGoal = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const title = req.body.title;
    const time = Number(req.body.time);
    const category = req.body.category;
    const notificationFrequency = req.body.notificationFrequency;
    const userId = req.body.userId;
    const newGoal = await prisma.goal.create({
      data: {
        title: title,
        time: time,
        category: category,
        notificationFrequency: notificationFrequency,
        user_id: userId,
      },
    });
    res.json(newGoal);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default createGoal;
