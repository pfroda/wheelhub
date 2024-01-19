import { AppDataSource } from '../db/db';
import { User } from '../models/User';
import crypto from 'crypto';

async function createUser(req, res) {
  try {
    const user: User = req.body;

    // Check campos vacíos
    if (!user.username || !user.password) {
      throw new Error('Username o password están vacíos');
    }

    const UserRepository = await AppDataSource.getRepository(User);

    // Check usuario existente
    const existingUser = await UserRepository.findOne({
      where: { username: user.username },
    });

    if (existingUser) {
      throw new Error('Este usuario ya existe');
    }

    // Hashear contraseña
    const hashedPassword = await crypto
      .createHash('sha256')
      .update(user.password)
      .digest('hex');

    // Crear usuario
    const newUser = await UserRepository.save({
      username: user.username,
      password: hashedPassword,
    });

    res.json({
      status: 200,
      message: 'El usuario se creó correctamente',
    });
  } catch (err) {
    console.error('Error creando usuario', err);
  }
}

export { createUser };
