import JWT from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

// Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_ACCESS_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
