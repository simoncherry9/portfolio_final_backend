import { Router } from 'express';
import { getExperiencias } from '../controllers/experiencia';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /experiencia
router.get('/',validateToken , getExperiencias)


export default router;