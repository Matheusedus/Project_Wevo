"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const default_1 = __importDefault(require("./default"));
exports.db = new sequelize_1.Sequelize(default_1.default.database, default_1.default.user, default_1.default.pass, {
    host: default_1.default.host,
    dialect: "mysql",
    logging: console.log,
});
