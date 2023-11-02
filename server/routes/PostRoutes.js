import express from "express";
import checkAuth from "../utils/checkAuth";
import checkUserIsAdmin from "../utils/checkUserIsAdmin";
import { PostControllers } from "../controllers/index.js";

const router = express.Router();

router.post(
  "/create",
  checkAuth,
  checkUserIsAdmin,
  postValidation,
  PostControllers.createPost
);
