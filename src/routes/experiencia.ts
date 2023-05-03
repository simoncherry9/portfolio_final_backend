import { Router } from 'express';
import { getExperiencias } from '../controllers/experiencia';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /personas
router.get('/',validateToken , getExperiencias)

export default router;