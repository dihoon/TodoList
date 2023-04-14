import { verify } from "jsonwebtoken-esm";

const verifyToken = (token: string) => {
  const jwt = verify(token, import.meta.env.VITE_JWT_SECRETKEY, {
    complete: true,
  });
  return jwt;
};

export default verifyToken;
