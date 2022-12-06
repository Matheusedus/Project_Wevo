"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authDB = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
};
exports.default = authDB;
