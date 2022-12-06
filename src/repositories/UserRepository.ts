import { UserInterface } from "../interfaces/UserInterface";
import User from "../models/User";

class UserRepository {
  getAllUsers(): Promise<Array<any>> {
    return User.findAll();
  }

  getOneUser(userId: number): Promise<any | null> {
    return User.findOne({
      where: {
        id: userId,
      },
    });
  }

  createUser(dados: UserInterface): Promise<any> {
    return User.create({
      nome: dados.nome,
      cpf: dados.cpf,
      email: dados.email,
      telefone: dados.telefone,
      sexo: dados.sexo,
      data_de_nascimento: dados.data_de_nascimento,
    });
  }

  updateUser(userId: number, dados: UserInterface): Promise<Array<any>> {
    return User.update(
      {
        nome: dados.nome,
        cpf: dados.cpf,
        email: dados.email,
        telefone: dados.telefone,
        sexo: dados.sexo,
        data_de_nascimento: dados.data_de_nascimento,
      },
      {
        where: {
          id: userId,
        },
      }
    );
  }

  deleteUser(userId: number): Promise<any> {
    return User.destroy({
      where: {
        id: userId,
      },
    });
  }
}

export default new UserRepository();
