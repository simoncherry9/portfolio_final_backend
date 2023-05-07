"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formulario = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Formulario = connection_1.default.define('Formulario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    }
});
