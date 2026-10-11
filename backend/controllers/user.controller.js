import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import crypto from "node:crypto";

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please Provide Email and Password" });
  }
  try {
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserExist.password,
    );

    if (isPasswordCorrect) {
      let token = crypto.randomBytes(20).toString("hex");

      isUserExist.token = token;
      await isUserExist.save();
      return res.status(200).json({ token: token });
    } else {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong ${error}` });
  }
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please provide name, email and password",
    });
  }

  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User SignUp Sccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

export { login, signup };
