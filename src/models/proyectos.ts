import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Proyectos = sequelize.define('proyectos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }, 
    tecnologias: {
        type: DataTypes.STRING,
    },
    linkRepo: {
        type: DataTypes.STRING,
    },
})