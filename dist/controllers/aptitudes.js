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
exports.deleteAptitud = exports.newAptitud = exports.getAptitudes = void 0;
const aptitudes_1 = require("../models/aptitudes");
const getAptitudes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAptitudes = yield aptitudes_1.Aptitudes.findAll();
    res.json(listAptitudes);
});
exports.getAptitudes = getAptitudes;
const newAptitud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        // Guardamos el usuario en la base de datos
        yield aptitudes_1.Aptitudes.create({
            name: name,
            description: description
        });
        res.json({
            msg: "Aptitud " + name + " cargada de manera exitosa",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva aptitud",
            error
        });
    }
});
exports.newAptitud = newAptitud;
// Eliminar aptitud
const deleteAptitud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        return { msg: 'ID no escpecificada', payload: 1 };
    }
    try {
        yield aptitudes_1.Aptitudes.destroy({
            where: {
                id: id
            }
        });
        res.json({ msg: "Aptitud eliminada" });
    }
    catch (e) {
        return false;
    }
});
exports.deleteAptitud = deleteAptitud;
