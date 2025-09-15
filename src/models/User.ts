import mongoose, {Document, Schema} from "mongoose";
import {Gender} from "../enum/enum";

export interface IUser extends Document {
    name: string, 
    gender: string,
    dob: Date,
    createAt: Date,
    updateAt: Date
}

const UserSchema = new Schema<IUser>(
    {
        name: {type: String, required: true},
        gender: {type: String, enum: Object.values(Gender), required: true},
        dob: {type: Date}
    },{
        timestamps: true
    }
);

export const User = mongoose.model<IUser>('User', UserSchema);