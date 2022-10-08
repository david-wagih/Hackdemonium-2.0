import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma";

// todo - add register function - add login function
// todo - add get user function


const register = async (
  email: string,
  password: string,
  username: string,
  phone: string
) => {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      username: username,
      phone: phone,
    },
  });
  return user;
};
const login = async (
  email: string,
  password: string,
  phone: string
): Promise<any> => {
  if (email) {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    // todo - add password check
    if (user) {
      if (password === user.password) {
        return user;
      } else {
        return null;
      }
    }
    return user;
    // todo - add phone check
  } else if (phone) {
    const user = await prisma.user.findFirst({
      where: {
        phone: phone,
      },
    });
    if (user) {
      if (password === user.password) {
        return user;
      } else {
        return null;
      }
    }
    return user;
  } else {
    return null;
  }
};

export { register, login };
