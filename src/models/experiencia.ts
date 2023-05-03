import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Experiencia = sequelize.define('experiencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empresa: {
        type: DataTypes.STRING
    },
    puesto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    fechaFin: {
        type: DataTypes.DATE,
    }
})