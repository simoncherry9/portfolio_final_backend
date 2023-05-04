import { Router } from 'express';
import { getAptitudes, newAptitud } from '../controllers/editar';
import { getEducaciones, newEducacion } from '../controllers/editar';
import { getExperiencias, newExperiencia } from '../controllers/editar';
import { getPersonas, newPersona } from '../controllers/editar';
import { getProyectos, newProyecto } from '../controllers/editar';
import validateToken from './validate-token';

// Aptitudes
const router = Router();

// Protegiendo ruta /aptitudes
router.get('/' ,  getAptitudes)
router.post('/', validateToken, newAptitud);

// Educacion
router.get('/',  getEducaciones)
router.post('/', validateToken, newEducacion);

// Experiencia
router.get('/',  getExperiencias)
router.post('/', validateToken, newExperiencia);

// Persona
router.get('/', getPersonas)
router.post('/',validateToken, newPersona);

// Proyectos
router.get('/',  getProyectos)
router.post('/', validateToken, newProyecto);


export default router;