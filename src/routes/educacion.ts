import { Router } from 'express';
import { getEducaciones } from '../controllers/educacion';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /educacion
router.get('/',validateToken , getEducaciones)

export default router;