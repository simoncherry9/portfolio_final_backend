"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectos_1 = require("../controllers/proyectos");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
// Protegiendo ruta /proyectos
router.get('/', proyectos_1.getProyectos);
router.post('/', validate_token_1.default, proyectos_1.newProyecto);
exports.default = router;
