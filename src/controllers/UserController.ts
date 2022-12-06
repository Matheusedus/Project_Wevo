import { Request, Response } from "express";
import MESSAGE from "../constants/messages";
import { UserInterface } from "../interfaces/UserInterface";
import UserRepository from "../repositories/UserRepository";
import Logger from "../database/logger";
import User from "../models/User";

class UserController {
  static async allUsers(req: Request, res: Response) {
    try {
      const users: Array<UserInterface> = await UserRepository.getAllUsers();

      if (users.length <= 0) {
        Logger.info("X não existem usuários até o momento");
        return res.status(200).json({
          success: false,
          msg: "X não existem usuários até o momento",
        });
      } else {
        Logger.info("Achamos os usuarios");
        return res.status(200).json({
          success: true,
          msg: "Achamos os usuarios",
          data: users,
        });
      }
    } catch (error: any) {
      Logger.error(`Pane no sistema: ${error.message}`);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async getOneUser(req: Request, res: Response) {
    try {
      if (!req.params.id || isNaN(parseInt(req.params.id))) {
        Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
        return res
          .status(500)
          .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
      }

      const userId: number = parseInt(req.params.id);
      const user = await UserRepository.getOneUser(userId);

      if (!user) {
        Logger.error("Nenhum usuário encontrado");
        return res.status(500).json({
          success: false,
          msg: "Nenhum usuário encontrado",
        });
      } else {
        Logger.info("Dados do usuário");
        return res.json({ success: true, data: user });
      }
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async createUser(req: Request, res: any) {
    const { nome, cpf, email, telefone, sexo, data_de_nascimento } = req.body;
    const userObj: UserInterface = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      sexo: sexo,
      data_de_nascimento: data_de_nascimento,
    };

    try {
      const user = await UserRepository.createUser(userObj);

      Logger.info("Usuário criado");
      return res.status(201).json({
        success: true,
        msg: "Usuário criado",
        data: user,
      });
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const { nome, cpf, email, telefone, sexo, data_de_nascimento } = req.body;
    const userObj: UserInterface = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      sexo: sexo,
      data_de_nascimento: data_de_nascimento,
    };

    try {
      if (!req.params.id || isNaN(parseInt(req.params.id))) {
        Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
        return res
          .status(500)
          .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
      }

      const userId: number = parseInt(req.params.id);
      const user = await UserRepository.getOneUser(userId);

      if (!user) {
        Logger.error("Usuário não existe");
        return res.status(500).json({
          success: false,
          msg: "Usuário não existe",
        });
      } else {
        const updatedUser = await UserRepository.updateUser(userId, userObj);
        Logger.info("Usúario atualizado");
        return res.status(200).json({
          success: true,
          msg: "Usúario atualizado",
          data: userObj,
        });
      }
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      if (!req.params.id || isNaN(parseInt(req.params.id))) {
        Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
        return res
          .status(500)
          .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
      }

      const userId: number = parseInt(req.params.id);
      const user = await UserRepository.getOneUser(userId);

      if (!user) {
        Logger.error("Usuário não existe");
        return res.status(500).json({
          success: false,
          msg: "Usuário não existe",
        });
      } else {
        await UserRepository.deleteUser(userId);
        Logger.info("Usúario deletado");
        return res.status(200).json({
          success: true,
          msg: "Usúario deletado",
        });
      }
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }
}

export default UserController;
