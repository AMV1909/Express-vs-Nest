import { Schema, model } from "mongoose";
import type { IUser } from "../types/types";

export const user = model<IUser>(
    "User",
    new Schema<IUser>(
        {
            username: { type: String, required: true },
            password: { type: String, required: true },
            email: { type: String, required: true },
        },
        { timestamps: true, versionKey: false }
    )
);
