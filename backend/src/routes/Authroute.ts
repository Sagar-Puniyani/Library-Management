import express  from "express";
import Authcontroller from "../controllers/Authcontroller";

const router = express.Router();

router.post("/register", Authcontroller.handleRegister);


export = router;