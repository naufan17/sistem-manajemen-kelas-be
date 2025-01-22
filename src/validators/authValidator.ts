import { body } from "express-validator";

export const registerValidator = () => {
  return [
    body("name")
      .isString()
      .notEmpty()
      .withMessage("Name is required"), 
    body("email")
      .isEmail()
      .withMessage("Invalid email"),
    body("password")
      .isString()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
  ]
}

export const loginValidator = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Invalid email"),
    body("password")
      .isString()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
  ]
}