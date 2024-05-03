import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

// Sign in a new user

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  // check if email and password fields are filled
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required!"));
  }

  try {
    // In order to sign in check that the user's email and password are valid first. If there is a match, generate a token with jwt.

    // Check if the user's email is valid
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User not found!"));
    }
    // Check if the user's password is valid
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password!"));
    }
    // Generate a token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    // Remove the password
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
