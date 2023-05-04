import { Router } from 'express';
import { getProducts } from '../controllers/product';
import validateToken from './validate-token';

const router = Router();

// Protegiendo ruta /products
router.get('/', getProducts)

export default router;