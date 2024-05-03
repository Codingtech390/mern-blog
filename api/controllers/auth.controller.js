import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // check if all the fields are filled
  if (!username || !email || !password || username === "" || email === "") {
    next(errorHandler(400, "All fields are required!"));
  }

  // Hash the password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // If there is no error, get the username, email and password
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    // Create a new user
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
