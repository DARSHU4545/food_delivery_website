export const foodData = async (req, res) => {
  try {
    res.status(200).send([global.food_items, [global.cate_items]]);
  } catch (error) {
    console.log(error);
  }
};
