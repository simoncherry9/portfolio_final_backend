import { Request, Response } from 'express';
import { Educacion } from '../models/educacion';

export const getEducaciones = async (req: Request, res: Response) => {
    const listEducaciones = await Educacion.findAll();
    
    res.json(listEducaciones)

}

export const newEducacion = async (req: Request, res: Response) => {

    const { establecimiento, nivel, fechaFin } = req.body;

    try {
        // Guardamos el proyecto en la base de datos
        await Educacion.create({
            establecimiento: establecimiento,
            nivel: nivel,
            fechaFin: fechaFin,
        })
        res.json({
            msg: "Educacion en " + establecimiento + " cargada de manera exitosa",
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva educacion",
            error
        })
    }
}

export const deleteEducacion = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Buscamos la aptitud por su ID
        const educacion = await Educacion.findByPk(id);

        if (!educacion) {
            return res.status(404).json({
                msg: "No se encontró la educacion con el ID proporcionado"
            });
        }

        // Eliminamos la aptitud
        await educacion.destroy();

        res.json({
            msg: "Educacion eliminada correctamente"
        });
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrió un error al intentar eliminar la educacion",
            error
        });
    }
}