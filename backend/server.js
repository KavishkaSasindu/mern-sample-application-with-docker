const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const UserAuthRouter = require("./routers/UserAuthRouter");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("Db is connected");
    app.listen(5000, () => {
      console.log("server is connected");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(UserAuthRouter);
