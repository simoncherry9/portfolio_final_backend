import { Router } from 'express';
import { getPersonas, editPersona } from '../controllers/persona';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /personas
router.get('/', getPersonas)
router.put('/:id', validateToken, editPersona);

export default router;