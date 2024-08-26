import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000,
        }

    },{timestamps: true})


    export const contact = mongoose.model("contact", contactSchema);