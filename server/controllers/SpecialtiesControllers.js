import { validationResult } from "express-validator";
import SpecialityModel from "../models/Speciality.js";

export const createSpeciality = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { specialityCode, specialityTitle, cvalification, image } = req.body;

    const newSpeciality = new SpecialityModel({
      specialityCode,
      specialityTitle,
      cvalification,
      image,
    });

    await newSpeciality.save();

    res.json(newSpeciality);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Не удалось создать новую специальность",
    });
  }
};
