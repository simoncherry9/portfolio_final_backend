import { Request, Response } from 'express';
import pool from '../db/pool';
import Persona from '../models/persona';

export const getPersonas = async (req: Request, res: Response) => {
  try {
    // Obtén una conexión del pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      // Realiza la consulta en la base de datos utilizando la conexión
      connection.query('SELECT * FROM personas', (error, results) => {
        // Maneja los resultados y el error, si corresponde
        if (error) {
          console.error('Error al ejecutar la consulta:', error);
          res.status(500).json({ error: 'Error en el servidor' });
        } else {
          res.json(results);
        }

        // Libera la conexión para que pueda ser reutilizada por otros
        connection.release();
      });
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrió un error al obtener las personas",
      error
    });
  }
};

export const editPersona = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, fechaNacimiento, estadoCivil, email, telefono, profesion, rol } = req.body;

  try {
    // Obtén una conexión del pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      // Realiza la consulta en la base de datos utilizando la conexión
      connection.query(
        'UPDATE personas SET nombre = ?, apellido = ?, direccion = ?, fechaNacimiento = ?, estadoCivil = ?, email = ?, telefono = ?, profesion = ?, rol = ? WHERE id = ?',
        [nombre, apellido, direccion, fechaNacimiento, estadoCivil, email, telefono, profesion, rol, id],
        (error, results) => {
          // Maneja los resultados y el error, si corresponde
          if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error en el servidor' });
          } else {
            res.json({
              msg: "Persona actualizada correctamente",
              persona: results
            });
          }

          // Libera la conexión para que pueda ser reutilizada por otros
          connection.release();
        }
      );
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrió un error al intentar actualizar la persona",
      error,
    });
  }
};
