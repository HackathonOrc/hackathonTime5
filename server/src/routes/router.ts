import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
import userRoute from './userRoute';

const router = Router();

router.use('/', homeRoutes);
router.use('/user', userRoute);

export default router;