import { Request, Response } from 'express';
import { Proyectos } from '../models/proyectos';

export const getProyectos = async (req: Request, res: Response) => {
    const listProyectos = await Proyectos.findAll();
    
    res.json(listProyectos)

}

export const newProyecto = async (req: Request, res: Response) => {

    const { name, description, tecnologias, linkRepo} = req.body;

    try {
        // Guardamos el proyecto en la base de datos
        await Proyectos.create({
            name: name,
            description: description,
            tecnologias: tecnologias,
            linkRepo: linkRepo
        })
        res.json({
            msg: "Proyecto " + name + " cargado de manera exitosa",
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva aptitud",
            error
        })
    }
}

export const  deleteProyecto = async (req: Request, res: Response) => {

    const { id } = req.body;
    if (!id) {
        return {msg: 'ID no escpecificada', payload: 1};
    }

    try {
        await Proyectos.destroy({
            where: {
                id: id
            }
        }); res.json({msg: "Aptitud eliminada"})
    } catch (e) {
        return false;
    }
}