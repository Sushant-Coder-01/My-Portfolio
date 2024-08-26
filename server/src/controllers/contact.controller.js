import { contact } from "../models/contact.model.js";
import { sanitize } from "../utils/sanitize.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const submitContactForm = asyncHandler( async(req, res) => {

    const{firstName, lastName, email, message} = req.body;

    if([firstName, lastName, email, message].some( (field) => field?.trim() === "")
    ){
        throw new apiError(400, "all fields is required");
    }

    const sanitizedFirstName = sanitize(firstName);
    const sanitizedLastName = sanitize(lastName);
    const sanitizedEmail = sanitize(email);
    const sanitizedMessage = sanitize(message);

    const newContact = new contact({
        firstName: sanitizedFirstName,
        lastName: sanitizedLastName,
        email: sanitizedEmail,
        message: sanitizedMessage,
    });

    const savedContact = await newContact.save();

    if(!savedContact){
        throw new apiError(500,"Failed to save contact");
    }

    return res.status(201).json(
        new apiResponse(200, savedContact, "Form submitted successfully")
    )

});

export { submitContactForm }