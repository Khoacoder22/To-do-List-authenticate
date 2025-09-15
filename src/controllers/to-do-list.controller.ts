import {Request, Response} from 'express';
import * as TodoListService from '../services/to-do-list.service';

// Create new to do list 
export const createTodolistHandler = async (req: Request, res: Response) => {
    try{
        const {user_id} = req.params;
        const newTodoList = await TodoListService.createTodoList(req.body.name, user_id);
        res.status(201).json(newTodoList);
    } catch(error: any){
        return res.status(400).json({message: error.message});
    }
}

// Get Items 
export const GetTodoHandler = async(req: Request, res: Response) => {
    try{
        const todolist = await TodoListService.getAllTodoListByUser(req.params.user_id);
        res.json(todolist);
    } catch(error: any){
        res.status(400).json({message: error.message}); 
    }
}

// Delete item
export const deleteTodoHandler = async(req: Request, res: Response) => {
    try{
        const deleted = await TodoListService.deleteTodoList(req.params.id);
        res.json(deleted);
    } catch(error : any){
        res.status(400).json({message: error.message});
    }
}

//update
export const updateTodoHandler = async(req: Request, res: Response) => {
    try{
        const updated = await TodoListService.UpdateTodoList(req.params.id, req.body.name);
        res.json(updated);
    } catch(error : any){
        res.status(400).json({message: error.message});
    }
}

