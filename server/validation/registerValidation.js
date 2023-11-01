import { body } from "express-validator";

export const registerValidation = [
  body("fistName", "Данный формат имени не поддерживается").isLength({
    min: 2,
    max: 20,
  }),

  body("lastName", "Данный формат фамилии не подрреживается").isLength({
    min: 2,
    max: 20,
  }),

  body("password", "Пароль должен содержать более 8 символов").isLength({
    min: 8,
  }),

  body("email", "Некорректный формат почты").isEmail(),

  body("avatarUrl", "Неверный формат аватара").optional().isString(),
];

export const loginValidation = [
  body("email", "Некорректный формат почты").isEmail(),
  body("password", "Неверный формат пароля").isString({ min: 8 }),
];
