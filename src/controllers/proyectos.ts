import { Request, Response } from 'express';
import { Proyectos } from '../models/proyectos';

export const getProyectos = async (req: Request, res: Response) => {
    const listProyectos = await Proyectos.findAll();
    
    res.json(listProyectos)

}