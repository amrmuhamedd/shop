import { Router } from 'express';
import { HelloController } from '../controller/HelloController';
import { HelloUseCase } from '../../application/usecases/HelloUseCase';

const router = Router();
const helloController = new HelloController(new HelloUseCase());

router.get('/hello', (req, res) => helloController.getHello(req, res));

export default router;
