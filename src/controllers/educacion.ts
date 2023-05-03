import { Request, Response } from 'express';
import { Educacion } from '../models/educacion';

export const getEducaciones = async (req: Request, res: Response) => {
    const listEducaciones = await Educacion.findAll();
    
    res.json(listEducaciones)

}