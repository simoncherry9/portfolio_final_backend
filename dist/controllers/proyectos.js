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
exports.deleteProyecto = exports.newProyecto = exports.getProyectos = void 0;
const proyectos_1 = require("../models/proyectos");
const getProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProyectos = yield proyectos_1.Proyectos.findAll();
    res.json(listProyectos);
});
exports.getProyectos = getProyectos;
const newProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, tecnologias, linkRepo } = req.body;
    try {
        // Guardamos el proyecto en la base de datos
        yield proyectos_1.Proyectos.create({
            name: name,
            description: description,
            tecnologias: tecnologias,
            linkRepo: linkRepo
        });
        res.json({
            msg: "Proyecto " + name + " cargado de manera exitosa",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva aptitud",
            error
        });
    }
});
exports.newProyecto = newProyecto;
const deleteProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Buscamos la aptitud por su ID
        const proyecto = yield proyectos_1.Proyectos.findByPk(id);
        if (!proyecto) {
            return res.status(404).json({
                msg: "No se encontró el proyecto con el ID proporcionado"
            });
        }
        // Eliminamos la aptitud
        yield proyecto.destroy();
        res.json({
            msg: "Proyecto eliminado correctamente"
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrió un error al intentar eliminar el proyectod",
            error
        });
    }
});
exports.deleteProyecto = deleteProyecto;
