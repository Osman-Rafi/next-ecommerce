import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!, {
      dbName: "next-ecom",
    });
    const connection = mongoose.connection;

    connection.on("connection", () => {
      console.log("connection established");
    });

    connection.on("error", () => {
      console.log("connection error");
    });
  } catch (error) {}
};

export { connect };
