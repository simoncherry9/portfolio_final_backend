import { Request, Response } from 'express';
import pool from '../db/pool';
import { Educacion } from '../models/educacion';

export const getEducaciones = async (req: Request, res: Response) => {
  try {
    // Obtén una conexión del pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      // Realiza la consulta en la base de datos utilizando la conexión
      connection.query('SELECT * FROM educaciones', (error, results, fields) => {
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
    res.status(500).json({
      msg: 'Error en el servidor',
      error,
    });
  }
};

export const newEducacion = async (req: Request, res: Response) => {
  const { establecimiento, nivel, fechaFin } = req.body;

  try {
    // Obtén una conexión del pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      // Inserta la nueva educación en la base de datos utilizando la conexión
      const query = 'INSERT INTO educaciones (establecimiento, nivel, fechaFin) VALUES (?, ?, ?)';
      const values = [establecimiento, nivel, fechaFin];

      connection.query(query, values, (error, results, fields) => {
        // Maneja los resultados y el error, si corresponde
        if (error) {
          console.error('Error al ejecutar la consulta:', error);
          res.status(500).json({ error: 'Error en el servidor' });
        } else {
          res.json({
            msg: `Educación en ${establecimiento} cargada de manera exitosa`,
          });
        }

        // Libera la conexión para que pueda ser reutilizada por otros
        connection.release();
      });
    });
  } catch (error) {
    res.status(400).json({
      msg: 'Ocurrió un error al querer cargar la nueva educación',
      error,
    });
  }
};

export const deleteEducacion = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      // Obtén una conexión del pool
      pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error al obtener la conexión:', err);
          res.status(500).json({ error: 'Error en el servidor' });
          return;
        }
  
        // Busca la educación por su ID
        Educacion.findByPk(id)
          .then(async (educacion) => {
            if (!educacion) {
              return res.status(404).json({
                msg: 'No se encontró la educacion con el ID proporcionado',
              });
            }
  
            await educacion.destroy();
  
            res.json({
              msg: 'Educacion eliminada correctamente',
            });
  
            connection.release();
          })
          .catch((error) => {
            console.error('Error al buscar la educacion:', error);
            res.status(500).json({ error: 'Error en el servidor' });
  
            connection.release();
          });
      });
    } catch (error) {
      res.status(400).json({
        msg: 'Ocurrió un error al intentar eliminar la educacion',
        error,
      });
    }
  };