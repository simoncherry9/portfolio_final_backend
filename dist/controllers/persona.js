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
exports.newPersona = exports.getPersonas = void 0;
const persona_1 = require("../models/persona");
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
