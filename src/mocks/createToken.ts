import { sign } from "jsonwebtoken-esm";

interface UserData {
  userId: string;
}

const secret = import.meta.env.VITE_JWT_SECRETKEY || "";

const createToken = (data: UserData) => {
  return sign(data, secret, { algorithm: "HS256" });
};

export default createToken;
