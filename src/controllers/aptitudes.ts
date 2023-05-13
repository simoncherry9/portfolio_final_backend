import { Request, Response } from 'express';
import pool from '../db/pool';
import { Aptitudes } from '../models/aptitudes';

export const getAptitudes = async (req: Request, res: Response) => {
  try {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      connection.query('SELECT * FROM aptitudes', (error, results, fields) => {
        // Maneja los resultados y el error, si corresponde
        if (error) {
          console.error('Error al ejecutar la consulta:', error);
          res.status(500).json({ error: 'Error en el servidor' });
        } else {
          res.json(results);
        }

        connection.release();
      });
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener las aptitudes',
      error
    });
  }
};

export const newAptitud = async (req: Request, res: Response) => {
  const { name, description, porcentaje } = req.body;

  try {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      connection.query(
        'INSERT INTO aptitudes (name, description, porcentaje) VALUES (?, ?, ?)',
        [name, description, porcentaje],
        (error, results, fields) => {
          if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error en el servidor' });
          } else {
            res.json({
              msg: `Aptitud ${name} cargada de manera exitosa`,
            });
          }

          connection.release();
        }
      );
    });
  } catch (error) {
    res.status(400).json({
      msg: 'Ocurrió un error al querer cargar la nueva aptitud',
      error
    });
  }
};

export const deleteAptitud = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error al obtener la conexión:', err);
          res.status(500).json({ error: 'Error en el servidor' });
          return;
        }
  
        Aptitudes.findByPk(id)
          .then(async (aptitud) => {
            if (!aptitud) {
              return res.status(404).json({
                msg: 'No se encontró la aptitud con el ID proporcionado',
              });
            }
  
            await aptitud.destroy();
  
            res.json({
              msg: 'Aptitud eliminada correctamente',
            });
  
            connection.release();
          })
          .catch((error) => {
            console.error('Error al buscar la aptitud:', error);
            res.status(500).json({ error: 'Error en el servidor' });
  
            connection.release();
          });
      });
    } catch (error) {
      res.status(400).json({
        msg: 'Ocurrió un error al intentar eliminar la aptitud',
        error,
      });
    }
  };