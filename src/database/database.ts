import { Sequelize } from "sequelize";
import authDB from "./default";

export const db: Sequelize = new Sequelize(
  authDB.database,
  authDB.user,
  authDB.pass,
  {
    host: authDB.host,
    dialect: "mysql",
    logging: console.log,
  }
);
