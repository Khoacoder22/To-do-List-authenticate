import * as ToListItemsController from '../controllers/to-do-list-items.controller';
import { Router } from "express";
import { validateRequest } from '../middlewares/validateRequest';
import {TodoItemSchema} from "../schemas/TodoItem.schema";
import { updateItemSchema } from '../schemas/Updateitem.schema';

const ToListItems = Router();

ToListItems.post("/:to_do_group_id", validateRequest(TodoItemSchema),ToListItemsController.createTodolistItems);
ToListItems.put("/:id", validateRequest(updateItemSchema),ToListItemsController.updateTodolistItems);
ToListItems.delete("/:id", ToListItemsController.deleteTodolistItems);
ToListItems.get("/:to_do_group_id/items", ToListItemsController.getTodoListItems);

export default ToListItems;
