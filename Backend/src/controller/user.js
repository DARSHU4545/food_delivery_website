import { User } from "../models/user.model.js";
export const register = async (req, res) => {
  try {
    const { username, email, location, phone, password } = req.body;

    if (!username || !email || !location || !phone || !password) {
      res.status(500).json({ message: "fill the form" });
    }
    const isEmail = await User.findOne({ email });
    if (isEmail) {
      return res.status(400).json({ message: "user already exist" });
    }
    const user = await User.create({
      username,
      email,
      location,
      phone,
      password,
    });
    res.status(200).json({ success: true, message: "register sucess" });
  } catch (error) {
    console.log("register ", error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExist = await User.findOne({ email });
    if (!isExist) {
      res.status(500).json({ message: "invalid username and password" });
    }
    const user = await isExist.camparePassword(password);
    if (user) {
      const token = await isExist.jwtTokenGenerate();
      res.status(200).json({ success: true, message: "login success", token });
    }
  } catch (error) {
    console.log("login error", error);
  }
};
