import { User } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";
import { ApiError } from "../utils/api-error.js";

export const getUsersService = async () => {
  const users = await prisma.user.findMany({
    include: { addresses: true },
  });
  return users;
};

export const getUserService = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user) {
    throw new ApiError("User not found!", 404);
  }

  return user;
};

export const createUserService = async (body: User) => {
  await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
      role: "USER",
    },
  });

  return { message: "create user success" };
};

export const updateUserService = async (id: number, body: Partial<User>) => {
  await getUserService(id);

  await prisma.user.update({
    where: { id: id },
    data: body,
  });

  return { message: "update user success" };
};

export const deleteUserService = async (id: number) => {
  await getUserService(id);

  await prisma.user.delete({
    where: { id: id },
  });

  return { message: "delete user success" };
};
