import express from 'express';
import {loginUser, registerUser, admiLogin} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', admiLogin);

export default userRouter;