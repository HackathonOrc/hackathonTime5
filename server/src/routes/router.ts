import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
import userRoute from './userRoute';
import likeRoute from './likeRoute';

const router = Router();

router.use('/', homeRoutes);
router.use('/user', userRoute);
router.use('/like', likeRoute);

export default router;