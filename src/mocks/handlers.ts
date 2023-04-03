import { rest } from "msw";
import { userDb } from "./db";

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
          return res(ctx.status(200), ctx.json({ result: "success", token: "encodedData" })); // 로그인 성공
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
];
