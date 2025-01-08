import bcrypt from "bcrypt";

import {config} from '../config'

import userDao, {IUserModel} from '../daos/userDaos';
import {IUser} from '../models/user';

export async function register(user :IUser) : Promise<IUserModel>{ 

    const ROUNDS = config.server.rounds;
    try {

        const hashedPassword = await bcrypt.hash(user.password,ROUNDS);

        const savedUser = new userDao({...user, password : hashedPassword});
        return savedUser.save();
    } catch (error) {
        throw new Error ("Unable to create user");
    }
    
}

