import express from "express";
import checkAuth from "../utils/checkAuth.js";
import { AuthControllers } from "../controllers/index.js";
import {
  loginValidation,
  registerValidation,
} from "../validation/registerValidation.js";

const router = express.Router();

router.post("/register", registerValidation, AuthControllers.createUser);

export default router;
