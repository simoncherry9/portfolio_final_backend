import { Router } from 'express';
import { getExperiencias, newExperiencia } from '../controllers/experiencia';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /experiencia
router.get('/', validateToken, getExperiencias)
router.post('/', newExperiencia);


export default router;