import express from "express";
import { addCourseLectures, createCourse, getAllCourses, getCourseLectures } from "../controllers/courseController.js";

const router = express.Router();

router.route('/courses').get(getAllCourses);
router.route('/createcourse').post(createCourse);
router.route('/course/:id').get(getCourseLectures).post(addCourseLectures);
export default router;