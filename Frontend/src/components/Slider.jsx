import { useContext } from "react";
import { Context } from "../store/store";

const Slider = () => {
  const { setSearch } = useContext(Context);

  const onHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" w-[100%] h-[75vh]  ">
      <img
        src="https://images.healthshots.com/healthshots/hi/uploads/2023/06/05194132/contamination.jpg"
        alt=""
        className=" w-[100%] h-[100%] object-cover "
      />
      <form
        onSubmit={onHandle}
        className=" absolute top-[50%]  w-[100%] flex  items-center
      "
      >
        <input
          type="search"
          className=" w-[50%] ml-[25%] h-10  text-white placeholder:text-white pl-3"
          placeholder=" Search .........."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Slider;
