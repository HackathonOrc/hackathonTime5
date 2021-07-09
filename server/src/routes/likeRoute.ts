import { Request, Response, Router } from 'express';
import LikeController from '../controllers/likeController';

const likeController = new LikeController();

const likeRoute = Router();

likeRoute.get('/all', (req: Request, res: Response) => {
    likeController.getAllLikes(req, res);
});

likeRoute.get('/', (req: Request, res: Response) => {
    likeController.getLike(req, res);
});

likeRoute.post('/', (req: Request, res: Response) => {
    likeController.createLike(req, res);
});

likeRoute.delete('/', (req: Request, res: Response) => {
    likeController.deleteLike(req, res);
});

export default likeRoute;