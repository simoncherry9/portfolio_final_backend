import { Request, Response } from 'express';
import { Aptitudes } from '../models/aptitudes';

export const getAptitudes = async (req: Request, res: Response) => {
    const listAptitudes = await Aptitudes.findAll();
    
    res.json(listAptitudes)

}

export const newAptitud = async (req: Request, res: Response) => {

    const { name, description, porcentaje } = req.body;

    try {
        // Guardamos el usuario en la base de datos
        await Aptitudes.create({
            name: name,
            description: description,
            porcentaje: porcentaje
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

export const deleteAptitud = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Buscamos la aptitud por su ID
        const aptitud = await Aptitudes.findByPk(id);

        if (!aptitud) {
            return res.status(404).json({
                msg: "No se encontró la aptitud con el ID proporcionado"
            });
        }

        // Eliminamos la aptitud
        await aptitud.destroy();

        res.json({
            msg: "Aptitud eliminada correctamente"
        });
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrió un error al intentar eliminar la aptitud",
            error
        });
    }
}