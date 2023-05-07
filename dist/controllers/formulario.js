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
exports.newFormulario = void 0;
const formulario_1 = require("../models/formulario");
const newFormulario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email, descripcion } = req.body;
    try {
        // Guardamos el formulario en la base de datos
        yield formulario_1.Formulario.create({
            nombre: nombre,
            email: email,
            descripcion: descripcion
        });
        res.json({
            msg: "Formulario enviado de manera exitosa",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer cargar el formulario",
            error
        });
    }
});
exports.newFormulario = newFormulario;
