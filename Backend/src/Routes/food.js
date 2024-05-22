import { Router } from "express";
import { foodData } from "../controller/food.controller.js";
export const foodrouter = Router();

foodrouter.route("/fooditem").post(foodData);
