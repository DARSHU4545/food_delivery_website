import { Router } from "express";
import { register } from "../controller/user.js";
import { login } from "../controller/user.js";
export const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
