import { Router } from 'express';
import { deleteAptitud, getAptitudes, newAptitud } from '../controllers/aptitudes';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /aptitudes
router.get('/' ,  getAptitudes)
router.post('/', validateToken, newAptitud);
router.delete('/', validateToken, deleteAptitud);

export default router;