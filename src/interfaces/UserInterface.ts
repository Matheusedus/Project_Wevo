export interface UserInterface {
  id?: number;
  nome: string;
  cpf: number;
  email: string;
  telefone: string;
  sexo: string;
  data_de_nascimento: Date;
  createdat?: Date;
  updatedat?: Date;
}
