import { Router } from "express";
import { check } from "express-validator";
import { submitContactForm } from "../controllers/contact.controller.js";
import { validate } from "../middleware/validation.middleware.js";

const router = Router();

router.route('/submit').post(
    [
        check('firstName').trim().notEmpty().withMessage("First name is required"),
        check('lastName').trim().notEmpty().withMessage("Last name is required"),
        check('email').trim().isEmpty().withMessage("Email is required"),
        check('maessage').trim().notEmpty().withMessage("Message is required"),
        validate
    ],
    submitContactForm
);

export default router ;