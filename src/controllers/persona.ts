import { Request, Response } from 'express';
import  Persona  from '../models/persona';

export const getPersonas = async (req: Request, res: Response) => {
    const listPersonas = await Persona.findAll();
    
    res.json(listPersonas)

}

export const editPersona = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, apellido, direccion, fechaNacimiento, estadoCivil, email, telefono, profesion, rol } = req.body;
  
    try {
      const persona = await Persona.findByPk(id);
  
      if (!persona) {
        return res.status(404).json({
          msg: "No se encontró la persona con el ID proporcionado",
        });
      }
  
      persona.nombre = nombre;
      persona.apellido = apellido;
      persona.direccion = direccion;
      persona.fechaNacimiento = fechaNacimiento;
      persona.estadoCivil = estadoCivil;
      persona.email = email;
      persona.telefono = telefono;
      persona.profesion = profesion;
      persona.rol = rol;
  
      await persona.save();
  
      res.json({
        msg: "Persona actualizada correctamente",
        persona,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Ocurrió un error al intentar actualizar la persona",
        error,
      });
    }
  };