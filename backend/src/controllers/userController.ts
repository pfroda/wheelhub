import { AppDataSource } from '../db/db';
import { User } from '../models/User';
// import { UserRepository } from '../db/db';

async function createUser(req, res) {
  const user = req.body;
  const UserRepository = await AppDataSource.getRepository(User);
  const newUser = await UserRepository.save({
    username: user.username,
    password: user.password,
  });
  res.json({
    status: 200,
    message: 'El usuario se creó correctamente',
  });
}

export { createUser };
