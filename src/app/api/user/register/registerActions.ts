import { IUser } from "./types";
import { User } from "@/models/User";

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const createUser = async (user: IUser) => {
  // check if user already exists
  const existingUser = await User.findOne({ email: user.email });
  if (existingUser) {
    return;
  }

  // Has password
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(user.password, salt);

  //create new user
  const newUser = new User({
    userName: user.userName,
    email: user.email,
    password: hashedPassword,
  });

  return newUser.save();
};

export { createUser };
