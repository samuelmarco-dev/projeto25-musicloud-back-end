import { Router } from "express";

import userRouter from "./userRouter.js";
import loginSocialRouter from "./loginSocialRouter.js";

const routes: Router = Router();

routes.use('/user', userRouter);
routes.use('/login', loginSocialRouter);

export default routes;
