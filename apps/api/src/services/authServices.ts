import bcrypt from 'bcryptjs';
import prisma from '../prisma';
import { User } from '../utils/interfaces';

export const register = async (auth: User) => {
  const hashedPassword = await bcrypt.hash(auth.password, 10);
  return await prisma.user.create({
    data: {
      email: auth.email,
      password: hashedPassword,
      role: auth.role,
    },
  });
};

export const login = async (auth: User) => {
  const user = await prisma.user.findUnique({
    where: { email: auth.email },
  });
  if (!user) throw new Error('User not found');

  const valid = await bcrypt.compare(auth.password, user.password);
  if (!valid) throw new Error('Invalid password');
  return user;
};
export function getUsers() {
  throw new Error('Function not implemented.');
}
