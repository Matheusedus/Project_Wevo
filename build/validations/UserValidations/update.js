"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const validateUpdateUser = (0, express_validation_1.validate)({
    params: express_validation_1.Joi.object({
        id: express_validation_1.Joi.number().required(),
    }),
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().required(),
        cpf: express_validation_1.Joi.number().required(),
        email: express_validation_1.Joi.string().email().required(),
        telefone: express_validation_1.Joi.string().required(),
        sexo: express_validation_1.Joi.string().required(),
        data_de_nascimento: express_validation_1.Joi.date().required(),
    }),
});
exports.default = validateUpdateUser;
