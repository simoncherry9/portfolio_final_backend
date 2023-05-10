import { Router } from 'express';
import { getExperiencias, newExperiencia, deleteExperiencia } from '../controllers/experiencia';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /experiencia
router.get('/',  getExperiencias)
router.post('/', validateToken, newExperiencia);
router.delete('/:id', validateToken, deleteExperiencia);


export default router;