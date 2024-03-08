import { NextFunction, Request, Response } from "express";
import { TryCatchBlockWrapper } from "../middlewares/error.js";
import { RequestFoodDescBody } from "../types/types.js";
import { Desc } from "../schema/dsec.js";
import ErrorHandler from "../utils/utility_classes.js";

export const newFood = TryCatchBlockWrapper(
    async(
        req: Request<{},{},RequestFoodDescBody>,
        res:Response,
        next:NextFunction
    ) => {
        const {img, title, desc, recipe} = req.body;

        if(!img || !title || !desc || !recipe)
        {
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
        const {id} = req.params;
        const desc = await Desc.findById(id);

        if(!desc)
        {
            return next(new ErrorHandler("No Items Found" ,404));
        }
        
        return res.json({
            success: true,
            desc
        })
    }
);