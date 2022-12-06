import { validate, Joi } from "express-validation";

const validateUpdateUser = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string().required(),
    cpf: Joi.number().required(),
    email: Joi.string().email().required(),
    telefone: Joi.string().required(),
    sexo: Joi.string().required(),
    data_de_nascimento: Joi.date().required(),
  }),
});

export default validateUpdateUser;
