import { setupWorker, rest } from "msw";
import { handlers } from "./handlers";

interface LoginBody {
  userId: string;
  password: string;
}

interface LoginResponse {
  userId: string;
  password: string;
}

export const worker = setupWorker(...handlers);
