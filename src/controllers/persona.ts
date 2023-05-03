import { Request, Response } from 'express';
import { Persona } from '../models/persona';

export const getPersonas = async (req: Request, res: Response) => {
    const listPersonas = await Persona.findAll();
    
    res.json(listPersonas)

}