import { Request, Response } from 'express';
import { Experiencia } from '../models/experiencia';

export const getExperiencias = async (req: Request, res: Response) => {
    const listExperiencias = await Experiencia.findAll();
    
    res.json(listExperiencias)

}