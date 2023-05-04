import { Request, Response } from 'express';
import { Aptitudes } from '../models/aptitudes';
import { Educacion } from '../models/educacion';
import { Experiencia } from '../models/experiencia';
import { Persona } from '../models/persona';
import { Proyectos } from '../models/proyectos';

// Aptitudes
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

// Educacion
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

// Experiencia
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

// Persona
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

// Proyectos
export const getProyectos = async (req: Request, res: Response) => {
    const listProyectos = await Proyectos.findAll();
    
    res.json(listProyectos)

}

export const newProyecto = async (req: Request, res: Response) => {

    const { name, description } = req.body;

    try {
        // Guardamos el proyecto en la base de datos
        await Proyectos.create({
            name: name,
            description: description
        })
        res.json({
            msg: "Proyecto " + name + " cargado de manera exitosa",
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar el nuevo proyecto",
            error
        })
    }
}