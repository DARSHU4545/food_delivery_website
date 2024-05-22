import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Carditem from "./Card";
import { Context } from "../store/store";
import { DotLoader } from "react-spinners";

const Cards = () => {
  const [spinner, setSpinner] = useState(false);

  const { foods, setFoods, category, setCategory, Search } =
    useContext(Context);

  const foodData = async () => {
    try {
      setSpinner(true);
      const res = await axios.post("http://localhost:8000/api/v1/fooditem");
      setFoods(res.data[0]);
      setCategory(res.data[1][0]);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    foodData();
  }, []);

  return (
    <div className=" w-[100%] ">
      {category == []
        ? null
        : category.map((cat, e) => {
            return (
              <div key={e} className=" w-[100%] ">
                <h1 className=" text-white text-2xl underline w-[10%] pl-6 pt-4">
                  {cat.CategoryName}
                </h1>
                {spinner == true ? (
                  <DotLoader className=" text-4xl" />
                ) : (
                  <div className=" w-[100%] flex flex-wrap gap-5 justify-center mt-4">
                    {foods
                      .filter(
                        (filter) =>
                          filter.CategoryName == cat.CategoryName &&
                          filter.name
                            .toLowerCase()
                            .includes(Search.toLowerCase())
                      )
                      .map((data, e) => {
                        return (
                          <div key={e}>
                            <Carditem food={data} />
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
      <div className=" flex flex-wrap gap-x-10 gap-y-5 justify-center"></div>
    </div>
  );
};

export default Cards;
