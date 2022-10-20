import { Router } from "express";
import { signUpUser } from "../controllers/userController.js";
import validationSchema from "../middlewares/validSchemaMiddleware.js";
import schemaSignUp from "../schemas/schemaSignUp.js";

const userRouter: Router = Router();

// userRouter.get('/:name');
userRouter.post('/sign-up', validationSchema(schemaSignUp), signUpUser);
// userRouter.post('/sign-in');
// userRouter.post('/logout');
// userRouter.patch('/');
// userRouter.delete('/:id');

export default userRouter;
