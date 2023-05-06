"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const educacion_1 = require("../controllers/educacion");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
// Protegiendo ruta /educacion
router.get('/', educacion_1.getEducaciones);
router.post('/', validate_token_1.default, educacion_1.newEducacion);
router.delete('/', validate_token_1.default, educacion_1.deleteEducacion);
exports.default = router;
