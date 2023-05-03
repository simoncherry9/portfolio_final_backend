"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aptitudes_1 = require("../controllers/aptitudes");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
// Protegiendo ruta /personas
router.get('/', validate_token_1.default, aptitudes_1.getAptitudes);
exports.default = router;
