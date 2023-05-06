import { Request, Response } from 'express';
import { Persona } from '../models/persona';

export const getPersonas = async (req: Request, res: Response) => {
    const listPersonas = await Persona.findAll();
    
    res.json(listPersonas)

}

export const newPersona = async (req: Request, res: Response) => {

    const { nombre, apellido, direccion, fechaNacimiento, estadoCivil, email, telefono, profesion, rol } = req.body;

    try {
        // Guardamos el usuario en la base de datos
        await Persona.create({
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            fechaNacimiento: fechaNacimiento,
            estadoCivil: estadoCivil,
            email: email,
            telefono: telefono,
            profesion: profesion,
            rol: rol,
        })
        res.json({
            msg: "Persona " + nombre + " cargada de manera exitosa",
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva persona",
            error
        })
    }
}

export const  deletePersona = async (req: Request, res: Response) => {

    const { id } = req.body;
    if (!id) {
        return {msg: 'ID no escpecificada', payload: 1};
    }

    try {
        await Persona.destroy({
            where: {
                id: id
            }
        }); res.json({msg: "Persona eliminada"})
    } catch (e) {
        return false;
    }
}

