import mongoose,{Schema, Document} from "mongoose";
import { IUser } from "../models/user";

export interface IUserModel extends IUser, Document {};

const userSchema = new Schema<IUserModel>({
    type : {type : String, required : true},
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true}
},
{
    timestamps : true,
    versionKey : false
});

export default mongoose.model<IUserModel>("User", userSchema)