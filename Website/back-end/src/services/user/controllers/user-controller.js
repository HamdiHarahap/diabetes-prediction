import UserRepositories from '../repositories/user-repositories.js';
import response from '../../../utils/response.js';
import { InvariantError } from '../../../exceptions/index.js';

export const createUser = async (req, res, next) => {
  const { username, password } = req.body;

  const isUsernameExist = await UserRepositories.verifyNewUsername(username);

  if (isUsernameExist) {
    return next(
      new InvariantError('Gagal menambahkan user. Username sudah digunakan')
    );
  }

  const user = await UserRepositories.createUser({ username, password });

  if (!user) {
    return next(new InvariantError('User Gagal ditambahkan'));
  }

  return response(res, 201, 'User berhasil ditambahkan', { user });
};

export const getUserLogged = async (req, res, next) => {
  const { id } = req.user;

  const user = await UserRepositories.getUserLogged(id);

  return response(res, 201, 'User berhasil ditampilkan', user);
};
