import { validationResult } from "express-validator";
import { apiError } from "../utils/apiError.js";

const validate = (req, res, next) => {
    const errors = validationResult(req);

    try {
        if (!errors.isEmpty()) {
            console.log('Errors:',errors);
            throw new apiError(400, "Invalid Data", errors.array());
        }
    
        next();
    } catch (error) {
        throw new apiError(401, error?.message || "Invalid Data");
    }
};

export { validate };
