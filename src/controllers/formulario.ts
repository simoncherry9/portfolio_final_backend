import { Request, Response } from 'express';
import { Formulario } from '../models/formulario';

export const newFormulario = async (req: Request, res: Response) => {

    const { nombre, email, descripcion } = req.body;

    try {
        // Guardamos el formulario en la base de datos
        await Formulario.create({
            nombre: nombre,
            email: email,
            descripcion: descripcion
        })
        res.json({
            msg: "Formulario enviado de manera exitosa",
            
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar el formulario",
            error
        })
    }
}