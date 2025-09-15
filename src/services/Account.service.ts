import { TodoAccount, IAccount } from "../models/Account";
import { User } from "../models/User";
import jwt, { SignOptions } from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN;

// đăng kí 
export const registerService = async (data: {
    name: string;
    gender: string;
    dob: Date;
    username: string;
    password: string;
}) => {const {name, gender, dob, username, password} = data;

    //Check trùng username
    const exisiting = await TodoAccount.findOne({ username });

    if(exisiting){
        throw new Error("User name already exist");
    }

    //New User
    const newUser = await User.create({name, gender, dob});

    //Hash password
    const hashed = await bcryptjs.hash(password, 10);

    //Tạo user 
    const newAccount = await TodoAccount.create({
        user_id: newUser._id,
        username,
        hashedPassword: hashed,
    });
    
    return {user: newUser, account: newAccount};
};

//Login service
export const loginService = async (username: string, password: string) => {
    const account = await TodoAccount.findOne({username}).populate("user_id", "name");

    if(!account){
        throw new Error("Account not found");
    }

    const isValid = await bcryptjs.compare(password, account.hashedPassword);
    if(!isValid){
        throw new Error("Invalid password");
    }

    return {username: account.username, name: (account.user_id as any).name,};
};


