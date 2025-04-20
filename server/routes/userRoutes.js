import express from 'express';
import { getUserData, purchaseCourse, userEnrolledCourses } from '../controllers/userController.js';

const userRouter = express.Router();

// get-user-data.
userRouter.get('/data', getUserData);

// enrolled-courses.
userRouter.get('/enrolled-courses', userEnrolledCourses);

// purchase-course.
userRouter.post('/purchase', purchaseCourse);

export default userRouter;