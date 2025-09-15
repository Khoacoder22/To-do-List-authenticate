import mongoose, {Document, Schema} from "mongoose";
import {AccountStatus} from "../enum/enum";

export interface IAccount extends Document {
    user_id: mongoose.Types.ObjectId;
    username: string;
    hashedPassword: string;
    accessToken?: string;
    refreshToken?: string;
    status: AccountStatus;
    createAt: Date;
    updateAt: Date;
}   

const AccountSchema = new Schema<IAccount>(
    {
       user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true},
       username: {type: String, required: true},
       hashedPassword: {type: String, required: true},
       accessToken: {type: String},
       refreshToken: {type: String},
       status: {type: String, enum: Object.values(AccountStatus), default: AccountStatus.Active}
    }, {
        timestamps: true,
    }
)

export const TodoAccount = mongoose.model<IAccount>('Account', AccountSchema);