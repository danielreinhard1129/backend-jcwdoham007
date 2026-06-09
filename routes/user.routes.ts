import express from "express";
import {
  createUserController,
  getUserController,
  getUsersController,
} from "../controllers/user.controller";
import { createUserValidator } from "../validators/user.validator";

const userRoutes = express.Router();

userRoutes.get("/", getUsersController);
userRoutes.get("/:id", getUserController);
userRoutes.post("/", createUserValidator, createUserController);

export { userRoutes };
