import { body } from "express-validator";

export const dormitoryPriceValidation = [
  body("period", "Неверно указан период").isLength({ min: 2, max: 60 }),
  body("price", "Неверно указана цена").isLength({ min: 2, max: 50 }),
  body(
    "forPeopleType",
    "Неверно указано, для какого типа людей этот вариант"
  ).isLength({ min: 2, max: 50 }),
];
