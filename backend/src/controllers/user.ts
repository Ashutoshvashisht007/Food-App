import { NextFunction, Request, Response } from "express";
import { TryCatchBlockWrapper } from "../middlewares/error.js";
import { RequestUserBody, RequestUserLoginBody } from "../types/types.js";
import { User } from "../schema/user.js";
import ErrorHandler from "../utils/utility_classes.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const newUser = TryCatchBlockWrapper(
    async (req: Request<{}, {}, RequestUserBody>,
        res: Response,
        next: NextFunction
    ) => {
        const { name, email, password, gender } = req.body;

        let user = await User.findOne({ email: email });

        if (user) {
            next(new ErrorHandler("Email Already Exists", 403));
        }

        if (!name || !email || !password || !gender) {
            next(new ErrorHandler("Please Add All Fields", 400));
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        user = await User.create({
            name,
            email,
            gender,
            password: hash,
        });
        res.status(201).json({
            success: true,
            message: "Successfully Signed Up",
        });
    }
);

export const getUser = TryCatchBlockWrapper(
    async (
        req: Request<{}, {}, RequestUserLoginBody>,
        res: Response,
        next: NextFunction) => {
        const { email, password } = req.body;

        let user = await User.findOne({ email: email });

        if (!user) {
            return next(new ErrorHandler("Email not found", 404));
        }

        const isCorrect = await bcrypt.compare(password, user.password);
        if (!isCorrect) {
            return next(new ErrorHandler("Password Incorrect", 404));
        }
        
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
            expiresIn: '1h',
        });

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(201).json({
            success: true,
            message: `Welcome, ${user.name}`,
        });


    }
)