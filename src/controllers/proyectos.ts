import { Request, Response } from 'express';
import pool from '../db/pool';
import { Proyectos } from '../models/proyectos';

export const getProyectos = async (req: Request, res: Response) => {
  try {
    // Obtén una conexión del pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        res.status(500).json({ error: 'Error en el servidor' });
        return;
      }

      // Realiza la consulta en la base de datos utilizando la conexión
      connection.query('SELECT * FROM proyectos', (error, results) => {
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
      msg: "Ocurrió un error al obtener los proyectos",
      error
    });
  }
};

export const newProyecto = async (req: Request, res: Response) => {
  const { name, description, tecnologias, linkRepo } = req.body;

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
        'INSERT INTO proyectos (name, description, tecnologias, linkRepo) VALUES (?, ?, ?, ?)',
        [name, description, tecnologias, linkRepo],
        (error, results) => {
          // Maneja los resultados y el error, si corresponde
          if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error en el servidor' });
          } else {
            res.json({
              msg: "Proyecto " + name + " cargado de manera exitosa",
              proyecto: results
            });
          }

          // Libera la conexión para que pueda ser reutilizada por otros
          connection.release();
        }
      );
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrió un error al querer cargar el nuevo proyecto",
      error
    });
  }
};

export const deleteProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error al obtener la conexión:', err);
          res.status(500).json({ error: 'Error en el servidor' });
          return;
        }
  
        Proyectos.findByPk(id)
          .then(async (proyecto) => {
            if (!proyecto) {
              return res.status(404).json({
                msg: 'No se encontró el proyecto con el ID proporcionado',
              });
            }
  
            await proyecto.destroy();
  
            res.json({
              msg: 'Proyecto eliminado correctamente',
            });
  
            connection.release();
          })
          .catch((error) => {
            console.error('Error al buscar el proyecto:', error);
            res.status(500).json({ error: 'Error en el servidor' });
  
            connection.release();
          });
      });
    } catch (error) {
      res.status(400).json({
        msg: 'Ocurrió un error al intentar eliminar el proyecto',
        error,
      });
    }
  };