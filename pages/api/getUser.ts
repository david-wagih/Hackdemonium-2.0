import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { getUserModel } from "../../models/User";

// http://localhost:3000/api/getUser

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.body.id ? req.body.id : null;
    let userModel: getUserModel;
    const userInfo = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    const userGoals = await prisma.goal.findMany({
      where: {
        user_id: id,
      },
    });
    const userBadges = await prisma.friends.findMany({
      where: {
        user_id: id,
      },
      select: {
        friend_id: true,
      },
    });
    userModel = {
      id: userInfo!.id,
      username: userInfo!.username,
      email: userInfo!.email,
      phone: userInfo!.phone,
      badges: userBadges,
      goals: userGoals,
    };
    res.status(200).json(userModel);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default getUser;
