import { rest } from "msw";
import { userDb, db } from "./db";

interface LoginBody {
  userId: string;
  password: string;
}

interface LoginResponse {
  result: string;
}

export const handlers = [
  rest.post<LoginBody, LoginResponse>(
    "https://api.server.com/user",
    async (req, res, ctx) => {
      const { userId, password } = await req.json();
      console.log(userId);

      if (userDb.hasOwnProperty(userId)) {
        if (userDb.userId === password) {
          return res(
            ctx.status(200),
            ctx.json({ result: "success", token: "encodedData" })
          ); // 로그인 성공
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
    return res(ctx.status(200), ctx.json(db.todoDb));
  }),
  rest.delete("https://api.server.com/todolist/:todoId", (req, res, ctx) => {
    const { todoId } = req.params;
    db.todoDb = db.todoDb.filter((x) => x.id !== parseInt(todoId as string));
    return res(ctx.status(200));
  }),
  rest.delete("https://api.server.com/todolist", (req, res, ctx) => {
    db.todoDb = [];
    return res(ctx.status(200));
  }),
  rest.post("https://api.server.com/todolist", async (req, res, ctx) => {
    const { value } = await req.json();

    if (value === "") return res(ctx.status(400));

    if (db.todoDb.filter((x) => x.value === value).length !== 0)
      return res(ctx.status(400));

    db.todoDb.push({
      id: Date.now(),
      check: false,
      value,
    });
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  rest.patch(
    "https://api.server.com/todolist/:todoId",
    async (req, res, ctx) => {
      const update = await req.json();
      console.log(update);
      const todoId = parseInt(req.params.todoId as string);
      db.todoDb = db.todoDb.map((x) => {
        if (x.id === todoId) {
          console.log("x 값, ", x);
          x = { ...x, ...update };
          console.log("업데이트 x, ", x);
        }
        return x;
      });
      return res(ctx.status(200));
    }
  ),
];
