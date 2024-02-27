import mongoose from "mongoose";
import validator from "validator";

interface Iuser extends Document {
    name: string;
    gender: "male" | "female" | "others";
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter name"],
        },
        gender: {
            type: String,
            required: [true, "Please select gender"],
        },
        email: {
            type: String,
            unique: [true, "EMail Already Exist"],
            required: [true, "Please Enter Email"],
            validate: validator.default.isEmail,

        },
        password: {
            type: String,
            required: [true, "Please Enter Password"],
        },
    },
    {
        timestamps: true,
    },
);

export const User = mongoose.model<Iuser>("User", schema);