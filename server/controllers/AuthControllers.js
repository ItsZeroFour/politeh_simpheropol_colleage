import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import { validationResult } from "express-validator";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;

export const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    // Hash password
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      fatherName: req.body.fatherName,
      email: req.body.email,
      password: hashPassword,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      SECRET,
      { expiresIn: "30d" }
    );

    const userData = user._doc;

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Не удалось зарегестрироваться",
    });
  }
};
