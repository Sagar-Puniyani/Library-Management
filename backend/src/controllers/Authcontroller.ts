import { Request, Response } from "express";
import { login, register } from "../services/userServices";
import { IUser } from "../models/user";
import { IUserModel } from "../daos/userDaos";
import { InvalidCredentialsError } from "../utils/LibraryError";

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


async function handleLogin(req: Request, res: Response) {
  const credentials = req.body;

  try {
    console.log("Controller : ",   credentials);
      const LoggedInUser: IUserModel = await login(credentials);
      console.log("Logged In User : ", LoggedInUser);

      res.status(200).json({
          message: "User logged in successfully",
          user: {
            _id: LoggedInUser._id,
            type: LoggedInUser.type,
            firstName: LoggedInUser.firstName,
            lastName: LoggedInUser.lastName,
            email: LoggedInUser.email,
          },
      })
  } catch (error: any) {
    // if (error instanceof InvalidCredentialsError ) {
    //   return res.status(401).json({ message: error.message });
    // }
    // else {
      
    // }
    res.status(501).json({ message: "Unable to login user", error: error.message });
  }
}


export default { handleRegister , handleLogin};
