import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Aptitudes = sequelize.define('aptitudes', {
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
    color: {
        type: DataTypes.STRING
    },
    porcentaje: {
        type: DataTypes.DECIMAL
    }
})