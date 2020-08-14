import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import { injectable, inject } from 'tsyringe';
// import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRespository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    users.forEach(user => delete user.password);

    return users;
  }
}

export default ListProvidersService;
