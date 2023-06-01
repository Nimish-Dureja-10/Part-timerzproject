import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';
import { catchAsyncErrors } from './catchAsyncErrors.js';


export const isAuthenticated = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token) return next(new ErrorHandler("Need to login",401));

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);

    next();
})