import React from "react";

const Carditem = ({ food }) => {
  const option = [1, 2, 3, 4, 5, 6];
  const category = Object.keys(food.options[0]);

  return (
    <div className=" w-[100%]  bg-white rounded-md hover:scale-[0.9] duration-[0.3s]">
      <div className="card  " style={{ width: "20rem", height: "28rem" }}>
        <div className=" h-1/2 ">
          <img
            src={food.img}
            className="card-img-top object-cover w-[100%] h-[100%]"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h3 className="card-title text-2xl">{food.name}</h3>
          <p>{food.description}</p>
          <div className=" flex mt-3 gap-x-3 py-4">
            <div className=" flex gap-x-2">
              <p className=" font-bold">Qnt :</p>
              <select className=" text-white px-1">
                {option.map((opt) => {
                  return (
                    <option value="" key={opt}>
                      {opt}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <select name="" id="" className=" text-white  px-1">
                {/* <option value="">half</option>
                <option value="">full</option> */}
                {category.map((cate, e) => {
                  return (
                    <option value="" key={e}>
                      {cate}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className=" flex">
              <h4 className=" font-bold">Total :</h4>
              <h4 className=" font-bold">$7.70</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carditem;
