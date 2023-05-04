import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Persona = sequelize.define('persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    fechaNacimiento: {
        type: DataTypes.STRING
    },
    estadoCivil: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    profesion: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    }
})