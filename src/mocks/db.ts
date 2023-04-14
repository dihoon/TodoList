interface Todo {
  id: number;
  value: string;
  check: boolean;
}

interface Object {
  [key: string]: string | Todo[];
}

const userDb : Object = {
  userId: "1234",
};

const todoDb : Object = {
  userId: [
    {
      id: 0,
      value: "샘플1",
      check: true,
    },
    {
      id: 1,
      value: "샘플2",
      check: false,
    }
  ],
};

export const db = {
  userDb,
  todoDb,
};
