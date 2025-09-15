import { ITodoItem, TodoItem } from "../models/To-do-Item";
import { TodoList } from "../models/To-do-list";
import { UpdateTodoList } from "./to-do-list.service";

// Create new to do list items 
const createTodolistItem = async (
    name: string,
    des: string,
    due_at: Date,
    to_do_group_id: string
): Promise<ITodoItem> => {
    const TodoListExist = await TodoList.findById(to_do_group_id);

    if(!TodoListExist){
        throw new Error("To-do-list not found");
    }

    const todoItem = new TodoItem({name, des, due_at, to_do_group_id});
    const savedItem = await  TodoItem.create(todoItem);

    // cập nhập status 
    await UpdateTodoList(to_do_group_id, TodoListExist.name);
    return savedItem;
}


// Get To do List items 
const getTodoListItems = async (to_do_group_id: string): Promise<ITodoItem[] | null> => {
    return await TodoItem.find({to_do_group_id});
};


// Update Item + Update root's list  
const updateTodolistItems = async (id: string, updateData: Partial<ITodoItem>): Promise<ITodoItem> => {

    const updateItem = await TodoItem.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });

    if(!updateItem){
        throw new Error("To-do-item not found");
    }

    await UpdateTodoList(updateItem.to_do_group_id.toString(), "");

    return updateItem;
};

// Delete Item + Update root's list 
const deleteTodolistItems = async (id: string): Promise<ITodoItem | null> => {
    const item = await TodoItem.findByIdAndDelete(id);

    if(item){
        await UpdateTodoList(item.to_do_group_id.toString(), "");
    }   

    return item;
};

export {createTodolistItem, getTodoListItems, updateTodolistItems, deleteTodolistItems};    
