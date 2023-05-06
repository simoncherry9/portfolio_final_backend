import { Router } from 'express';
import { getPersonas, newPersona, deletePersona} from '../controllers/persona';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /personas
router.get('/', getPersonas)
router.post('/',validateToken, newPersona);
router.delete('/', validateToken, deletePersona);

export default router;