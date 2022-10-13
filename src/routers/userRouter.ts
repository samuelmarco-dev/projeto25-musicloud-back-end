import { Router } from "express";

const userRouter: Router = Router();

userRouter.get('/:name');
userRouter.post('/sign-up');
userRouter.post('/sign-in');
userRouter.post('/logout');
userRouter.patch('/');
userRouter.delete('/:id');

export default userRouter;
