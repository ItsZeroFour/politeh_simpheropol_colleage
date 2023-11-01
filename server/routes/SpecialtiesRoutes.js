import express from "express";
import { createSpecialityValidation } from "../validation/specialityValidation.js";
import checkAuth from "../utils/checkAuth.js";
import checkUserIsAdmin from "../utils/checkUserIsAdmin.js";
import { SpecialtiesControllers } from "../controllers/index.js";

const router = express.Router();

router.post(
  "/create",
  // checkAuth,
  // checkUserIsAdmin,
  createSpecialityValidation,
  SpecialtiesControllers.createSpeciality
);

export default router;
