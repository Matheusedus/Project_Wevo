import { db } from "../database/database";
import { Model, DataTypes, Sequelize } from "sequelize";

export default class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    telefone: {
      type: DataTypes.INTEGER,
    },
    sexo: {
      type: DataTypes.STRING,
    },
    data_de_nascimento: {
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "users",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: db,
  }
);
