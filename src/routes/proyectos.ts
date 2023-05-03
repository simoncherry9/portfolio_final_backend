import { Router } from 'express';
import { getProyectos } from '../controllers/proyectos';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /proyectos
router.get('/',validateToken , getProyectos)

export default router;