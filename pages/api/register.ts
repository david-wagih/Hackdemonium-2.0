import { NextApiRequest, NextApiResponse } from "next";
import { register } from "../../controllers/userController";

// http://localhost:3000/api/register

const createNewUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password, username, phone } = req.body;
    const newUser = await register(email, password, username, phone);
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default createNewUser;
