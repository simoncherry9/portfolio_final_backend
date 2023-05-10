import { Router } from 'express';
import { getAptitudes, newAptitud, deleteAptitud } from '../controllers/aptitudes';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /aptitudes
router.get('/' ,  getAptitudes)
router.post('/', validateToken, newAptitud)
router.delete('/:id', validateToken, deleteAptitud)

export default router;