import { Router } from 'express';
import { getPersonas, newPersona } from '../controllers/persona';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /personas
router.get('/',validateToken , getPersonas)
router.post('/', newPersona);

export default router;