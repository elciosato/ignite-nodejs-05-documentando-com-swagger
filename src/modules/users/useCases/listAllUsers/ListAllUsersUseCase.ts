import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userAdmin = this.usersRepository.findById(user_id);
    if (!userAdmin) {
      throw new Error("User id not found!");
    }
    if (!userAdmin.admin) {
      throw new Error("User id is not allowed to list all users!");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase, IRequest };
