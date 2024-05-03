import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // check if all the fields are filled
  if (!username || !email || !password || username === "" || email === "") {
    return res.status(400).json({ message: "Please fill all the fields" });
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
    res.status(500).json({ message: error.message });
  }
};
