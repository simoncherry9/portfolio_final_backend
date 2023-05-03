import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Educacion = sequelize.define('educacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    establecimiento: {
        type: DataTypes.STRING
    },
    nivel: {
        type: DataTypes.STRING
    }, 
    fechaFin: {
        type: DataTypes.DATE
    }
})