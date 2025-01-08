import { Request, Response } from "express";
import { register } from "../services/userServices";
import { IUser } from "../models/user";

async  function handleRegister(req: Request, res: Response) {
  try {
    const registeredUser = await register(req.body as IUser);

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: registeredUser._id,
        type: registeredUser.type,
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        email: registeredUser.email,
      },
    });
  } catch (error: any) {

      res
        .status(501)
        .json({ message: "Unable to create user", error: error.message });
    }
}

export default { handleRegister };
