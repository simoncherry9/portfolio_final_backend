"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editar_1 = require("../controllers/editar");
const editar_2 = require("../controllers/editar");
const editar_3 = require("../controllers/editar");
const editar_4 = require("../controllers/editar");
const editar_5 = require("../controllers/editar");
const validate_token_1 = __importDefault(require("./validate-token"));
// Aptitudes
const router = (0, express_1.Router)();
// Protegiendo ruta /aptitudes
router.get('/', editar_1.getAptitudes);
router.post('/', validate_token_1.default, editar_1.newAptitud);
// Educacion
router.get('/', editar_2.getEducaciones);
router.post('/', validate_token_1.default, editar_2.newEducacion);
// Experiencia
router.get('/', editar_3.getExperiencias);
router.post('/', validate_token_1.default, editar_3.newExperiencia);
// Persona
router.get('/', editar_4.getPersonas);
router.post('/', validate_token_1.default, editar_4.newPersona);
// Proyectos
router.get('/', editar_5.getProyectos);
router.post('/', validate_token_1.default, editar_5.newProyecto);
exports.default = router;
