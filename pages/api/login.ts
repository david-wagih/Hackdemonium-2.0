import { NextApiRequest, NextApiResponse } from "next";
import { login } from "../../controllers/userController";

// http://localhost:3000/api/login

const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const email = req.body.email ? req.body.email : null;
    const password = req.body.password ? req.body.password : null;
    const phone = req.body.phone ? req.body.phone : null;
    const loginUser = await login(email, password, phone);
    if (loginUser) {
      res.status(200).json(loginUser);
    } else {
      res.status(404).json({ error: "Invalid Credentials" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default loginUser;
