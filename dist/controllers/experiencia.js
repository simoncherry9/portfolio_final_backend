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
exports.deleteExperiencia = exports.newExperiencia = exports.getExperiencias = void 0;
const experiencia_1 = require("../models/experiencia");
const getExperiencias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listExperiencias = yield experiencia_1.Experiencia.findAll();
    res.json(listExperiencias);
});
exports.getExperiencias = getExperiencias;
const newExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empresa, puesto, descripcion, fechaFin } = req.body;
    try {
        // Guardamos el usuario en la base de datos
        yield experiencia_1.Experiencia.create({
            empresa: empresa,
            puesto: puesto,
            descripcion: descripcion,
            fechaFin: fechaFin,
        });
        res.json({
            msg: "Puesto en la empresa " + empresa + " cargado de manera exitosa",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva persona",
            error
        });
    }
});
exports.newExperiencia = newExperiencia;
const deleteExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        return { msg: 'ID no escpecificada', payload: 1 };
    }
    try {
        yield experiencia_1.Experiencia.destroy({
            where: {
                id: id
            }
        });
        res.json({ msg: "Experiencia eliminada" });
    }
    catch (e) {
        return false;
    }
});
exports.deleteExperiencia = deleteExperiencia;
