"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Persona extends sequelize_1.Model {
}
Persona.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
    },
    fechaNacimiento: {
        type: sequelize_1.DataTypes.STRING,
    },
    estadoCivil: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
    },
    profesion: {
        type: sequelize_1.DataTypes.STRING,
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'Persona',
});
exports.default = Persona;
