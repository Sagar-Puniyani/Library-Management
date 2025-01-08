import bcrypt from "bcrypt";

import {config} from '../config'

import userDao, {IUserModel} from '../daos/userDaos';
import {IUser} from '../models/user';
import { unableToSaveError } from "../utils/LibraryError";

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

