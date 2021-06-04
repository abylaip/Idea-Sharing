const express = require("express");
const mongoose = require("mongoose");
const ideasRouter = require("./controllers/ideas");
const loginRouter = require("./controllers/login");
const usersRouter = require("./controllers/users");
const authMiddleware = require("./controllers/auth");
const uploadRouter = require("./controllers/upload");
const cors = require("cors");
const app = express();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to database");
  });

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/auth", loginRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/users", authMiddleware, usersRouter);
app.use("/api/ideas", authMiddleware, ideasRouter);
module.exports = app;
