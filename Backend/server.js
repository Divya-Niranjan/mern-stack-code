const express = require("express");
const mongoose = require("mongoose"); //mongoose is an ODM(Object Data Model) that allows us to interact with the db using javascript objects instead of using the mongo shell or the mongo driver directly
require("dotenv").config();
const bodyParser = require("body-parser"); //body-parser is a middleware that parses the body of the request and puts it in req.body
const app = express(); //app is the server
const PORT = 2000;
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");
// const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors"); //cors is a middleware that allows us to make requests from the client side to the server side

const connectToDb = async () => {

  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      //process.env.MONGODB_URI is the connection string to the db
      useNewUrlParser: true, //these are options to avoid deprecation warnings in the console
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
connectToDb();
//connect to db and then start the server so that the server can connect to the db and then start listening to requests from the client side

app.use(express.json()); //middleware
express.json() //is a middleware that parses the body of the request and puts it in req.body
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json()); //middleware
app.use("/api", todoRoutes); //middleware")
app.use("/api",userRoutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

