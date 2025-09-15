import * as UserController from '../controllers/user.controller';
import { Router } from "express";

const User = Router();

User.post("/", UserController.createUser);
User.put("/:id", UserController.updateUser);
User.delete("/:id", UserController.deleteUser);
User.get("/", UserController.getAllUser);

export default User;