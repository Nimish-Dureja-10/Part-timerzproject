import {catchAsyncErrors} from '../middlewares/catchAsyncErrors.js'
import ErrorHandler from '../utils/errorHandler.js'
import {User} from '../models/User.js'
import { sendToken } from '../utils/sendToken.js';
import {Course} from '../models/Course.js'

export const register = catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password} = req.body;
    // const file = req.file;
    if(!name || !email || !password)
        return next(new ErrorHandler('Please enter all field',400));
    
    let user = await User.findOne({email});

    if(user) return next(new ErrorHandler("User already exits",409));

    user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id : "temp",
            url : "tempurl",
        },
    });
    sendToken(res,user,"Registered Successfully",201)
});

export const login = catchAsyncErrors(async(req,res,next)=>{
    const {email,password} = req.body;
    // const file = req.file;
    if(!email || !password)
        return next(new ErrorHandler('Please enter all field',400));
    
    const user = await User.findOne({email}).select("+password");

    if(!user) return next(new ErrorHandler("Incorrect Email or Password",401));

    const isMatch = await user.comparePassword(password);

    if(!isMatch) 
        return next(new ErrorHandler("Incorrect Email or Password",401));

    sendToken(res,user,`Welcome back ${user.name}`,200);
});

export const logout = catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly:true,
        secure:true,
        sameSite:"none",
    }).json({success:true,message:"Logged Out Successfully"});
});

export const getMyProfile = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user._id);
    res.status(200).json({success:true,user});
});

export const changePassword = catchAsyncErrors(async(req,res,next)=>{
    const {oldPassword,newPassword} = req.body
    
    if(!oldPassword || !newPassword)
    return next(new ErrorHandler("Please enter all fields",400));
    
    const user = await User.findById(req.user._id).select("+password");
    
    const isMatch = await user.comparePassword(oldPassword); 
    
    if(!isMatch)
    return next(new ErrorHandler("Incorrect Old Password",400));

    user.password = new Password;

    await user.save();
    res.status(200).json({success:true,message : "Password Changed Successfully"});
});

export const updateProfile = catchAsyncErrors(async(req,res,next)=>{
    const {name,email} = req.body;

    const user = await User.findById(req.user._id);
    
    if(name) user.name = name;
    if(email) user.email = email;

    await user.save();
    res.status(200).json({success:true,message : "Profile Updated Successfully"});
});

export const updateProfilePicture = catchAsyncErrors(async(req,res,next)=>{
    res.status(200).json({success:true,message:"Profile Picture Updated Successfully"})
});

export const addToPlaylist = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user._id);

    const course = await Course.findById(req.body.id);

    if(!course) 
    return next(new ErrorHandler("Invalid Course Id",404));

    const itemExist = user.playlist.find((item)=>{
        if(item.course.toString() === course._id.toString())
        return true;

    })

    if(itemExist) 
    return next(new ErrorHandler("Course Already Exist",409))

    user.playlist.push({
        course : course._id,
        poster : course.poster.url,
    })

    await user.save();

    res.status(200).json({
        success:true,
        message : "Course Added Successfully"
    })
});

export const removeFromPlaylist = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user._id);

    const course = await Course.findById(req.query.id);

    if(!course) 
    return next(new ErrorHandler("Invalid Course Id",404));

    const newPlaylist = user.playlist.filter((item)=>{
        if(item.course.toString !== course._id.toString())
        return item;
    });

    user.playlist = newPlaylist;

    await user.save();

    res.status(200).json({
        success:true,
        message : "Course Removed from Playlist"
    })
});