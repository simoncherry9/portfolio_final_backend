import { Router } from 'express';
import { getAptitudes } from '../controllers/aptitudes';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /aptitudes
router.get('/',validateToken , getAptitudes)

export default router;