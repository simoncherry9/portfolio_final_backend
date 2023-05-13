import { Request, Response } from 'express';
import pool from '../db/pool';
import { Formulario } from '../models/formulario';

export const newFormulario = async (req: Request, res: Response) => {
  const { nombre, email, descripcion } = req.body;

  try {
    // Obtén una conexión del pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      // Realiza la inserción en la base de datos utilizando la conexión
      connection.query(
        'INSERT INTO formularios (nombre, email, descripcion) VALUES (?, ?, ?)',
        [nombre, email, descripcion],
        (error) => {
          // Maneja el error, si corresponde
          if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error en el servidor' });
          } else {
            res.json({
              msg: "Formulario enviado de manera exitosa",
            });
          }

          // Libera la conexión para que pueda ser reutilizada por otros
          connection.release();
        }
      );
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrió un error al querer cargar el formulario",
      error
    });
  }
}