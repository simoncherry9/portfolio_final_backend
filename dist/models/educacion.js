"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Educacion = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Educacion = connection_1.default.define('educacion', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    establecimiento: {
        type: sequelize_1.DataTypes.STRING
    },
    nivel: {
        type: sequelize_1.DataTypes.STRING
    },
    fechaFin: {
        type: sequelize_1.DataTypes.DATE
    }
});
