import { NextFunction, Request, Response } from "express";
import { TryCatchBlockWrapper } from "../middlewares/error.js";
import { RequestFoodDescBody, SearchDescQuery } from "../types/types.js";
import { Desc } from "../schema/dsec.js";
import ErrorHandler from "../utils/utility_classes.js";

export const newFood = TryCatchBlockWrapper(
    async (
        req: Request<{}, {}, RequestFoodDescBody>,
        res: Response,
        next: NextFunction
    ) => {
        const { img, title, desc, recipe } = req.body;

        if (!img || !title || !desc || !recipe) {
            return next(new ErrorHandler("Please add all fields", 404));
        }

        await Desc.create({
            img,
            title,
            desc,
            recipe
        });

        return res.json({
            success: true,
            message: "Food Item Created Successfully"
        })
    }
)

export const foodDesc = TryCatchBlockWrapper(
    async (
        req,
        res,
        next,
    ) => {
        const { id } = req.params;
        const desc = await Desc.findById(id);

        if (!desc) {
            return next(new ErrorHandler("No Items Found", 404));
        }

        return res.json({
            success: true,
            desc
        })
    }
);

export const getAllDesc = TryCatchBlockWrapper(
    async (
        req,
        res,
        next,
    ) => {
        const data = await Desc.find({});

        return res.status(201).json({
            success: true,
            data
        })
    }
);

export const getSearchedDesc = TryCatchBlockWrapper(
    async (
        req: Request<{}, {}, {}, SearchDescQuery>,
        res,
        next,
    ) => {
        const { search } = req.query;
        let data;

        if (search) {
            data = await Desc.find({
                $or: [
                    {
                        title: {
                            $regex: search,
                            $options: "i",
                        }
                    },
                    {
                        recipe: {
                            $regex: search,
                            $options: "i",
                        }
                    }
                ]
            });
        }

        return res.status(201).json({
            success: true,
            data,
        })
    }
);