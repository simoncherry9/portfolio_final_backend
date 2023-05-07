"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formulario_1 = require("../controllers/formulario");
const router = (0, express_1.Router)();
// Protegiendo ruta /formulario
router.post('/', formulario_1.newFormulario);
exports.default = router;
