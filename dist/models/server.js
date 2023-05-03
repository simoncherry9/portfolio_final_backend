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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_1 = __importDefault(require("../routes/product"));
const aptitudes_1 = __importDefault(require("../routes/aptitudes"));
const user_1 = __importDefault(require("../routes/user"));
const experiencia_1 = __importDefault(require("../routes/experiencia"));
const persona_1 = __importDefault(require("../routes/persona"));
const educacion_1 = __importDefault(require("../routes/educacion"));
const proyectos_1 = __importDefault(require("../routes/proyectos"));
const proyectos_2 = require("./proyectos");
const product_2 = require("./product");
const educacion_2 = require("./educacion");
const user_2 = require("./user");
const persona_2 = require("./persona");
const aptitudes_2 = require("./aptitudes");
const experiencia_2 = require("./experiencia");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicacion corriendo en el puerto " + this.port);
        });
    }
    routes() {
        this.app.use('/api/products', product_1.default);
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/persona', persona_1.default);
        this.app.use('/api/aptitudes', aptitudes_1.default);
        this.app.use('/api/experiencia', experiencia_1.default);
        this.app.use('/api/educacion', educacion_1.default);
        this.app.use('/api/proyectos', proyectos_1.default);
    }
    midlewares() {
        // Parseo body
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield proyectos_2.Proyectos.sync();
                yield educacion_2.Educacion.sync();
                yield experiencia_2.Experiencia.sync();
                yield aptitudes_2.Aptitudes.sync();
                yield persona_2.Persona.sync();
                yield product_2.Product.sync();
                yield user_2.User.sync();
            }
            catch (error) {
                console.log("La conección con la base de datos a fracasado.", error);
            }
        });
    }
}
exports.default = Server;
