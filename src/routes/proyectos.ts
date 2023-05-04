import { Router } from 'express';
import { getProyectos, newProyecto } from '../controllers/proyectos';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /proyectos
router.get('/',  getProyectos)
router.post('/', validateToken, newProyecto);

export default router;