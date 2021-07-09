import {Request, Response, Router} from 'express';
import UserController from '../controllers/userController';

const userController = new UserController();

const userRoute = Router();

userRoute.post('/', (req: Request, res: Response) =>{
    userController.createUser(req, res);
});

userRoute.get('/', (req: Request, res: Response) =>{
    userController.getAllUsers(req, res);
});

export default userRoute;