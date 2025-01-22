import User from "../models/userModel";
import { v4 as uuidv4 } from "uuid";

export const create = async (
  name: string,
  email: string,
  password: string,
): Promise<User> => {
  const user_id: string = uuidv4();
  const role: string = "user";

  return await User.query().insert({
    user_id,
    name,
    email,
    password,
    role,
  }).returning('*');
};

export const findByEmail = async (
  email: string
): Promise<User | undefined> => {
  return await User
    .query()
    .select("email", "password", "role")
    .where("email", email)
    .first();
};
