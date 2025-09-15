import * as UserHandler from "../services/user.service";
import {Request, Response} from 'express';
import {Gender} from "../enum/enum";

//Create 
export const createUser = async(req: Request, res: Response) => {
    try{

        const {name, gender, dob} = req.body;
        if(gender && !Object.values(Gender).includes(gender)){
            res.status(400).json({
                message: "Invalid Gender"
            });
        }
        const newUser = await UserHandler.createUser(name, gender, dob);
        return res.status(201).json(newUser);

    } catch(error : any){

        return res.status(500).json({message: error.message || "System error"});
        
    }
}

//Get all users
export const getAllUser = async(req: Request, res: Response) => {
    try{
        const UserList = await UserHandler.getAllUser();
        return res.status(200).json(UserList);
    }
    catch(error: any){
        return res.status(500).json({message: error.message || "System error"});
    }
}


//Delete User 
export const deleteUser = async(req: Request, res: Response) => {
    try {
        const userList = await UserHandler.deleteUser(req.params.id);
        return res.status(200).json(userList);
    } catch (error: any){
        return res.status(500).json({message: error.message || "System error"});
    }
}

//Update User
export const updateUser = async(req: Request, res: Response) => {
    try{
        const {gender} = req.body;
        if(gender && !Object.values(Gender).includes(gender)){
            res.status(400).json({message: `Invalid gender ${gender}`});
        }
    } catch(error: any){
        return res.status(500).json({
            message: error.message || "System error" 
        })
    }
}

