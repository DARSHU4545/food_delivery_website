import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState([]);
  const [Search, setSearch] = useState("");
  return (
    <Context.Provider
      value={{ foods, setFoods, category, setCategory, Search, setSearch }}
    >
      {children}
    </Context.Provider>
  );
};
