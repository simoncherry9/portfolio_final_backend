import { Router } from 'express';
import { getProyectos, newProyecto, deleteProyecto } from '../controllers/proyectos';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /proyectos
router.get('/',  getProyectos)
router.post('/', validateToken, newProyecto);
router.post('/', validateToken, deleteProyecto);

export default router;