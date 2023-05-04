import { Router } from 'express';
import { getAptitudes, newAptitud } from '../controllers/aptitudes';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /aptitudes
router.get('/',validateToken , getAptitudes)
router.post('/', newAptitud);

export default router;