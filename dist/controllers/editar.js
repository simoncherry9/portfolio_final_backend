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
exports.newProyecto = exports.getProyectos = exports.newPersona = exports.getPersonas = exports.newExperiencia = exports.getExperiencias = exports.newEducacion = exports.getEducaciones = exports.newAptitud = exports.getAptitudes = void 0;
const aptitudes_1 = require("../models/aptitudes");
const educacion_1 = require("../models/educacion");
const experiencia_1 = require("../models/experiencia");
const persona_1 = require("../models/persona");
const proyectos_1 = require("../models/proyectos");
// Aptitudes
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
// Educacion
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
            msg: "Ocurrio un error al querer cargar la nueva educacion",
            error
        });
    }
});
exports.newEducacion = newEducacion;
// Experiencia
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
// Persona
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersonas = yield persona_1.Persona.findAll();
    res.json(listPersonas);
});
exports.getPersonas = getPersonas;
const newPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, direccion, fechaNacimiento, estadoCivil, email, telefono, profesion, rol } = req.body;
    try {
        // Guardamos el usuario en la base de datos
        yield persona_1.Persona.create({
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            fechaNacimiento: fechaNacimiento,
            estadoCivil: estadoCivil,
            email: email,
            telefono: telefono,
            profesion: profesion,
            rol: rol,
        });
        res.json({
            msg: "Persona " + nombre + " cargada de manera exitosa",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar la nueva persona",
            error
        });
    }
});
exports.newPersona = newPersona;
// Proyectos
const getProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProyectos = yield proyectos_1.Proyectos.findAll();
    res.json(listProyectos);
});
exports.getProyectos = getProyectos;
const newProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        // Guardamos el proyecto en la base de datos
        yield proyectos_1.Proyectos.create({
            name: name,
            description: description
        });
        res.json({
            msg: "Proyecto " + name + " cargado de manera exitosa",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar el nuevo proyecto",
            error
        });
    }
});
exports.newProyecto = newProyecto;
