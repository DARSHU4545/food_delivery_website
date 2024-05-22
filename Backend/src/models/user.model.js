import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//hashing the password

userSchema.pre("save", async function () {
  const hash_password = await bcrypt.hash(this.password, 10);
  this.password = hash_password;
});

//comparing password
userSchema.methods.camparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//jwt create

userSchema.methods.jwtTokenGenerate = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.JWT_SECRETE_TOKEN,
    {
      expiresIn: "10d",
    }
  );
};

export const User = new model("User", userSchema);
