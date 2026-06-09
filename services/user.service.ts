import { ApiError } from "../utils/api-error";

const users = [
  { id: 1, name: "budi" },
  { id: 2, name: "joko" },
  { id: 3, name: "siti" },
];

export const getUsersService = () => {
  return users;
};

export const getUserService = (id: number) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new ApiError("User not found!", 404);
  }

  return user;
};

export const createUserService = (name: string) => {
  const latestId = users[users.length - 1].id;

  users.push({ id: latestId + 1, name });

  return { message: "create user success" };
};
