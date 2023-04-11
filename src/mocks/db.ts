import { Todo } from "../pages/TodoList";

export const userDb = {
  userId: "1234",
};

export const todoDb : Todo[] = [
  {
    id: 0,
    check: true,
    value: "공부하기",
  },
  {
    id: 1,
    check: false,
    value: "운동하기",
  }
];

export const db = {
  userDb, todoDb
}