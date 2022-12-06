require("dotenv").config();

import handleError from "./middlewares/handleError";
import express from "express";
import cors from "cors";
import router from "./routes";
import { db } from "./database/database";
import Logger from "./database/logger";

async function main() {
  const app = express();
  const port = 3000;

  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use(handleError);

  app.listen(port, async () => {
    Logger.info(`🚀 Projeto rodando no endereço: http://127.0.0.1:${port}`);

    db.authenticate()
      .then(() => {
        Logger.info(`😄 Conectado com sucesso ao banco de dados!`);
      })
      .catch((err) => {
        Logger.error(`😕 Falha ao conectar ao banco de dados.`);
      });
  });
}

main().catch((error) => {
  Logger.error("🥵 Erro!");
  Logger.error(error);
});
