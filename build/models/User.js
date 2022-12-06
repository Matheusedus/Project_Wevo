"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    cpf: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefone: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING,
    },
    data_de_nascimento: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    modelName: "users",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: database_1.db,
});
