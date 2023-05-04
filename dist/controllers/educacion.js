"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEducacion = exports.getEducaciones = void 0;
const educacion_1 = require("../models/educacion");
const getEducaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listEducaciones = yield educacion_1.Educacion.findAll();
    res.json(listEducaciones);
});
exports.getEducaciones = getEducaciones;
const newEducacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { establecimiento, nivel, fechaFin } = req.body;
    try {
        // Guardamos el proyecto en la base de datos
        yield educacion_1.Educacion.create({
            establecimiento: establecimiento,
            nivel: nivel,
            fechaFin: fechaFin,
        });
        res.json({
            msg: "Educacion en " + establecimiento + " cargada de manera exitosa",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva aptitud",
            error
        });
    }
});
exports.newEducacion = newEducacion;
