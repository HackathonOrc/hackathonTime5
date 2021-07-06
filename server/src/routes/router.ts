import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
const userRoute = require ('../routes/userRoute')

const router = Router();

router.use('/', homeRoutes);
router.use('/user', userRoute);

export default router;