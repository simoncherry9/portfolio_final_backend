import { Request, Response } from 'express';
import { Experiencia } from '../models/experiencia';

export const getExperiencias = async (req: Request, res: Response) => {
    const listExperiencias = await Experiencia.findAll();
    
    res.json(listExperiencias)

}

export const newExperiencia = async (req: Request, res: Response) => {

    const { empresa, puesto, descripcion, fechaFin } = req.body;

    try {
        // Guardamos el usuario en la base de datos
        await Experiencia.create({
            empresa: empresa,
            puesto: puesto,
            descripcion: descripcion,
            fechaFin: fechaFin,
        })
        res.json({
            msg: "Puesto en la empresa " + empresa + " cargado de manera exitosa",
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva persona",
            error
        })
    }
}

export const deleteExperiencia = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Buscamos la aptitud por su ID
        const experiencia = await Experiencia.findByPk(id);

        if (!experiencia) {
            return res.status(404).json({
                msg: "No se encontró la educacion con el ID proporcionado"
            });
        }

        // Eliminamos la aptitud
        await experiencia.destroy();

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