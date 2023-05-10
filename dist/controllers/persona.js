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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPersona = exports.getPersonas = void 0;
const persona_1 = __importDefault(require("../models/persona"));
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersonas = yield persona_1.default.findAll();
    res.json(listPersonas);
});
exports.getPersonas = getPersonas;
const editPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, apellido, direccion, fechaNacimiento, estadoCivil, email, telefono, profesion, rol } = req.body;
    try {
        const persona = yield persona_1.default.findByPk(id);
        if (!persona) {
            return res.status(404).json({
                msg: "No se encontró la persona con el ID proporcionado",
            });
        }
        persona.nombre = nombre;
        persona.apellido = apellido;
        persona.direccion = direccion;
        persona.fechaNacimiento = fechaNacimiento;
        persona.estadoCivil = estadoCivil;
        persona.email = email;
        persona.telefono = telefono;
        persona.profesion = profesion;
        persona.rol = rol;
        yield persona.save();
        res.json({
            msg: "Persona actualizada correctamente",
            persona,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrió un error al intentar actualizar la persona",
            error,
        });
    }
});
exports.editPersona = editPersona;
