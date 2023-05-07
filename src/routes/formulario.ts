import { Router } from 'express';
import { newFormulario } from '../controllers/formulario';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /formulario
router.post('/', newFormulario);

export default router;