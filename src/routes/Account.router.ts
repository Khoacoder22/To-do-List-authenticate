import * as AccountController from '../controllers/account.controller';
import { Router } from "express";
import { validateRequest } from '../middlewares/validateRequest';
import { LoginSchema} from "../schemas/Login.schema";
import { Registerschema } from '../schemas/Register.schema';

const Account = Router();

Account.post("/Login", validateRequest(LoginSchema) ,AccountController.Login);
Account.post("/Register", validateRequest(Registerschema) ,AccountController.Register);

export default Account;