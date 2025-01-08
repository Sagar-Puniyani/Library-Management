import express  from "express";
import Authcontroller from "../controllers/Authcontroller";
import { ValidateSchema , schema } from "../middlewares/validation";


const router = express.Router();

router.post("/register", ValidateSchema(schema.user.create) , Authcontroller.handleRegister);
router.post("/login",  ValidateSchema(schema.user.login) ,Authcontroller.handleLogin);


export = router;