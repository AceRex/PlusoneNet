import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("Auth_token", token, {
    httpOnly: true,
    maxAge: 30 * 60 * 24 * 60 * 1000,
    sameSite: "strict",
  });
};

export default generateToken;
