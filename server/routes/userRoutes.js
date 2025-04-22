import express from 'express';
import { addUserRating, getUserCourseProgress, getUserData, purchaseCourse, updateUserCourseProgress, userEnrolledCourses } from '../controllers/userController.js';

const userRouter = express.Router();

// get-user-data.
userRouter.get('/data', getUserData);

// enrolled-courses.
userRouter.get('/enrolled-courses', userEnrolledCourses);

// purchase-course.
userRouter.post('/purchase', purchaseCourse);

// update-course-progress.
userRouter.post('/update-course-progress', updateUserCourseProgress);

// get-course-progress.
userRouter.post('/get-course-progress', getUserCourseProgress);

// add-rating.
userRouter.post('/add-rating', addUserRating);

export default userRouter;