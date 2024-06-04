import { object, string } from "zod";
import type { IUser } from "../types/types";

const userSchema = object({
    username: string().min(3).max(255),
    password: string().min(8).max(255),
    email: string().email(),
});

export const validateUserSchema = (data: IUser) => userSchema.safeParse(data);
export const validateUpdateUserSchema = (data: Partial<IUser>) =>
    userSchema.partial().safeParse(data);
