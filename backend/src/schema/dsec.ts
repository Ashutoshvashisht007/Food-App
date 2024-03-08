import mongoose from "mongoose";

interface Idsec extends Document {
    img: string;
    title: string;
    desc: string;
    recipe: string;
}

const schema = new mongoose.Schema(
    {
        img: {
            type: String,
            required: [true, "Please add image"],
        },
        title: {
            type: String,
            required: [true, "Please add title"],
        },
        desc: {
            type: String,
            required: [true, "Please Enter dsecription"],

        },
        recipe: {
            type: String,
            required: [true, "Please Enter recipe"],
        },
    },
    {
        timestamps: true,
    },
);

export const Desc = mongoose.model<Idsec>("Desc", schema);