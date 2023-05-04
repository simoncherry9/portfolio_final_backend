import { Router } from 'express';
import { getEducaciones, newEducacion } from '../controllers/educacion';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /educacion
router.get('/',  getEducaciones)
router.post('/', validateToken, newEducacion);

export default router;