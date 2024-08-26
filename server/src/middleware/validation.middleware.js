import { validationResult } from "express-validator";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const validate = asyncHandler( (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        throw new apiError(400,"Invalid data.",errors.array() );
    }

    next()
});

export { validate }