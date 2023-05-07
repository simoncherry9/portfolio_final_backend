import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Formulario = sequelize.define('Formulario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})