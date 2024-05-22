import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    const food_data = mongoose.connection.db.collection("items");
    const data = await food_data.find({}).toArray();
    const category_data = mongoose.connection.db.collection("category");
    const cateData = await category_data.find({}).toArray();
    global.food_items = data;
    global.cate_items = cateData;

    console.log("db connected");
  } catch (error) {
    console.log("db not connected");
  }
};
