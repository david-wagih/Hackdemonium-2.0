import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// http://localhost:3000/api/createGoal

const createGoal = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const title = req.body.title;
    const minutes = req.body.minutes;
    const hours = req.body.hours;
    const days = req.body.days;
    const weeks = req.body.weeks;
    const months = req.body.months;
    const years = req.body.years;
    const tagId = req.body.tagId;
    const userId = req.body.userId;
    const newGoal = await prisma.goal.create({
      data: {
        title: title,
        minutes: minutes,
        hours: hours,
        days: days,
        weeks: weeks,
        months: months,
        years: years,
        tag_id: tagId,
        user_id: userId,
      },
    });
    res.json(newGoal);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default createGoal;
