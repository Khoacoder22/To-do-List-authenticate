import * as ToDoListController from '../controllers/to-do-list.controller';
import { Router } from "express";
import { validateRequest } from '../middlewares/validateRequest';
import { TodoSchema } from '../schemas/Todo.schema';

const ToDoList = Router();

ToDoList.post("/:user_id",validateRequest(TodoSchema) ,ToDoListController.createTodolistHandler);
ToDoList.put("/:id", validateRequest(TodoSchema), ToDoListController.updateTodoHandler);
ToDoList.delete("/:id", ToDoListController.deleteTodoHandler);
ToDoList.get("/:to_do_group_id/items", ToDoListController.GetTodoHandler);

export default ToDoList;