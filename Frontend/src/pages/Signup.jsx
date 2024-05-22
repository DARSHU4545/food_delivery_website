import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUser] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useState();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/v1/register", {
        username,
        email,
        location,
        phone,
        password,
      });
      setEmail("");
      setPassword("");
      setPhone("");
      setUser("");
      setLocation("");
      if (res.status == 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <Layout>
      <div
        className=" container w-full flex h-full justify-center"
        id="signup-bg-image"
      >
        <div className=" h-full w-1/2 flex justify-center mb-2">
          <form
            className=" border-2 w-[70%]   mt-4"
            onSubmit={onHandleSubmit}
            id="signup-blur"
          >
            <h1 className=" font-bold text-2xl  underline pt-2 pb-6 text-center uppercase text-yellow-300">
              register
            </h1>
            <div className=" flex flex-col gap-3 mt-1 ml-20  font-bold">
              <label htmlFor="un">User Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                className="  w-[70%]  border-black border-2 p-1 outline-teal-500 bg-transparent"
                id="un"
              />
              <label htmlFor="email">Email :</label>

              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="  w-[70%] border-black border-2 p-1 outline-teal-500 bg-transparent"
                id="email"
              />
              <label htmlFor="loc">location :</label>

              <input
                type="text"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                className="  w-[70%] border-black border-2 p-1 outline-teal-500 bg-transparent"
                id="loc"
              />
              <label htmlFor="pn">Phone No :</label>

              <input
                type="text"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="  w-[70%]  border-black border-2 p-1 outline-teal-500 bg-transparent"
                id="pn"
              />
              <label htmlFor="pass">Password:</label>

              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="  w-[70%] border-black border-2 p-1 outline-teal-500 bg-transparent"
                id="pass"
              />
            </div>

            <div className=" w-[90%] flex justify-center h-20  pt-8 items-center">
              <Button variant="contained" type="submit">
                SignUp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
