import { Request, Response } from 'express';
import pool from '../db/pool';
import { Experiencia } from '../models/experiencia';

export const getExperiencias = async (req: Request, res: Response) => {
  try {
    // Obtén una conexión del pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      // Realiza la consulta en la base de datos utilizando la conexión
      connection.query('SELECT * FROM experiencias', (error, results) => {
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
      msg: "Ocurrió un error al obtener las experiencias",
      error
    });
  }
}

export const newExperiencia = async (req: Request, res: Response) => {
  const { empresa, puesto, descripcion, fechaFin } = req.body;

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
        'INSERT INTO experiencias (empresa, puesto, descripcion, fechaFin) VALUES (?, ?, ?, ?)',
        [empresa, puesto, descripcion, fechaFin],
        (error) => {
          // Maneja el error, si corresponde
          if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error en el servidor' });
          } else {
            res.json({
              msg: "Puesto en la empresa " + empresa + " cargado de manera exitosa",
            });
          }

          // Libera la conexión para que pueda ser reutilizada por otros
          connection.release();
        }
      );
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrió un error al querer cargar la nueva experiencia",
      error
    });
  }
}

export const deleteExperiencia = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error al obtener la conexión:', err);
          res.status(500).json({ error: 'Error en el servidor' });
          return;
        }
  
        Experiencia.findByPk(id)
          .then(async (experiencia) => {
            if (!experiencia) {
              return res.status(404).json({
                msg: 'No se encontró la aptitud con el ID proporcionado',
              });
            }
  
            await experiencia.destroy();
  
            res.json({
              msg: 'Experiencia eliminada correctamente',
            });
  
            connection.release();
          })
          .catch((error) => {
            console.error('Error al buscar la experiencia:', error);
            res.status(500).json({ error: 'Error en el servidor' });
  
            connection.release();
          });
      });
    } catch (error) {
      res.status(400).json({
        msg: 'Ocurrió un error al intentar eliminar la experiencia',
        error,
      });
    }
  };