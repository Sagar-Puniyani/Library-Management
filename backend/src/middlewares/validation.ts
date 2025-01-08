import joi , {ObjectSchema} from "joi";

import { NextFunction, Request, Response  } from "express";
import { IUser } from '../models/user';

export function ValidateSchema(schema: ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error: any) {
            res.status(422).json({ message: "Validation error" });
        }
    };
}


export const schema = {
    user : {
        create : joi.object<IUser>({
            type : joi.string().valid('ADMIN', 'EMPLOYEE', 'PATRON').required(),
            firstName : joi.string().required(),
            lastName : joi.string().required(),
            email : joi.string().email().required(),
            password : joi.string().required()
        }),
        login : joi.object<{email : string , password : string}>({
            email : joi.string().email().required(),
            password : joi.string().required()
        })
    }
}