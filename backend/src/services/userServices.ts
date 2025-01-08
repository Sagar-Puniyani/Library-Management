import bcrypt from "bcrypt";

import {config} from '../config'

import userDao, {IUserModel} from '../daos/userDaos';
import {IUser} from '../models/user';
import { unableToSaveError, InvalidCredentialsError } from "../utils/LibraryError";

export async function register(user :IUser) : Promise<IUserModel>{ 

    const ROUNDS = config.server.rounds;
    try {

        const hashedPassword = await bcrypt.hash(user.password,ROUNDS);

        const savedUser = new userDao({...user, password : hashedPassword});
        return savedUser.save();
    } catch (error : any ) {
        throw new unableToSaveError(error.meassage);
    }
    
}

export async function login(credentials :{email : string , password : string}) : Promise<IUserModel>{
    

   const {email , password} = credentials;

   try {
    const user = await userDao.findOne({email});
    console.log("email service : " , email);
    console.log("password service : " , password);
    console.log("User service : " , user);
    
    if(!user) {
        throw new InvalidCredentialsError("Invalid credentials");
    }
    else {
        const validPassword: Boolean = await bcrypt.compare(password , user.password);

        if (validPassword) {
            return user;
        }else {
            throw new InvalidCredentialsError("Invalid credentials");
        }
    }


   } catch (error : any ) {
        throw new Error (error.message);
   }
}