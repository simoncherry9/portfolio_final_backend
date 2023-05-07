import { Router } from 'express';
import { newFormulario } from '../controllers/formulario';

const router = Router();

// Protegiendo ruta /formulario
router.post('/', newFormulario);

export default router;