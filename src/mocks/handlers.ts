import { rest } from "msw";
import { db } from "./db";
import createToken from "./createToken";
import { JwtPayload } from "jsonwebtoken-esm";
import verifyToken from "./verifyToken";

interface Todo {
  id: number;
  value: string;
  check: boolean;
}

export const handlers = [
  rest.post(
    "https://api.server.com/user",
    async (req, res, ctx) => {
      const { userId, password } = await req.json();

      if (db.userDb.hasOwnProperty(userId)) {
        if (db.userDb[userId] === password) {
          const token = createToken({ userId });

          return res(ctx.status(200), ctx.json({ result: "success", token })); // 로그인 성공
        }
        return res(
          ctx.status(400),
          ctx.json({ result: "not matched password" })
        ); // 비밀번호 불일치
      } else {
        return res(ctx.status(400), ctx.json({ result: "fail" })); // 회원 정보 없음
      }
    }
  ),
  rest.get("https://api.server.com/todolist", async (req, res, ctx) => {
    const token = req.headers.get("authorization");
    if (!token) {
      return res(ctx.status(400));
    }
    const jwt = verifyToken(token);
    if (!jwt) return res(ctx.status(400), ctx.json({}));

    const {userId} = jwt.payload as JwtPayload;
    return res(ctx.status(200), ctx.json(db.todoDb[userId]));
  }),
  rest.delete("https://api.server.com/todolist/:todoId", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(400));
    const {userId} = verifyToken(token).payload as JwtPayload;

    const { todoId } = req.params;
    const tododb = db.todoDb[userId] as Todo[];
    db.todoDb[userId] = tododb.filter((x) => x.id !== parseInt(todoId as string));
    return res(ctx.status(200));
  }),
  rest.delete("https://api.server.com/todolist", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(400));
    const {userId} = verifyToken(token).payload as JwtPayload;

    db.todoDb[userId] = [];
    return res(ctx.status(200));
  }),
  rest.post("https://api.server.com/todolist", async (req, res, ctx) => {
    const body = await req.json();
    const token = req.headers.get("Authorization");
    if (!token) return res(ctx.status(400));

    const {userId} = verifyToken(token).payload as JwtPayload;
    const { value } = body;
    if (value === "") return res(ctx.status(400));
    const todoDb = db.todoDb[userId] as Todo[];
    if (todoDb.filter((x) => x.value === value).length !== 0)
    return res(ctx.status(400));

    todoDb.push({
      id: Date.now(),
      check: false,
      value,
    });

    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  rest.patch(
    "https://api.server.com/todolist/:todoId",
    async (req, res, ctx) => {
      const token = req.headers.get("Authorization");
      if (!token) return res(ctx.status(400));
      const {userId} = verifyToken(token).payload as JwtPayload;
      const update = await req.json();
      const todoId = parseInt(req.params.todoId as string);

      const todoDb = db.todoDb[userId] as Todo[];
      db.todoDb[userId] = todoDb.map((x : Todo) => {
        if (x.id === todoId) {
          x = { ...x, ...update };
        }
        return x;
      });
      return res(ctx.status(200));
    }
  ),
  rest.post("https://api.server.com/register", async (req, res, ctx) => {
    const { userId, password } = await req.json();

    if (db.userDb.hasOwnProperty(userId)) return res(ctx.status(400));

    db.userDb = {
      ...db.userDb,
      [userId]: password,
    };
    db.todoDb = {
      ...db.todoDb,
      [userId] : [],
    }
    return res(ctx.status(200));
  }),
];