import express from "express";
import checkAuth from "../utils/checkAuth.js";
import checkUserIsAdmin from "../utils/checkUserIsAdmin.js";
import { dormitoryPriceValidation } from "../validation/dormitoryPrice.js";
import { DormitoryPrice } from "../controllers/index.js";

const router = express.Router();

router.post(
  "/create",
  checkAuth,
  checkUserIsAdmin,
  dormitoryPriceValidation,
  DormitoryPrice.createPriceListItem
);

export default router;
