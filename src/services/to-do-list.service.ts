import {TodoList, ITodoList} from "../models/To-do-list";
import {TodoItem} from "../models/To-do-Item";
import { TodolistStatus, TodoitemStatus } from "../enum/enum";
import {User, IUser} from "../models/User";

// Create to do list 
const createTodoList = async (name: string, user_id: string): Promise<ITodoList> => {
    const findUserId = await User.findById(user_id);
    
    if(!findUserId){
        throw new Error("User id is not exist!");
    }

    const createTodo = new TodoList({name, user_id});
    return await createTodo.save();
}

//name ở đây có nghĩa là tham số tùy chọn optional: muốn chuyền hoặc không 
const UpdateTodoList = async (id: string, name?: string): Promise<ITodoList | null> => {
    const existingTodo = await TodoList.findById(id);

    if(!existingTodo){
        throw new Error("To-do-list not found");
    }

    //lấy toàn bộ items của list cha 
    const items = await TodoItem.find({to_do_group_id: id});
    
    const allFinished = items.length > 0 && items.every((item) => item.status === TodoitemStatus.Finish);

    const newStatus = allFinished ? TodolistStatus.Finished : TodolistStatus.Unfinished;

    const updateItem = await TodoList.findByIdAndUpdate(
        id, {name: name || existingTodo.name, status: newStatus}, {new: true});

    return updateItem;
};


//delete to do list 
const deleteTodoList = async (id: string): Promise<ITodoList | null> => {
    const existingTodo = await TodoList.findById(id);

    if(!existingTodo){
        throw new Error("To-do-list not found");
    }
    return await TodoList.findByIdAndDelete(id);
};

//Get all list theo user 
const getAllTodoListByUser = async (user_Id: string): Promise<ITodoList[] | null> => {
    return await TodoList.find({user_id: user_Id});
};

export {createTodoList, UpdateTodoList, deleteTodoList, getAllTodoListByUser}; 
