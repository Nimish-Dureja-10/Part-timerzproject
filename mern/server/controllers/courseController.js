import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js'
import {Course} from '../models/Course.js'
import ErrorHandler from "../utils/errorHandler.js"

export const getAllCourses = catchAsyncErrors(async (req,res,next) => {
    const courses = await Course.find().select("-lectures");
    res.status(200).json({success:true,courses});
});

export const createCourse = catchAsyncErrors(async (req,res,next) => {
    const {title,description,category,createdBy} = req.body
    // const file = req.file 
    if(!title || !description || !category || !createdBy) 
        return next(new ErrorHandler("Please add all fields",400))

    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster:{
            public_id : "temp",
            url : "temp",
        }
    })
    res.status(200).json({success:true,message : "Course Created Successfully. You can add lectures now."});
});

export const getCourseLectures = catchAsyncErrors(async (req,res,next) => {
    const course = await Course.findById(req.params.id);
    if(!course)
    return next(new ErrorHandler("Course Not Found",404)); 

    course.views +=1;
    
    await course.save();

    res.status(200).json({success:true,lectures: course.lectures});
});

export const addCourseLectures = catchAsyncErrors(async (req,res,next) => {
    const {id} = req.params;
    const {title,description} = req.body;

    // const file = req.file;

    const course = await Course.findById(id);
    if(!course)
    return next(new ErrorHandler("Course Not Found",404)); 


    course.lectures.push({
        title,
        description,
        video : {
            public_id : "url",
            url : "url"
        }
    })

    course.numOfVideos = course.lectures.length;

    
    await course.save();

    res.status(200).json({success:true,mesage: "Lecture added in course"});
});