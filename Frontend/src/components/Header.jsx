import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-[100%] h-[70px] flex justify-between  px-10  items-center bg-green-500 text-white  sticky z-10">
      <div className=" text-xl">Darshan</div>
      <nav>
        <ul className=" flex gap-x-10">
          <NavLink to={"/"}>Home</NavLink>
          {localStorage.getItem("token") ? (
            <div className=" flex gap-x-8">
              <NavLink to={"/cart"}>Cart</NavLink>
              <NavLink to={"/myorder"}>myorder</NavLink>
            </div>
          ) : null}
          {localStorage.getItem("token") ? (
            <NavLink>Logout</NavLink>
          ) : (
            <div className=" flex gap-x-8">
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink to={"/register"}>SignUp</NavLink>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
