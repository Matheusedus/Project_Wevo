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
const messages_1 = __importDefault(require("../constants/messages"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const logger_1 = __importDefault(require("../database/logger"));
class UserController {
    static allUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserRepository_1.default.getAllUsers();
                if (users.length <= 0) {
                    logger_1.default.info("X não existem usuários até o momento");
                    return res.status(200).json({
                        success: false,
                        msg: "X não existem usuários até o momento",
                    });
                }
                else {
                    logger_1.default.info("Achamos os usuarios");
                    return res.status(200).json({
                        success: true,
                        msg: "Achamos os usuarios",
                        data: users,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(`Pane no sistema: ${error.message}`);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const userId = parseInt(req.params.id);
                const user = yield UserRepository_1.default.getOneUser(userId);
                if (!user) {
                    logger_1.default.error("Nenhum usuário encontrado");
                    return res.status(500).json({
                        success: false,
                        msg: "Nenhum usuário encontrado",
                    });
                }
                else {
                    logger_1.default.info("Dados do usuário");
                    return res.json({ success: true, data: user });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, cpf, email, telefone, sexo, data_de_nascimento } = req.body;
            const userObj = {
                nome: nome,
                cpf: cpf,
                email: email,
                telefone: telefone,
                sexo: sexo,
                data_de_nascimento: data_de_nascimento,
            };
            try {
                const user = yield UserRepository_1.default.createUser(userObj);
                logger_1.default.info("Usuário criado");
                return res.status(201).json({
                    success: true,
                    msg: "Usuário criado",
                    data: user,
                });
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, cpf, email, telefone, sexo, data_de_nascimento } = req.body;
            const userObj = {
                nome: nome,
                cpf: cpf,
                email: email,
                telefone: telefone,
                sexo: sexo,
                data_de_nascimento: data_de_nascimento,
            };
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const userId = parseInt(req.params.id);
                const user = yield UserRepository_1.default.getOneUser(userId);
                if (!user) {
                    logger_1.default.error("Usuário não existe");
                    return res.status(500).json({
                        success: false,
                        msg: "Usuário não existe",
                    });
                }
                else {
                    const updatedUser = yield UserRepository_1.default.updateUser(userId, userObj);
                    logger_1.default.info("Usúario atualizado");
                    return res.status(200).json({
                        success: true,
                        msg: "Usúario atualizado",
                        data: userObj,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const userId = parseInt(req.params.id);
                const user = yield UserRepository_1.default.getOneUser(userId);
                if (!user) {
                    logger_1.default.error("Usuário não existe");
                    return res.status(500).json({
                        success: false,
                        msg: "Usuário não existe",
                    });
                }
                else {
                    yield UserRepository_1.default.deleteUser(userId);
                    logger_1.default.info("Usúario deletado");
                    return res.status(200).json({
                        success: true,
                        msg: "Usúario deletado",
                    });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
}
exports.default = UserController;
