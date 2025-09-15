import { Router } from "express";
import Todolist from "./to-do-list.router";
import ToListItems from "./to-list-items.router";
import Account from "./Account.router";
import User from "./user.router";

const index = Router();

//To do list
index.use("/Todolist", Todolist);

// To do items
index.use("/TodoItems", ToListItems);

// User route
index.use("/User", User);

// Login
index.use("/", Account);

export default index;
