import { Router } from 'express';
import { getPersonas } from '../controllers/persona';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /personas
router.get('/',validateToken , getPersonas)

export default router;