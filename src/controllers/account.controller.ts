import {Request, Response} from "express";
import * as LoginRegisterServices from "../services/Account.service";

//Register the user
export const Register = async (req: Request, res: Response) => {
    try{
        
        const { name, gender, dob, username, password } = req.body;

        const result = await LoginRegisterServices.registerService({name, gender, dob, username, password });
        

        return res.status(201).json({
            message: "User registered successfully",
            data: result,
          });
    } catch(error: any){
        return res.status(400).json({
            message: error.message || "Registration failed",
          });
    }
}


//Create Login Service 
export const Login = async (req: Request, res: Response) => {
    try{
        const {username, password} = req.body;
        if (!password || password.length < 6) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const newUser = await LoginRegisterServices.loginService(username, password);

        return res.status(200).json(newUser);
    } catch(error: any){
        return res.status(500).json({message :error.message});
    }
}