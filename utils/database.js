import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already conncted");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://moorza:mtfaqRrqQLij9tyQ@promptopia.weiratk.mongodb.net/?retryWrites=true&w=majority&appName=promptopia",
      {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
