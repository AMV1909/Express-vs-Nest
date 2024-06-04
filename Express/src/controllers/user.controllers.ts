import type { RequestHandler } from "express";
import { isValidObjectId } from "mongoose";

import { user } from "../models/user";
import {
    validateUserSchema,
    validateUpdateUserSchema,
} from "../zod-schemas/user.zod-schema";

export const getUsers: RequestHandler = async (req, res) => {
    await user
        .find()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json(error));
};

export const getUser: RequestHandler = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(200).json([]);
    }

    await user
        .findById(id)
        .then((data) => res.status(200).json(data || []))
        .catch((error) => res.status(400).json(error));
};

export const createUser: RequestHandler = async (req, res) => {
    const result = validateUserSchema(req.body);

    if (!result.success) {
        return res.status(400).json(result.error);
    }

    await user
        .create(result.data)
        .then((data) => res.status(201).json(data))
        .catch((error) => res.status(400).json(error));
};

export const updateUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const result = validateUpdateUserSchema(req.body);

    console.log("a");

    if (!result.success) {
        return res.status(400).json(result.error);
    }

    await user
        .findByIdAndUpdate(id, result.data, { new: true })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json(error));
};

export const deleteUser: RequestHandler = async (req, res) => {
    const { id } = req.params;

    await user
        .findByIdAndDelete(id)
        .then(() => res.status(204).end())
        .catch((error) => res.status(400).json(error));
};
