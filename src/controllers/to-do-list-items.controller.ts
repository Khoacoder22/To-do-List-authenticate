import { NextFunction, Request, Response } from "express";
import * as TodoListItemService from "../services/to-do-list-item.service";
import { TodoitemStatus } from "../enum/enum";

// Create new to do list items
export const createTodolistItems = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {to_do_group_id} = req.params;
        const {name, des, due_at} = req.body;
        const newItem = await TodoListItemService.createTodolistItem(name, des, due_at, to_do_group_id);   
        return res.status(201).json(newItem);
    } catch(error: any){
        return res.status(400).json({message: error.message});
    }
}

// Get To do list items
export const getTodoListItems = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {to_do_group_id} = req.params;
        const items = await TodoListItemService.getTodoListItems(to_do_group_id);
        return res.status(200).json(items);
    } catch(error : any){
        return res.status(400).json({message: error.message});
    }
}

// Update Item + Update root's list
export const updateTodolistItems = async(req: Request, res: Response, next: NextFunction) => {
    try{
        //check if the statuses exist in enum
        const {status} = req.body;
        if(status && !Object.values(TodoitemStatus).includes(status)){
            return res.status(400).json({message: `Invalid staus: ${status}`})
        };                
    } catch(error: any){
        res.status(400).json({message: error.message});
    }
}

//Delete item 
export const deleteTodolistItems = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {item_id} = req.params;

        const deleted = await TodoListItemService.deleteTodolistItems(item_id);

        if(!deleted){
            return res.status(404).json({message: "Item not found"});
        }

        return res.status(204).json({
            message: "Item deleted successfully"
        });
    } catch(error: any){
        res.status(400).json({message: error.message});
    }
}

