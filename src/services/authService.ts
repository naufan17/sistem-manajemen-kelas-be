import User from "../models/userModel";
import { findByEmail, create } from "../repositories/userrepository";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

export const register = async (
  name: string,
  email: string, 
  password: string
): Promise<User | null> => {
  try {
    const user: User | undefined = await findByEmail(email);
    if (user) return null;

    const hashedPassword: string = await bcrypt.hash(password, 10);
    const newUser: User = await create(name, email, hashedPassword);

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user");
  }
}

export const login = async (
  email: string, 
  password: string
): Promise<{ 
  accessToken: string; 
  expiresIn: number | undefined; 
  tokenType: string 
} | null> => {
  try {
    const user: User | undefined = await findByEmail(email);
    if (!user) return null;

    const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    const accessToken: { 
      accessToken: string; 
      expiresIn: number | undefined; 
      tokenType: string 
    } = generateToken({ sub: user.user_id });

    return accessToken;
  } catch (error) {
    console.log(error);
    throw new Error("Error logging in");
  }
}