import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://food-delivery-website-jo06.onrender.com/api/v1/login",
        {
          email,
          password,
        }
      );

      if (res.status === 200) {
        alert("login success");
        localStorage.setItem("token", res.data.token);
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        alert("invalid email and password");
      }
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <Layout>
      <div
        className=" container w-full flex h-[85vh] pt-3 pb-3 justify-center"
        id="login-bg-image"
      >
        <div className="w-1/2  h-full  flex justify-center   ">
          <form className=" border-2 w-[70%]  " onSubmit={onHandleSubmit}>
            <h1 className=" font-bold text-2xl  underline pt-5 pb-6 text-center uppercase">
              Login
            </h1>
            <div className=" flex flex-col gap-6 mt-1 ml-20">
              <label htmlFor="un">Email :</label>

              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="  w-[70%] border-black border-2 p-1 outline-teal-500 bg-transparent"
              />

              <label htmlFor="un">Password:</label>

              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="  w-[70%] border-black border-2 p-1 outline-teal-500 bg-transparent"
              />
            </div>

            <div className=" w-[90%] flex justify-center h-20  pt-8 items-center">
              <Button variant="contained" type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
