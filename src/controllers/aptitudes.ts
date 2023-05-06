import { Request, Response, application } from 'express';
import { Aptitudes } from '../models/aptitudes';

export const getAptitudes = async (req: Request, res: Response) => {
    const listAptitudes = await Aptitudes.findAll();
    
    res.json(listAptitudes)

}

export const newAptitud = async (req: Request, res: Response) => {

    const { name, description } = req.body;

    try {
        // Guardamos el usuario en la base de datos
        await Aptitudes.create({
            name: name,
            description: description
        })
        res.json({
            msg: "Aptitud " + name + " cargada de manera exitosa",
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva aptitud",
            error
        })
    }
}

// Eliminar aptitud
export const  deleteAptitud = async (req: Request, res: Response) => {

    const { id } = req.body;
    if (!id) {
        return {msg: 'ID no escpecificada', payload: 1};
    }

    try {
        await Aptitudes.destroy({
            where: {
                id: id
            }
        }); res.json({msg: "Aptitud eliminada"})
    } catch (e) {
        return false;
    }
}