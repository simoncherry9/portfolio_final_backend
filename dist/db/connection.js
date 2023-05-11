"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('bzoom9apvbweajckbkcq', 'uyk9kfui9r9o339k', 'iS3XEtroHIgIJGeXFux6', {
    host: 'bzoom9apvbweajckbkcq-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306
});
exports.default = sequelize;
