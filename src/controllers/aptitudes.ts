import { Request, Response } from 'express';
import { Aptitudes } from '../models/aptitudes';

export const getAptitudes = async (req: Request, res: Response) => {
    const listAptitudes = await Aptitudes.findAll();
    
    res.json(listAptitudes)

}