import { Router } from 'express';
import { getEducaciones, newEducacion, deleteEducacion } from '../controllers/educacion';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /educacion
router.get('/',  getEducaciones)
router.post('/', validateToken, newEducacion);
router.delete('/', validateToken, deleteEducacion)

export default router;