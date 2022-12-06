"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserRepository {
    getAllUsers() {
        return User_1.default.findAll();
    }
    getOneUser(userId) {
        return User_1.default.findOne({
            where: {
                id: userId,
            },
        });
    }
    createUser(dados) {
        return User_1.default.create({
            nome: dados.nome,
            cpf: dados.cpf,
            email: dados.email,
            telefone: dados.telefone,
            sexo: dados.sexo,
            data_de_nascimento: dados.data_de_nascimento,
        });
    }
    updateUser(userId, dados) {
        return User_1.default.update({
            nome: dados.nome,
            cpf: dados.cpf,
            email: dados.email,
            telefone: dados.telefone,
            sexo: dados.sexo,
            data_de_nascimento: dados.data_de_nascimento,
        }, {
            where: {
                id: userId,
            },
        });
    }
    deleteUser(userId) {
        return User_1.default.destroy({
            where: {
                id: userId,
            },
        });
    }
}
exports.default = new UserRepository();
