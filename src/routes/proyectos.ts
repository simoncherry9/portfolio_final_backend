import { Router } from 'express';
import { getProyectos, newProyecto, deleteProyectos } from '../controllers/proyectos';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /proyectos
router.get('/',  getProyectos)
router.post('/', validateToken, newProyecto);
router.delete('/', validateToken, deleteProyectos);

export default router;